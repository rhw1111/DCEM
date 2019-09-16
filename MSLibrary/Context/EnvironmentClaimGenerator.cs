using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using MSLibrary.DI;
using MSLibrary.Context.EnvironmentClaimGeneratorServices;

namespace MSLibrary.Context
{
    /// <summary>
    /// 环境声明生成器
    /// 负责从当前环境中生成上下文
    /// </summary>
    public class EnvironmentClaimGenerator : EntityBase<IEnvironmentClaimGeneratorIMP>
    {
        private static IFactory<IEnvironmentClaimGeneratorIMP> _environmentClaimGeneratorIMPFactory;

        public static IFactory<IEnvironmentClaimGeneratorIMP> EnvironmentClaimGeneratorIMPFactory
        {
            set
            {
                _environmentClaimGeneratorIMPFactory = value;
            }
        }

        public override IFactory<IEnvironmentClaimGeneratorIMP> GetIMPFactory()
        {
            return _environmentClaimGeneratorIMPFactory;
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
        /// 生成声明
        /// </summary>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        public async Task<ClaimsIdentity> Generate()
        {
            return await _imp.Generate(this);
        }

    }

    public interface IEnvironmentClaimGeneratorIMP
    {
        Task<ClaimsIdentity> Generate(EnvironmentClaimGenerator generator);
    }

    [Injection(InterfaceType = typeof(IEnvironmentClaimGeneratorIMP), Scope = InjectionScope.Transient)]
    public class EnvironmentClaimGeneratorIMP : IEnvironmentClaimGeneratorIMP
    {
        private static Dictionary<string, IFactory<IEnvironmentClaimGeneratorService>> _environmentClaimGeneratorServiceFactories = new Dictionary<string, IFactory<IEnvironmentClaimGeneratorService>>();

        public static Dictionary<string, IFactory<IEnvironmentClaimGeneratorService>> EnvironmentClaimGeneratorServiceFactories
        {
            get
            {
                return _environmentClaimGeneratorServiceFactories;
            }
        }

        /// 根据环境生成声明
        /// 具体生成服务通过静态键值对注册，键为生成器名称
        /// 该方法将调用对应名称的生成服务来完成
        public async Task<ClaimsIdentity> Generate(EnvironmentClaimGenerator generator)
        {
            if (!_environmentClaimGeneratorServiceFactories.TryGetValue(generator.Name, out IFactory<IEnvironmentClaimGeneratorService> generatorServiceFactory))
            {
                throw new Exception($"not found {generator.Name} IFactory<IEnvironmentClaimGeneratorService> in EnvironmentClaimGenerator");
            }

            return await generatorServiceFactory.Create().Do();
        }
    }
}
