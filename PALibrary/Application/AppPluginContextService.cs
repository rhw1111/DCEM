using Microsoft.Crm.Sdk.Messages;
using PALibrary.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Application
{
    public class AppPluginContextService : IAppPluginContextService
    {
        private IPluginContextService _pluginContextService;

        public AppPluginContextService(IPluginContextService pluginContextService)
        {
            _pluginContextService = pluginContextService;
        }
        public IPluginContextController Do(IServiceProvider serviceProvider)
        {

            return _pluginContextService.Init(serviceProvider);
        }
    }

    public class AppPluginContextServiceFactory : SingletonFactorySelf<IAppPluginContextService, AppPluginContextServiceFactory>
    {
        protected override IAppPluginContextService RealCreate()
        {
            var pluginContextService = PluginContextServiceFactory.Get();
            AppPluginContextService appPluginContextService = new AppPluginContextService(pluginContextService);
            return appPluginContextService;
        }
    }


}
