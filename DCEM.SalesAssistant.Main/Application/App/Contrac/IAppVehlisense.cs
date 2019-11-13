using DCEM.SalesAssistant.Main.Application.Services;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
    public interface IAppVehlisense
    {
        Task<QueryResult<CrmEntity>> getlist(VehlisenseListRequest request);
        Task<VehlisenseDetailRepository> getdetail(Guid id);
         
    }
}
