using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Diagnostics;
using Microsoft.AspNetCore.Http;
using MSLibrary.DI;
using MSLibrary.Context.HttpClaimGeneratorServices;

namespace MSLibrary.Context
{
    /// <summary>
    /// Http声明生成器
    /// 负责根据Http上下文生成声明
    /// </summary>
    public class HttpClaimGenerator:EntityBase<IHttpClaimGeneratorIMP>
    {
        private static IFactory<IHttpClaimGeneratorIMP> _httpClaimGeneratorIMPFactory;

        public static IFactory<IHttpClaimGeneratorIMP> HttpClaimGeneratorIMPFactory
        {
            set
            {
                _httpClaimGeneratorIMPFactory = value;
            }
        }
        public override IFactory<IHttpClaimGeneratorIMP> GetIMPFactory()
        {
            return _httpClaimGeneratorIMPFactory;
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
        /// 根据http上下文生成声明
        /// </summary>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        public async Task<ClaimsIdentity> Generate(HttpContext httpContext)
        {
            return await _imp.Generate(this, httpContext);
        }

    }

    /// <summary>
    /// HttpClaimGenerator的实现接口
    /// </summary>
    public interface IHttpClaimGeneratorIMP
    {
        Task<ClaimsIdentity> Generate(HttpClaimGenerator generator, HttpContext httpContext);
    }

    [Injection(InterfaceType = typeof(IHttpClaimGeneratorIMP), Scope = InjectionScope.Transient)]
    public class HttpClaimGeneratorIMP : IHttpClaimGeneratorIMP
    {
        private static Dictionary<string, IFactory<IHttpClaimGeneratorService>> _httpClaimGeneratorServiceFactories = new Dictionary<string, IFactory<IHttpClaimGeneratorService>>();

        public static Dictionary<string, IFactory<IHttpClaimGeneratorService>> HttpClaimGeneratorServiceFactories
        {
            get
            {
                return _httpClaimGeneratorServiceFactories;
            }
        }

        /// <summary>
        /// 根据Http上下文生成声明
        /// 具体生成服务通过静态键值对注册，键为生成器名称
        /// 该方法将调用对应名称的生成服务来完成
        /// </summary>
        /// <param name="generator"></param>
        /// <param name="httpContext"></param>
        /// <returns></returns>
        public async Task<ClaimsIdentity> Generate(HttpClaimGenerator generator, HttpContext httpContext)
        {
            if (!_httpClaimGeneratorServiceFactories.TryGetValue(generator.Name,out IFactory<IHttpClaimGeneratorService> generatorServiceFactory))
            {
                throw new Exception($"not found {generator.Name} IFactory<IHttpClaimGeneratorService> in HttpClaimGenerator");
            }

            var result= await generatorServiceFactory.Create().Do(httpContext);

            return result;
        }
    }
}
