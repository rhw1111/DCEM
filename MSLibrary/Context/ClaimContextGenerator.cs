using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Security.Claims;
using MSLibrary.DI;
using MSLibrary.Context.ClaimContextGeneratorServices;

namespace MSLibrary.Context
{
    /// <summary>
    /// 基于声明的上下文生成器
    /// 负责根据声明初始化上下文
    /// </summary>
    public class ClaimContextGenerator : EntityBase<IClaimContextGeneratorIMP>
    {
        private static IFactory<IClaimContextGeneratorIMP> _claimContextGeneratorIMPFactory;

        public static IFactory<IClaimContextGeneratorIMP> ClaimContextGeneratorIMPFactory
        {
            set
            {
                _claimContextGeneratorIMPFactory = value;
            }
        }
        public override IFactory<IClaimContextGeneratorIMP> GetIMPFactory()
        {
            return _claimContextGeneratorIMPFactory;
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

        public void ContextInit(IEnumerable<Claim> claims)
        {
             _imp.ContextInit(this, claims);
        }

    }
    /// <summary>
    /// 基于声明的上下文生成器的实现接口
    /// </summary>
    public interface IClaimContextGeneratorIMP
    {
        void ContextInit(ClaimContextGenerator generator, IEnumerable<Claim> claims);
    }

    [Injection(InterfaceType = typeof(IClaimContextGeneratorIMP), Scope = InjectionScope.Transient)]
    public class ClaimContextGeneratorIMP : IClaimContextGeneratorIMP
    {
        private static Dictionary<string, IFactory<IClaimContextGeneratorService>> _claimContextGeneratorServiceFactories = new Dictionary<string, IFactory<IClaimContextGeneratorService>>();

        public static Dictionary<string, IFactory<IClaimContextGeneratorService>> ClaimContextGeneratorServiceFactories
        {
            get
            {
                return _claimContextGeneratorServiceFactories;
            }
        }

        public void ContextInit(ClaimContextGenerator generator, IEnumerable<Claim> claims)
        {
            if (!_claimContextGeneratorServiceFactories.TryGetValue(generator.Name,out IFactory<IClaimContextGeneratorService> generatorServiceFactory))
            {
                throw new Exception($"not found {generator.Name} IFactory<IClaimContextGeneratorService> in ClaimContextGenerator");
            }

            generatorServiceFactory.Create().Do(claims);
        }
    }
}
