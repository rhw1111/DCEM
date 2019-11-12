using DCEM.SalesAssistant.Main.Application.Services;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Application.App.Contrac
{
    public interface IAppDelivery
    {
        Task<DeliveryListResponse> getlist(DeliveryListRequest deliveryListRequest); 
      
    }
}
