using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary;
using MSLibrary.DI;

namespace DCEM.Main.RemoteService
{
    [Injection(InterfaceType = typeof(IFactory<IAddCommonLogService>), Scope = InjectionScope.Singleton)]
    public class AddCommonLogServiceFactory : IFactory<IAddCommonLogService>
    {
        private IAddCommonLogService _addCommonLogService;

        public AddCommonLogServiceFactory(IAddCommonLogService addCommonLogService)
        {
            _addCommonLogService=addCommonLogService;
        }
        public IAddCommonLogService Create()
        {
            return _addCommonLogService;
        }
    }
}
