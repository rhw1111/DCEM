using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;

namespace DCEM.ServiceAssistantService.Main.Entities
{
    [Injection(InterfaceType = typeof(IAdfsEndpointRepository), Scope = InjectionScope.Singleton)]
    public class AdfsEndpointRepository : IAdfsEndpointRepository
    {
        private Dictionary<string, AdfsEndpoint> _datas = null;

        public async Task<AdfsEndpoint> QueryByName(string name)
        {
            if (_datas==null)
            {
                _datas = await getData();
            }

            return _datas[name];
        }

        private async Task<Dictionary<string, AdfsEndpoint>> getData()
        {       
            Dictionary<string, AdfsEndpoint> datas = new Dictionary<string, AdfsEndpoint>();
            //这里从配置中创建出对象键值对,请补充代码

            return await Task.FromResult(datas);
        }
    }
}
