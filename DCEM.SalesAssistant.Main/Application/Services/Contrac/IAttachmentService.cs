using DCEM.SalesAssistant.Main.ViewModel;
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
    public interface IAttachmentService
    {
        Task<ValidateResult> Add(List<AttachmentAddResponse> model);
    }
}
