using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Application
{
    public class AppTechnicalSupport : IAppTechnicalSupport
    {
        private ITechnicalSupportService _technicalSupportService;

        public AppTechnicalSupport(ITechnicalSupportService technicalSupportService)
        {
            _technicalSupportService = technicalSupportService;
        }

        public async Task<CrmEntity> QueryById(Guid id)
        {
            return await _technicalSupportService.QueryById(id);
        }

        public async Task<QueryResult<CrmEntity>> QueryListByPage(int orderstauts, string searchkey , int pageSize, int pageNum, string sort, string token = "")
        {
            return await _technicalSupportService.QueryListByPage(orderstauts, searchkey, pageSize, pageNum,  sort, token);
        }

        public async Task<Guid> AddOrEditEntity(TechnicalSupportRequest request) {
            return await _technicalSupportService.AddOrEditEntity(request);
        }
    }
}
