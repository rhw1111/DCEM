using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.DI;
using MSLibrary.Configuration;
using DCEM.Main;

namespace DCEM.ConfigurationService.Main.DAL
{
    [Injection(InterfaceType = typeof(IDBConnectionMainFactory), Scope = InjectionScope.Singleton)]
    public class DBConnectionMainFactory : IDBConnectionMainFactory
    {
        public string CreateAllForMain()
        {
            var coreConfiguration = ConfigurationContainer.Get<CoreConfiguration>(ConfigurationNames.Application);
            return coreConfiguration.Connections[DBConnectionNames.MainDBAll];
        }

        public string CreateReadForMain()
        {
            var coreConfiguration = ConfigurationContainer.Get<CoreConfiguration>(ConfigurationNames.Application);
            return coreConfiguration.Connections[DBConnectionNames.MainDBRead];
        }
    }
}
