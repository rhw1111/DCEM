using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.LanguageTranslate;
using MSLibrary.Context.AuthInfoHttpHeaderGeneratorServices;
using MSLibrary.Context.DAL;

namespace MSLibrary.Context
{
    /// <summary>
    /// 在Http头中设置身份信息的生成器
    /// 服务调用方使用
    /// </summary>
    public class AuthInfoHttpHeaderGenerator : EntityBase<IAuthInfoHttpHeaderGeneratorIMP>
    {

        private static IFactory<IAuthInfoHttpHeaderGeneratorIMP> _authInfoHttpHeaderGeneratorIMPFactory;

        public static IFactory<IAuthInfoHttpHeaderGeneratorIMP> AuthInfoHttpHeaderGeneratorIMPFactory
        {
            set
            {
                _authInfoHttpHeaderGeneratorIMPFactory = value;
            }
        }


        public override IFactory<IAuthInfoHttpHeaderGeneratorIMP> GetIMPFactory()
        {
            return _authInfoHttpHeaderGeneratorIMPFactory;
        }



        /// <summary>
        /// Id
        /// </summary>
        public Guid ID
        {
            get
            {
                return GetAttribute<Guid>("ID");
            }
            set
            {
                SetAttribute<Guid>("ID", value);
            }
        }

        /// <summary>
        /// 名称
        /// </summary>
        public string Name
        {
            get
            {
                return GetAttribute<string>("Name");
            }
            set
            {
                SetAttribute<string>("Name", value);
            }
        }

        /// <summary>
        /// 类型
        /// </summary>
        public string Type
        {
            get
            {
                return GetAttribute<string>("Type");
            }
            set
            {
                SetAttribute<string>("Type", value);
            }
        }

        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateTime
        {
            get
            {
                return GetAttribute<DateTime>("CreateTime");
            }
            set
            {
                SetAttribute<DateTime>("CreateTime", value);
            }
        }

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime ModifyTime
        {
            get
            {
                return GetAttribute<DateTime>("ModifyTime");
            }
            set
            {
                SetAttribute<DateTime>("ModifyTime", value);
            }
        }

        /// <summary>
        /// 生成身份信息头键值对
        /// </summary>
        /// <returns></returns>
        public async Task<Dictionary<string, string>> Generate()
        {
            return await _imp.Generate(this);
        }

    }

    public interface IAuthInfoHttpHeaderGeneratorIMP
    {
        Task<Dictionary<string, string>> Generate(AuthInfoHttpHeaderGenerator generator);

        Task Add(AuthInfoHttpHeaderGenerator generator);
        Task Update(AuthInfoHttpHeaderGenerator generator);
        Task Delete(AuthInfoHttpHeaderGenerator generator);
    }

    [Injection(InterfaceType = typeof(IAuthInfoHttpHeaderGeneratorIMP), Scope = InjectionScope.Transient)]
    public class AuthInfoHttpHeaderGeneratorIMP : IAuthInfoHttpHeaderGeneratorIMP
    {
        private static Dictionary<string, IFactory<IAuthInfoHttpHeaderGeneratorService>> _authInfoHttpHeaderGeneratorServiceFactories = new Dictionary<string, IFactory<IAuthInfoHttpHeaderGeneratorService>>();

        public static Dictionary<string, IFactory<IAuthInfoHttpHeaderGeneratorService>> AuthInfoHttpHeaderGeneratorServiceFactories
        {
            get
            {
                return _authInfoHttpHeaderGeneratorServiceFactories;
            }
        }

        private IAuthInfoHttpHeaderGeneratorStore _authInfoHttpHeaderGeneratorStore;

        public AuthInfoHttpHeaderGeneratorIMP(IAuthInfoHttpHeaderGeneratorStore authInfoHttpHeaderGeneratorStore)
        {
            _authInfoHttpHeaderGeneratorStore = authInfoHttpHeaderGeneratorStore;
        }

        public async Task Add(AuthInfoHttpHeaderGenerator generator)
        {
            await _authInfoHttpHeaderGeneratorStore.Add(generator);
        }

        public async Task Delete(AuthInfoHttpHeaderGenerator generator)
        {
            await _authInfoHttpHeaderGeneratorStore.Delete(generator.ID);
        }

        public async Task<Dictionary<string, string>> Generate(AuthInfoHttpHeaderGenerator generator)
        {
            if (!_authInfoHttpHeaderGeneratorServiceFactories.TryGetValue(generator.Type,out IFactory<IAuthInfoHttpHeaderGeneratorService> serviceFactory))
            {

                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundAuthInfoHttpHeaderGeneratorServiceByType,
                    DefaultFormatting = "找不到类型为{0}的身份信息Http头生成服务，发生位置:{1}",
                    ReplaceParameters = new List<object>() { generator.Type,$"{this.GetType().FullName}.AuthInfoHttpHeaderGeneratorServiceFactories" }
                };

                throw new UtilityException((int)Errors.NotFoundAuthInfoHttpHeaderGeneratorServiceByType, fragment);

            }

            return await serviceFactory.Create().Generate();
        }

        public async Task Update(AuthInfoHttpHeaderGenerator generator)
        {
            await _authInfoHttpHeaderGeneratorStore.Update(generator);
        }
    }


}
