//xiongtao,2019.11.13
//发票信息
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.App
{
    public class AppVehnetwork : IAppVehnetwork
    {
       
        private IVehnetworkService _service;
        public AppVehnetwork(IVehnetworkService service)
        {
            _service = service;
        } 
        public async Task<QueryResult<CrmEntity>> getlist(VehnetworkListRequest request)
        {
           return await _service.getlist(request);
        }
        public async Task<VehnetworkDetailRepository> getdetail(Guid id)
        {
            return await _service.getdetail(id);
        }
        public async Task<ValidateResult<string>> PostStatus(Guid id)
        {
            return await _service.PostStatus(id);

        }

        public async Task<ValidateResult<string>> UpdateCard(UpdateCardRequest request)
        {
            return await _service.UpdateCard(request);

        }

    }
}
