using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class VehnetworkListResponse : PageBaseResponseModel
    {
        public List<CrmEntity> Vehnetworks { get; set; }
    }
}
