using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;

namespace MSLibrary.Context
{
    /// <summary>
    /// 基于环境的声明生成器仓储
    /// </summary>
    [Injection(InterfaceType = typeof(IEnvironmentClaimGeneratorRepository), Scope = InjectionScope.Singleton)]
    public class EnvironmentClaimGeneratorRepository : IEnvironmentClaimGeneratorRepository
    {
        /// <summary>
        /// 根据名称查询
        /// 直接新建声明生成器赋值后返回
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public async Task<EnvironmentClaimGenerator> QueryByName(string name)
        {
            EnvironmentClaimGenerator generator = new EnvironmentClaimGenerator()
            {
                ID = Guid.NewGuid(),
                Name = name
            };

            return await Task.FromResult(generator);
        }
    }
}
