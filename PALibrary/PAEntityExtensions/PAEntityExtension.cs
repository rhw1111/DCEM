using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using PALibrary.LanguageTranslate;

namespace PALibrary.PAEntityExtensions
{
    /// <summary>
    /// PAEntity扩展方法
    /// </summary>
    public static class PAEntityExtension
    {
        private static Dictionary<Type, IFactory<IPADomainEntityConvertService>> _paDomainEntityConvertServiceFactories = new Dictionary<Type, IFactory<IPADomainEntityConvertService>>();

        public static IDictionary<Type, IFactory<IPADomainEntityConvertService>> PADomainEntityConvertServiceFactories
        {
            get
            {
                return _paDomainEntityConvertServiceFactories;
            }
        }
        /// <summary>
        /// Int
        /// </summary> 
        public static int ToInt(this Entity entity, string name)
        {
            return entity.GetAttributeValue<int>(name);
        }

        public static int? ToIntNull(this Entity entity, string name)
        {
            return entity.GetAttributeValue<int?>(name);
        }


        /// <summary>
        /// string
        /// </summary> 
        public static string ToString(this Entity entity, string name)
        {
            return entity.GetAttributeValue<string>(name);
        }

        /// <summary>
        /// float
        /// </summary> 
        public static float ToFloat(this Entity entity, string name)
        {
            return entity.GetAttributeValue<float>(name);
        }

        /// <summary>
        /// Money
        /// </summary> 
        public static decimal ToMoney(this Entity entity, string name)
        {
            return entity.GetAttributeValue<Money>(name).Value;
        }

        /// <summary>
        /// OptionSetValue
        /// </summary> 
        public static OptionSetValue ToOptionSetValue(this Entity entity, string name)
        {
            return entity.GetAttributeValue<OptionSetValue>(name);
        }

        /// <summary>
        /// EntityReference
        /// </summary> 
        public static EntityReference ToEntityReference(this Entity entity, string name)
        {
            return entity.GetAttributeValue<EntityReference>(name);
        }


        /// <summary>
        /// 获取指定属性的值
        /// 如果找不到，则返回该类型的默认值
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="entity"></param>
        /// <param name="name"></param>
        /// <returns></returns>
        public static T GetAttributeValue<T>(this Entity entity, string name)
        {
            if (entity.IsNotNull(name))
            {
                return entity.GetAttributeValue<T>(name);
            }
            return default(T);
        }

        /// <summary>
        /// 判断实体的某个字段是否为空
        /// </summary>
        /// <param name="entity">实体</param>
        /// <param name="name">字段名称</param> 
        public static bool IsNotNull(this Entity entity, string name)
        {
            return entity.Contains(name) && entity.Attributes[name] != null;
        }
        /// <summary>
        /// 获取实体的属性值键值对
        /// 键为属性名称
        /// </summary>
        /// <param name="entity"></param>
        /// <returns></returns>
        public static Dictionary<string, object> AttributeKeyValueToDictionary(this Entity entity)
        {
            var list = new Dictionary<string, object>();
            foreach (var item in entity.Attributes)
            {
                list.Add(item.Key, item.Value);
            }
            return list;
        }

        /// <summary>
        /// 转换成领域对象
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="entity"></param>
        /// <returns></returns>
        public static T ConvertToDomainEntity<T>(this Entity entity)
        {
            var service = getPADomainEntityConvertService(typeof(T));
            return (T)service.Convert(entity);
        }

        private static IPADomainEntityConvertService getPADomainEntityConvertService(Type type)
        {
            if (!_paDomainEntityConvertServiceFactories.TryGetValue(type,out IFactory<IPADomainEntityConvertService> serviceFactory))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundPADomainEntityConvertServiceByDomainEntityType,
                    DefaultFormatting = "找不到领域实体类型{0}的实体转换服务",
                    ReplaceParameters = new List<object>() { type.FullName }
                };
                throw new UtilityException((int)Errors.NotFoundPADomainEntityConvertServiceByDomainEntityType, fragment);
            }

            return serviceFactory.Create();
        }
    }

    public interface IPADomainEntityConvertService
    {
        object Convert(Entity entityRecord);
    }
}
