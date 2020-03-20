using Microsoft.Crm.Sdk.Messages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Entities
{
    /// <summary>
    /// PA实体的通用领域实体
    /// </summary>
    public class PAEntity : PAEntityBase<IPAEntityIMP>
    {
        private static IFactory<IPAEntityIMP> _paEntityIMPFactory = new PAEntityIMPFactory();

        public static IFactory<IPAEntityIMP> PAEntityIMPFactory
        {
            set
            {
                _paEntityIMPFactory = value;
            }
        }
        public override IFactory<IPAEntityIMP> GetIMPFactory()
        {
            return _paEntityIMPFactory;
        }
    }

    public interface IPAEntityIMP
    {

    }

    public class PAEntityIMP:IPAEntityIMP
    {

    }

    public class PAEntityIMPFactory : IFactory<IPAEntityIMP>
    {
        public IPAEntityIMP Create()
        {
            return new PAEntityIMP();
        }
    }
}
