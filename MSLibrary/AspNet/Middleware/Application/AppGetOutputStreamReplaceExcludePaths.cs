using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.Configuration;

namespace MSLibrary.AspNet.Middleware.Application
{
    [Injection(InterfaceType = typeof(IAppGetOutputStreamReplaceExcludePaths), Scope = InjectionScope.Singleton)]
    public class AppGetOutputStreamReplaceExcludePaths : IAppGetOutputStreamReplaceExcludePaths
    {
        private SystemConfigurationRepositoryHelper _systemConfigurationRepositoryHelper;

        public AppGetOutputStreamReplaceExcludePaths(SystemConfigurationRepositoryHelper systemConfigurationRepositoryHelper)
        {
            _systemConfigurationRepositoryHelper = systemConfigurationRepositoryHelper;
        }

        public async Task<List<string>> Do()
        {
            var configuration = _systemConfigurationRepositoryHelper.QueryByName(SystemConfigurationNamesForAspNetMA.OutputStreamReplaceExcludePaths);
            var excludePaths = configuration.GetConfigurationValue<List<string>>();

            if (excludePaths == null)
            {
                return await Task.FromResult(new List<string>());
            }
            else
            {
                return await Task.FromResult(excludePaths);
            }
        }
    }
}
