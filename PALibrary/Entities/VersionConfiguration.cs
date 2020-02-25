using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Entities
{
    public class VersionConfiguration : PAEntityBase<IVersionConfigurationIMP>
    {
        private IFactory<IVersionConfigurationIMP> _versionConfigurationIMPFactory=new VersionConfigurationIMPFactory();

        public IFactory<IVersionConfigurationIMP> VersionConfigurationIMPFactory
        {
            set
            {
                _versionConfigurationIMPFactory = value;
            }
        }

        public override IFactory<IVersionConfigurationIMP> GetIMPFactory()
        {
            return _versionConfigurationIMPFactory;
        }
    }

    public interface IVersionConfigurationIMP
    {

    }

    public class VersionConfigurationIMP:IVersionConfigurationIMP
    {

    }

    public class VersionConfigurationIMPFactory : IFactory<IVersionConfigurationIMP>
    {
        public IVersionConfigurationIMP Create()
        {
            return new VersionConfigurationIMP();
        }
    }
}
