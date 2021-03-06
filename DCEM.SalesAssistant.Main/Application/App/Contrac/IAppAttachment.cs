﻿//附件上传
//2019.11.22
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
   public interface IAppAttachment
    {
        Task<ValidateResult> Add(List<AttachmentAddResponse> model);
    }
}
