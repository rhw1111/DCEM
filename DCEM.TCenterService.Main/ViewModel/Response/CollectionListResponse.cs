using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class CollectionListResponse:PageBaseResponseModel
    {
        public List<CrmEntity> Collections { get; set; }
    }
}
