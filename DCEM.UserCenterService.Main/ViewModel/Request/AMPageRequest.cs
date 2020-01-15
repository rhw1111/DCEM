
namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    using System;
    using System.Collections.Generic;
    using MSLibrary.Xrm;
    
    public class AMPageRequest
    {
        public Guid  pageId { get; set; }
        public int type { get; set; }
        public string ip { get; set; }
        public string ipInfo { get; set; }
        public string browserInfo { get; set; }
    }
}
