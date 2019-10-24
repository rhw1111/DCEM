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

        public async Task<QueryResult<CrmEntity>> QueryListByPage(string filterstr,int pageSize,int pageNum,string sort,string token= "")
        {
            try
            {
                var fetchxml = string.Format($@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"" count=""{pageSize}"" page=""{pageNum}"">
                                <entity name = ""mcs_supportorder"" >
                                    <attribute name = ""mcs_supportorderid"" />
                                    <attribute name = ""mcs_title"" />
                                    <attribute name = ""mcs_orderstatus"" />
                                    <attribute name = ""mcs_title"" />    
                                <filter type = ""and"" >
                                  <condition attribute='statecode' operator='eq' value='0' />
                               </filter>
                                </entity>
                            </fetch>");
                XDocument xmlDoc = XDocument.Parse(fetchxml);

                var request = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName= EntityName,
                    FetchXml= xmlDoc,
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
                //List<TechnicalSupportModel> list = new List<TechnicalSupportModel>();
                ////var result= await _crmService.RetrieveMultipleNextPage(EntityName,filterstr, pageSize);
                //if (dataList != null)
                //{
                //    foreach (var item in dataList.Results)
                //    {
                //        DateTime? mcs_repairdate=null;
                //        if (item.Attributes.GetValue("mcs_repairdate")!=null)
                //        {
                //            mcs_repairdate=DateTime.Parse(item.Attributes.GetValue("mcs_repairdate").ToString());
                //        }
                //        list.Add(new TechnicalSupportModel()
                //        {
                //            Id=item.Id,
                //            mcs_name = item.Attributes.GetValue("mcs_name").ToString(),
                //            mcs_title = item.Attributes.GetValue("mcs_title").ToString(),
                //            mcs_orderstatus = int.Parse(item.Attributes.GetValue("mcs_orderstatus").ToString()),
                //            mcs_repairdate = mcs_repairdate
                //        }) ;
                //    }
                //}

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

    }
}
