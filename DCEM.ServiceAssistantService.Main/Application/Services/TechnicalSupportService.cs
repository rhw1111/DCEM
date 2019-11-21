using DCEM.Main;
using DCEM.Main.Context;
using DCEM.Main.Entities;
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
using Newtonsoft.Json.Linq;
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

                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                var request = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = EntityName,
                    FetchXml = xmlDoc,
                    ProxyUserId = userInfo != null ? userInfo.systemuserid : null
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
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                entity = await _crmService.Retrieve(EntityName, entityId, "", userInfo != null ? userInfo.systemuserid : null);
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
            #region 创建编辑主要实体
            Guid guid = Guid.Empty;
            try
            {
                guid = string.IsNullOrEmpty(request.Id) ? Guid.NewGuid() : Guid.Parse(request.Id);
                CrmExecuteEntity createorUpdateEntity = new CrmExecuteEntity(request.EntityName, guid);

                if (!string.IsNullOrEmpty(request.mcs_title))
                {
                    createorUpdateEntity.Attributes.Add("mcs_title", request.mcs_title);
                }

                if (!string.IsNullOrEmpty(request.mcs_serviceadvisorid))
                {
                    createorUpdateEntity.Attributes.Add("mcs_serviceadvisorid", new CrmEntityReference("systemuser", Guid.Parse(request.mcs_serviceadvisorid)));
                }

                if (!string.IsNullOrEmpty(request.mcs_repairnameid))
                {
                    createorUpdateEntity.Attributes.Add("mcs_repairnameid", new CrmEntityReference("systemuser", Guid.Parse(request.mcs_repairnameid)));
                }
                if (!string.IsNullOrEmpty(request.mcs_serviceorderid))
                {
                    createorUpdateEntity.Attributes.Add("mcs_serviceorderid", new CrmEntityReference("mcs_serviceproxy", Guid.Parse(request.mcs_serviceorderid)));
                }
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
                if (!string.IsNullOrEmpty(request.mcs_customerid))
                {
                    createorUpdateEntity.Attributes.Add("mcs_customerid", new CrmEntityReference("mcs_vehowner", Guid.Parse(request.mcs_customerid)));
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
                if (!string.IsNullOrEmpty(request.mcs_malfunctiontypeid))
                {
                    createorUpdateEntity.Attributes.Add("mcs_malfunctiontypeid", new CrmEntityReference("mcs_malfunctiontype", Guid.Parse(request.mcs_malfunctiontypeid)));
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
                if (!string.IsNullOrEmpty(request.mcs_techsystem))
                {
                    createorUpdateEntity.Attributes.Add("mcs_techsystem", int.Parse(request.mcs_techsystem));
                }
                if (!string.IsNullOrEmpty(request.mcs_cartypeid))
                {
                    createorUpdateEntity.Attributes.Add("mcs_cartypeid", new CrmEntityReference("mcs_cartype", Guid.Parse(request.mcs_cartypeid)));
                }

                if (!string.IsNullOrEmpty(request.Id))
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
            #endregion





            return guid;
        }



        #region 创建修改
        /// <summary>
        /// 创建或编辑实体
        /// </summary>
        /// <param name="crmEntity"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> AddOrUpdate(JObject jo)
        {
            var supportorderGuid = new Guid();
            var supportorderEntity = new CrmExecuteEntity("mcs_supportorder", supportorderGuid);
            var outGuid = Guid.NewGuid();
            #region 更新主要实体
            if (jo.ContainsKey("Id") && Guid.TryParse(jo["Id"].ToString(), out outGuid))
            {
                supportorderGuid = Guid.Parse(jo.Value<string>("Id"));
                supportorderEntity.Id = supportorderGuid;
            }
            if (jo.ContainsKey("mcs_title"))
                supportorderEntity.Attributes.Add("mcs_title", jo.Value<string>("mcs_title"));
            if (jo.ContainsKey("mcs_serviceadvisorid") && Guid.TryParse(jo["mcs_serviceadvisorid"].ToString(), out outGuid))
                supportorderEntity.Attributes.Add("mcs_serviceadvisorid", new CrmEntityReference("systemuser", Guid.Parse(jo.Value<string>("mcs_serviceadvisorid"))));
            if (jo.ContainsKey("mcs_repairnameid") && Guid.TryParse(jo["mcs_repairnameid"].ToString(), out outGuid))
                supportorderEntity.Attributes.Add("mcs_repairnameid", new CrmEntityReference("systemuser", Guid.Parse(jo.Value<string>("mcs_repairnameid"))));
            if (jo.ContainsKey("mcs_serviceorderid") && Guid.TryParse(jo["mcs_serviceorderid"].ToString(), out outGuid))
                supportorderEntity.Attributes.Add("mcs_serviceorderid", new CrmEntityReference("mcs_serviceproxy", Guid.Parse(jo.Value<string>("mcs_serviceorderid"))));
            if (jo.ContainsKey("mcs_batterymodel"))
                supportorderEntity.Attributes.Add("mcs_batterymodel", jo.Value<string>("mcs_batterymodel"));
            if (jo.ContainsKey("mcs_batteryserialnumber"))
                supportorderEntity.Attributes.Add("mcs_batteryserialnumber", jo.Value<string>("mcs_batteryserialnumber"));
            if (jo.ContainsKey("mcs_carplate"))
                supportorderEntity.Attributes.Add("mcs_carplate", jo.Value<string>("mcs_carplate"));
            if (jo.ContainsKey("mcs_customerid") && Guid.TryParse(jo["mcs_customerid"].ToString(), out outGuid))
                supportorderEntity.Attributes.Add("mcs_customerid", new CrmEntityReference("mcs_vehowner", Guid.Parse(jo.Value<string>("mcs_customerid"))));
            if (jo.ContainsKey("mcs_customername"))
                supportorderEntity.Attributes.Add("mcs_customername", jo.Value<string>("mcs_customername"));
            if (jo.ContainsKey("mcs_customerphone"))
                supportorderEntity.Attributes.Add("mcs_customerphone", jo.Value<string>("mcs_customerphone"));
            if (jo.ContainsKey("mcs_diagnosiscontent"))
                supportorderEntity.Attributes.Add("mcs_diagnosiscontent", jo.Value<string>("mcs_diagnosiscontent"));
            if (jo.ContainsKey("mcs_email"))
                supportorderEntity.Attributes.Add("mcs_email", jo.Value<string>("mcs_email"));
            if (jo.ContainsKey("mcs_enginenumber"))
                supportorderEntity.Attributes.Add("mcs_enginenumber", jo.Value<string>("mcs_enginenumber"));
            if (jo.ContainsKey("mcs_ismodifiedparts"))
                supportorderEntity.Attributes.Add("mcs_ismodifiedparts", jo.Value<bool?>("mcs_ismodifiedparts"));
            if (jo.ContainsKey("mcs_malfunctioncontent"))
                supportorderEntity.Attributes.Add("mcs_malfunctioncontent", jo.Value<string>("mcs_malfunctioncontent"));
            if (jo.ContainsKey("mcs_malfunctiontypeid"))
                supportorderEntity.Attributes.Add("mcs_malfunctiontypeid", new CrmEntityReference("mcs_malfunctiontype", Guid.Parse(jo.Value<string>("mcs_malfunctiontypeid"))));
            if (jo.ContainsKey("mcs_mileage"))
                supportorderEntity.Attributes.Add("mcs_mileage", jo.Value<decimal?>("mcs_mileage"));
            if (jo.ContainsKey("mcs_modifiedpartscontent"))
                supportorderEntity.Attributes.Add("mcs_modifiedpartscontent", jo.Value<string>("mcs_modifiedpartscontent"));
            if (jo.ContainsKey("mcs_phone"))
                supportorderEntity.Attributes.Add("mcs_phone", jo.Value<string>("mcs_phone"));
            if (jo.ContainsKey("mcs_repairdate"))
                supportorderEntity.Attributes.Add("mcs_repairdate", jo.Value<DateTime?>("mcs_repairdate").Value.ToUniversalTime());
            if (jo.ContainsKey("mcs_techsystem"))
                supportorderEntity.Attributes.Add("mcs_techsystem", jo.Value<int?>("mcs_techsystem"));
            if (jo.ContainsKey("mcs_cartypeid") && Guid.TryParse(jo["mcs_cartypeid"].ToString(), out outGuid))
                supportorderEntity.Attributes.Add("mcs_cartypeid", new CrmEntityReference("mcs_cartype", Guid.Parse(jo.Value<string>("mcs_cartypeid"))));
            if (jo.ContainsKey("Id") && Guid.TryParse(jo["Id"].ToString(), out outGuid))
            {
                await _crmService.Update(supportorderEntity);
            }
            else
            {
                await _crmService.Create(supportorderEntity);
            }
            #endregion

            #region 删除旧的经销商附件
            var deleteAttachmentList = await _crmService.RetrieveMultiple("mcs_attachment", $"$filter=_mcs_supportorderid_value eq {supportorderGuid}");
            foreach (var deleteAttachment in deleteAttachmentList.Results)
            {
                await _crmService.Delete("mcs_attachment", deleteAttachment.Id);
            }
            #endregion

            #region 更新经销商附件

            if (jo.ContainsKey("fileEntityArray"))
            {
                var fileArray = jo.Value<JArray>("fileEntityArray");
                foreach (var attachmentJo in fileArray)
                {
                    var attachmentGuid = Guid.NewGuid();
                    var attachmentEntity = new CrmExecuteEntity("mcs_attachment", attachmentGuid);
                    attachmentEntity.Attributes.Add("mcs_supportorderid", new CrmEntityReference("mcs_supportorder", supportorderGuid));
                    attachmentEntity.Attributes.Add("mcs_filename", attachmentJo.Value<string>("mcs_filename"));
                    attachmentEntity.Attributes.Add("mcs_filesize", attachmentJo.Value<string>("mcs_filesize"));
                    attachmentEntity.Attributes.Add("mcs_fileurl", attachmentJo.Value<string>("mcs_fileurl"));
                    await _crmService.Create(attachmentEntity);
                }
            }
            #endregion


            var validateResult = new ValidateResult<CrmEntity>();
            var reusetCrmEntity = await _crmService.Retrieve("mcs_supportorder", supportorderGuid, "$select=mcs_supportorderid,mcs_name");
            validateResult.Data = reusetCrmEntity;
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            return validateResult;
        }
        #endregion
    }
}
