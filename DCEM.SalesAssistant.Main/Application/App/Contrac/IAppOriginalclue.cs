﻿using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
    public interface IAppOriginalclue
    {
        Task<OriginalclueListResponse> GetOriginalclueList(OriginalclueListRequest originalclueListRequest); 
        Task<CrmEntity> Get(OriginalclueDetailRequest originalclueDetailRequest);
        Task<OriginalclueCreateResponse> create(OriginalclueCreateRequest originalclueCreateRequest);

        Task<CustomerlabelListResponse> GetCustomerLabelList(CustomerlabelListRequest customerlabelListRequest);
    }
}
