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
    public class AppActivity : IAppActivity
    {
       
        private IActivityService _service;
        public AppActivity(IActivityService service)
        {
            _service = service;
        } 
        public async Task<QueryResult<CrmEntity>> getlist(ActivityRequest request)
        {
           return await _service.getlist(request);
        }
        public async Task<CrmEntity> getdetail(Guid id)
        {
            return await _service.getdetail(id);
        }
        public async Task<ValidateResult> AddOrUpdate(ActivityEditRequest model)
        {
            return await _service.AddOrUpdate(model);

        }

    }
}
