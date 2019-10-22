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
                List<TechnicalSupportModel> list = new List<TechnicalSupportModel>();
                var list2=_crmService.RetrieveMultiple(EntityName,filterstr);
                
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
