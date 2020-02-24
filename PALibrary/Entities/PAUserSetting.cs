using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Entities
{
    public class PAUserSetting : PAEntityBase<IPAUserSettingIMP>
    {
        private static IFactory<IPAUserSettingIMP> _paUserSettingIMPFactory=new PAUserSettingIMPFactoryDefault();

        public static IFactory<IPAUserSettingIMP> PAUserSettingIMPFactory
        {
            set
            {
                _paUserSettingIMPFactory = value;
            }
        }

        public override IFactory<IPAUserSettingIMP> GetIMPFactory()
        {
            return _paUserSettingIMPFactory;
        }


    }

    public interface IPAUserSettingIMP
    {

    }

    public class PAUserSettingIMP:IPAUserSettingIMP
    {

    }

    public class PAUserSettingIMPFactoryDefault : IFactory<IPAUserSettingIMP>
    {
        public IPAUserSettingIMP Create()
        {
            return new PAUserSettingIMP();
        }
    }
}
