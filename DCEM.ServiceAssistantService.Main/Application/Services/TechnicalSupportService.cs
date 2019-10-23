using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

        public IList<TechnicalSupportModel> QueryListByPage(string filterstr,int pageSize,int pageNum,string sort,string token= "")
        {
            try
            {
                //filterstr = string.Format($@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"" count=""{pageSize}"" page=""{pageNum}"">
                //                <entity name = ""mcs_supportorder"" >
                //                    <attribute name = ""mcs_supportorderid"" />
                //                    <attribute name = ""mcs_title"" />
                //                    <attribute name = ""mcs_orderstatus"" />
                //                    <attribute name = ""mcs_title"" />    
                //                <filter type = ""and"" >
                //                  <condition attribute='statecode' operator='eq' value='0' />
                //               </filter>
                //                </entity>
                //            </fetch>");

                List<TechnicalSupportModel> list = new List<TechnicalSupportModel>();
                var result=_crmService.RetrieveMultipleNextPage(EntityName,filterstr, pageSize).Result;
                if (result!=null && result.Results!=null)
                {
                    foreach (var item in result.Results)
                    {
                        DateTime? mcs_repairdate=null;
                        if (item.Attributes.GetValue("mcs_repairdate")!=null)
                        {
                            mcs_repairdate=DateTime.Parse(item.Attributes.GetValue("mcs_repairdate").ToString());
                        }
                        list.Add(new TechnicalSupportModel()
                        {
                            Id=item.Id,
                            mcs_name = item.Attributes.GetValue("mcs_name").ToString(),
                            mcs_title = item.Attributes.GetValue("mcs_title").ToString(),
                            mcs_orderstatus = int.Parse(item.Attributes.GetValue("mcs_orderstatus").ToString()),
                            mcs_repairdate = mcs_repairdate
                        }) ;
                    }
                }
               
                return list;
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
