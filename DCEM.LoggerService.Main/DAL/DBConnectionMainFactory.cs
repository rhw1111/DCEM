using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.DI;
using MSLibrary.Transaction;
using MSLibrary.Configuration;
using MSLibrary.Context.DAL;
using MSLibrary.Logger.DAL;
using MSLibrary.Collections.Hash.DAL;
using MSLibrary.Configuration.DAL;
using DCEM.Main;
using DCEM.LoggerService.Main.Configuration;

namespace DCEM.LoggerService.Main.DAL
{
    [Injection(InterfaceType = typeof(IContextConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(ICommonLogConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IHashConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(ISystemConfigurationConnectionFactory), Scope = InjectionScope.Singleton)]
    public class DBConnectionMainFactory : IContextConnectionFactory,ICommonLogConnectionFactory,IHashConnectionFactory,ISystemConfigurationConnectionFactory
    {
        public string CreateAllForContext()
        {
            var appConfiguration=ConfigurationContainer.Get<AppConfiguration>(ConfigurationNames.Application);

            return appConfiguration.Connections["mainall"];           
        }

        public string CreateAllForHash()
        {
            return CreateAllForContext();
        }

        public string CreateAllForLocalCommonLog()
        {
            return CreateAllForContext();
        }

        public string CreateAllForSystemConfiguration()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForContext()
        {
            if (DBAllScope.IsAll())
            {
                return CreateAllForContext();
            }
            else
            {
                var appConfiguration = ConfigurationContainer.Get<AppConfiguration>(ConfigurationNames.Application);

                return appConfiguration.Connections["mainread"];
            }
        }

        public string CreateReadForHash()
        {
            return CreateReadForContext();
        }

        public string CreateReadForLocalCommonLog()
        {
            return CreateReadForContext();
        }

        public string CreateReadForSystemConfiguration()
        {
            return CreateReadForContext();
        }
    }
}
