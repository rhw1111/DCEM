using DCEM.SalesAssistant.Main.Application.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppBaseData : IAppBaseData
    {
        private IBaseDataService _baseDataService;

        public AppBaseData(IBaseDataService baseDataService)
        {
            _baseDataService = baseDataService;
        }
    }
}
