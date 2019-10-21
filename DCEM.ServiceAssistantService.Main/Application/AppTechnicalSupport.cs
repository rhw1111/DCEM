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

        public void QueryListByPage()
        {
            _technicalSupportService.QueryListByPage();
        }
    }
}
