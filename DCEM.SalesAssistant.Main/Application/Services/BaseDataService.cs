using DCEM.SalesAssistant.Main.Application.Repository;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class BaseDataService : IBaseDataService
    {
        private ICrmService _crmService;
        private IBaseDataRepository _baseDataRepository;

        public BaseDataService(CrmService crmService, IBaseDataRepository baseDataRepository)
        {
            _crmService = crmService;
            _baseDataRepository = baseDataRepository;
        }
    }
}
