using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PALibrary.Serializer;

namespace PALibrary.Entities
{
    public class SystemConfiguration : PAEntityBase<ISystemConfigurationIMP>
    {
        private static IFactory<ISystemConfigurationIMP> _systemConfigurationIMPFactory=new SystemConfigurationIMPFactory();

        public static IFactory<ISystemConfigurationIMP>  SystemConfigurationIMPFactory
        {
            set
            {
                _systemConfigurationIMPFactory = value;
            }
        }
        public override IFactory<ISystemConfigurationIMP> GetIMPFactory()
        {
            return _systemConfigurationIMPFactory;
        }

        public T GetConfigurationValue<T>()
        {
            return _imp.GetConfigurationValue<T>(this);
        }
    }

    public interface ISystemConfigurationIMP
    {
        T GetConfigurationValue<T>(SystemConfiguration configuration);
    }

    public class SystemConfigurationIMP : ISystemConfigurationIMP
    {
        public T GetConfigurationValue<T>(SystemConfiguration configuration)
        {
            var strContent=configuration.EntityRecord.GetAttributeValue<string>($"{PASolutionInfomation.CommonEntityPrefix}_configuration");
            return JsonSerializerHelper.Deserialize<T>(strContent);
        }
    }

    public class SystemConfigurationIMPFactory : IFactory<ISystemConfigurationIMP>
    {
        public ISystemConfigurationIMP Create()
        {
            SystemConfigurationIMP systemConfigurationIMP = new SystemConfigurationIMP();
            return systemConfigurationIMP;
        }
    }
}
