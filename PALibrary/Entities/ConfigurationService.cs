using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PALibrary.Cache;

namespace PALibrary.Entities
{
    public class ConfigurationService : IConfigurationService
    {
        private static HashLinkedCacheController<string, EntityReference> _administratorIDCache = new HashLinkedCacheController<string, EntityReference>()
        {
            CacheSize = 10,
            CacheTimeout = 300
        };

        private ISystemConfigurationRepositoryCacheProxy _systemConfigurationRepositoryCacheProxy;

        public ConfigurationService(ISystemConfigurationRepositoryCacheProxy systemConfigurationRepositoryCacheProxy)
        {
            _systemConfigurationRepositoryCacheProxy = systemConfigurationRepositoryCacheProxy;
        }
        public EntityReference GetAdministratorID()
        {
            var orgId = ContextContainer.GetValue<Guid>(ContextTypes.CurrentOrganization);

            var administratorID=_administratorIDCache.GetValue((key) =>
            {
                var configuration = _systemConfigurationRepositoryCacheProxy.QueryByName(SystemConfigurationNames.AdministratorID);
                var id = configuration.GetConfigurationValue<Guid>();
                return new EntityReference("systemuser", id);
            },orgId.ToString());

            return administratorID;
        }

        public string GetCacheVersion(string name)
        {
            var configuration = _systemConfigurationRepositoryCacheProxy.QueryByName(SystemConfigurationNames.CommonCacheVersion);
            var version = configuration.GetConfigurationValue<string>();
            return version;
        }
    }

    public class ConfigurationServiceFactory : SingletonFactorySelf<IConfigurationService, ConfigurationServiceFactory>
    {
        protected override IConfigurationService RealCreate()
        {
            var systemConfigurationRepositoryCacheProxy = SystemConfigurationRepositoryCacheProxyFactory.Get();
            return new ConfigurationService(systemConfigurationRepositoryCacheProxy);
        }


    }
}
