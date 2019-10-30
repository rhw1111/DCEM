using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public class TechnicalSupportService : ITechnicalSupportService
    {
        private const string EntityName = "mcs_supportorder";
        private ICrmService _crmService;
        public TechnicalSupportService(ICrmService crmService)
        {
            _crmService = crmService;
        }

        public async Task<QueryResult<CrmEntity>> QueryListByPage(int orderstauts = 0, string searchkey = "", int pageSize = 10, int pageNum = 1, string sort = "", string token = "")
        {
            try
            {
                string filterstr = "";
                if (orderstauts > 0)
                {
                    filterstr += $"<condition attribute='mcs_orderstatus' operator='eq' value='{orderstauts}' />";
                }

                if (!string.IsNullOrEmpty(searchkey))
                {
                    filterstr += $"<filter type='or' >";
                    filterstr += $"<condition attribute='mcs_name' operator='like' value='%{searchkey}%' />";
                    filterstr += $"<condition attribute='mcs_title' operator='like' value='%{searchkey}%' />";
                    filterstr += $"</filter>";
                }

                var fetchxml = string.Format($@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"" count=""{pageSize}"" page=""{pageNum}"">
                                <entity name = ""mcs_supportorder"" >
                                    <attribute name = ""mcs_supportorderid"" />
                                    <attribute name = ""mcs_name"" />
                                    <attribute name = ""mcs_repairdate"" />
                                    <attribute name = ""mcs_orderstatus"" />
                                    <attribute name = ""mcs_title"" />    
                                <filter type = ""and"" >
                                  <condition attribute='statecode' operator='eq' value='0' />
                                  {filterstr}
                               </filter>
                                </entity>
                            </fetch>");
                XDocument xmlDoc = XDocument.Parse(fetchxml);

                var request = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = EntityName,
                    FetchXml = xmlDoc,
                };
                var crmResponse = await _crmService.Execute(request);
                CrmRetrieveMultipleFetchResponseMessage response = crmResponse as CrmRetrieveMultipleFetchResponseMessage;

                QueryResult<CrmEntity> queryResult = new QueryResult<CrmEntity>();
                if (response.Value != null)
                {
                    queryResult.Results = response.Value.Results;
                    queryResult.TotalCount = response.Value.Count;
                    queryResult.CurrentPage = pageNum;
                }
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<CrmEntity> QueryById(Guid entityId)
        {
            try
            {
                CrmEntity entity = null;
                entity = await _crmService.Retrieve(EntityName, entityId, "");
                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        #region 获取明细 

        public async Task<TechnicalSupportInfoResponse> QueryInfo(Guid guid)
        {
            var dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" });

            var model = new TechnicalSupportInfoResponse(); 
            var mcs_supportorder = await _crmService.Retrieve("mcs_supportorder", guid, string.Empty, null, dicHead);

            #region 厅店附件材料获取


            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_attachment'>
                <attribute name='mcs_filename' />
                <attribute name='mcs_code' />
                <attribute name='mcs_filesize' />
                <attribute name='mcs_filetype' />
                <attribute name='mcs_fileurl' />
                <order attribute='mcs_code' descending='false' />
                <filter type='and'>
                <condition attribute='mcs_supportorderid' operator='eq' value='{guid}' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_attachment",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add("Prefer", dicHead["Prefer"]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var attachmentlist = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion
            #region 主机厂附件材料获取

            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_warrantyattachment'>
                 <attribute name='mcs_name' />
                <attribute name='mcs_code' />
                <attribute name='mcs_filesize' />
                <attribute name='mcs_filetype' />
                <attribute name='mcs_fileurl' /> 
                <order attribute='mcs_code' descending='false' />
                <filter type='and'>
                <condition attribute='mcs_supportorderid' operator='eq' value='{guid}' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });

            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_warrantyattachment",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add("Prefer", dicHead["Prefer"]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var mainlist = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            model.TechnicalSupport = mcs_supportorder;
            model.DealerAttachment = attachmentlist.Value.Results;
            model.Warrantyattachment = mainlist.Value.Results;
            return model;

        }
        #endregion
        /// <summary>
        /// 创建或编辑实体
        /// </summary>
        /// <param name="crmEntity"></param>
        /// <returns></returns>
        public async Task<Guid> AddOrEditEntity(TechnicalSupportRequest request)
        {
            Guid guid = request.Id;
            try
            {
                guid = request.Id==null ? Guid.NewGuid():request.Id;
                CrmExecuteEntity createorUpdateEntity = new CrmExecuteEntity(request.EntityName, guid);
                createorUpdateEntity.Attributes.Add("mcs_name", request.mcs_name);
                createorUpdateEntity.Attributes.Add("mcs_orderstatus", request.mcs_orderstatus);
                createorUpdateEntity.Attributes.Add("mcs_repairdate", request.mcs_repairdate);
                createorUpdateEntity.Attributes.Add("mcs_title", request.mcs_title);
                if (!string.IsNullOrEmpty(request.mcs_batterymodel))
                {
                    createorUpdateEntity.Attributes.Add("mcs_batterymodel", request.mcs_batterymodel);
                }
                if (!string.IsNullOrEmpty(request.mcs_batteryserialnumber))
                {
                    createorUpdateEntity.Attributes.Add("mcs_batteryserialnumber", request.mcs_batteryserialnumber);
                }
                if (!string.IsNullOrEmpty(request.mcs_carplate))
                {
                    createorUpdateEntity.Attributes.Add("mcs_carplate", request.mcs_carplate);
                }
                if (request.mcs_customerid.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_carplate", new CrmEntityReference("mcs_customer", request.mcs_customerid.Value));
                }
                if (!string.IsNullOrEmpty(request.mcs_customername))
                {
                    createorUpdateEntity.Attributes.Add("mcs_customername", request.mcs_customername);
                }
                if (!string.IsNullOrEmpty(request.mcs_customerphone))
                {
                    createorUpdateEntity.Attributes.Add("mcs_customerphone", request.mcs_customerphone);
                }
                if (!string.IsNullOrEmpty(request.mcs_diagnosiscontent))
                {
                    createorUpdateEntity.Attributes.Add("mcs_diagnosiscontent", request.mcs_diagnosiscontent);
                }
                if (!string.IsNullOrEmpty(request.mcs_email))
                {
                    createorUpdateEntity.Attributes.Add("mcs_email", request.mcs_email);
                }
                if (!string.IsNullOrEmpty(request.mcs_enginenumber))
                {
                    createorUpdateEntity.Attributes.Add("mcs_enginenumber", request.mcs_enginenumber);
                }
                if (request.mcs_ismodifiedparts.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_ismodifiedparts", request.mcs_ismodifiedparts.Value);
                }
                if (!string.IsNullOrEmpty(request.mcs_malfunctioncontent))
                {
                    createorUpdateEntity.Attributes.Add("mcs_malfunctioncontent", request.mcs_malfunctioncontent);
                }
                if (request.mcs_malfunctiontypeid.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_malfunctiontypeid", new CrmEntityReference("mcs_malfunctiontype", request.mcs_malfunctiontypeid.Value));
                }
                if (request.mcs_mileage.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_mileage", request.mcs_mileage.Value);
                }
                if (!string.IsNullOrEmpty(request.mcs_modifiedpartscontent))
                {
                    createorUpdateEntity.Attributes.Add("mcs_modifiedpartscontent", request.mcs_modifiedpartscontent);
                }
                if (!string.IsNullOrEmpty(request.mcs_phone))
                {
                    createorUpdateEntity.Attributes.Add("mcs_phone", request.mcs_phone);
                }
                if (request.mcs_repairdate.HasValue)
                {
                    createorUpdateEntity.Attributes.Add("mcs_repairdate", request.mcs_repairdate.Value);
                }

                if (createorUpdateEntity.Id != Guid.Empty)
                {
                    await _crmService.Update(createorUpdateEntity);
                }
                else
                {
                    guid = await _crmService.Create(createorUpdateEntity);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return guid;
        }
    }
}
