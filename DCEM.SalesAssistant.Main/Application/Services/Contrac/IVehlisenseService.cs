using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.Services.Contrac
{
    public interface IVehlisenseService
    {
        Task<QueryResult<CrmEntity>> getlist(VehlisenseListRequest Request);
        Task<VehlisenseDetailRepository> getdetail(Guid id);
        Task<ValidateResult<CrmEntity>> AddOrUpdate(JObject jo);
    }
}
