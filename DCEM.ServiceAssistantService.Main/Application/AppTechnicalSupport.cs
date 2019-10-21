using DCEM.ServiceAssistantService.Main.DTOModel;
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

        public IList<TechnicalSupportModel> QueryListByPage(string filterstr, int pageSize, int pageNum, string sort, string token = "")
        {
            return _technicalSupportService.QueryListByPage(filterstr, pageSize, pageNum,  sort, token);
        }
    }
}
