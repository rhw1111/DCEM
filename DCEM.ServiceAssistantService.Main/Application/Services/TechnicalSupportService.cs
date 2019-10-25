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
        private const string EntityName= "mcs_supportorder";
        private ICrmService _crmService;
        public TechnicalSupportService(ICrmService crmService)
        {
            _crmService=crmService;
        }

        public async Task<QueryResult<CrmEntity>> QueryListByPage(int orderstauts=0,string searchkey="",int pageSize=10,int pageNum=1,string sort="",string token= "")
        {
            try
            {
                string filterstr = "";
                if (orderstauts>0)
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
                    EntityName= EntityName,
                    FetchXml = xmlDoc,
                };
                var crmResponse= await _crmService.Execute(request);
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
                entity=await _crmService.Retrieve(EntityName, entityId,"");
                return entity;
            }
            catch (Exception ex)
            {
                throw ex; 
            }

        }
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
                CrmExecuteEntity createorUpdateEntity = new CrmExecuteEntity(request.EntityName, request.Id);
                createorUpdateEntity.Attributes.Add("mcs_name", request.mcs_name);
                createorUpdateEntity.Attributes.Add("mcs_orderstatus", request.mcs_orderstatus);
                createorUpdateEntity.Attributes.Add("mcs_repairdate", request.mcs_repairdate);
                createorUpdateEntity.Attributes.Add("mcs_title", request.mcs_title);

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
