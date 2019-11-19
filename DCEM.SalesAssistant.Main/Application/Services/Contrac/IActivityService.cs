using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.Services.Contrac
{
    public interface IActivityService
    {
        Task<QueryResult<CrmEntity>> getlist(ActivitysRequest request);
        Task<CrmEntity> getdetail(Guid id);
        Task<ValidateResult> AddOrUpdate(ActivityEditRequest model);
        Task<CrmEntity> getcontactdetail(Guid id);
        Task<CrmEntity> getonlyleaddetail(Guid id);
        Task<CrmEntity> getaccountdetail(Guid id);
    }
}
