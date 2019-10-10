using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using DCEM.ConfigurationService.Main.DTOModel;

namespace DCEM.ConfigurationService.Main.Application
{
    [Injection(InterfaceType = typeof(IAppGetRemoteServiceDescriptionByName), Scope = InjectionScope.Singleton)]
    public class AppGetRemoteServiceDescriptionByName : IAppGetRemoteServiceDescriptionByName
    {
        public Task<RemoteServiceDescriptionModel> Do(string name)
        {
            throw new NotImplementedException();
        }
    }
}
