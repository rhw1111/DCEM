using DCEM.SalesAssistant.Main.Application.Services;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
    public interface IAppActivity
    {
        Task<QueryResult<CrmEntity>> getlist(ActivityRequest request);
        Task<CrmEntity> getdetail(Guid id);

        Task<ValidateResult> AddOrUpdate(ActivityEditRequest model);
        Task<CrmEntity> getcontactdetail(Guid id);
        Task<CrmEntity> getonlyleaddetail(Guid id);
        Task<CrmEntity> getaccountdetail(Guid id);

    }
}
