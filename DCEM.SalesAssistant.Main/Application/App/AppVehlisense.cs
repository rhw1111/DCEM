//shengf,2019.11.11
//整车销售交车单
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
    public class AppVehlisense : IAppVehlisense
    {
       
        private IVehlisenseService _service;
        public AppVehlisense(IVehlisenseService service)
        {
            _service = service;
        } 
        public async Task<QueryResult<CrmEntity>> getlist(VehlisenseListRequest request)
        {
           return await _service.getlist(request);
        }
        public async Task<VehlisenseDetailRepository> getdetail(Guid id)
        {
            return await _service.getdetail(id);
        }

    }
}
