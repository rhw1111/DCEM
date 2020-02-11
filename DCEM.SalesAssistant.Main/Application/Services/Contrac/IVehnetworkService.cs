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
    public interface IVehnetworkService
    {
        Task<QueryResult<CrmEntity>> getlist(VehnetworkListRequest Request);
        Task<VehnetworkDetailRepository> getdetail(Guid id);
        Task<ValidateResult<string>> PostStatus(Guid id);
        Task<ValidateResult<string>> UpdateCard(UpdateCardRequest request);
        Task<ValidateResult<string>> Voice(VoiceRequest request);
    }
}
