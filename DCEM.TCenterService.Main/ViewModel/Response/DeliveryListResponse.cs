using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class DeliveryListResponse:PageBaseResponseModel
    {
        public List<CrmEntity> Deliverys { get; set; }
    }
}
