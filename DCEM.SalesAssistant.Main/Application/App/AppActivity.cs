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
        public AppActivity(IActivityService service) => _service = service;
        public async Task<QueryResult<CrmEntity>> getlist(ActivitysRequest request) => await _service.getlist(request);

        public async Task<CrmEntity> getdetail(Guid id) => await _service.getdetail(id);

        public async Task<ValidateResult> AddOrUpdate(ActivityEditRequest model) => await _service.AddOrUpdate(model);



        public async Task<CrmEntity> getcontactdetail(Guid id) => await _service.getcontactdetail(id);
        public async Task<CrmEntity> getonlyleaddetail(Guid id) => await _service.getonlyleaddetail(id);
        public async Task<CrmEntity> getaccountdetail(Guid id) => await _service.getaccountdetail(id);


    }
}
