
namespace DCEM.UserCenterService.Main.ViewModel.Response
{
    using System.Collections.Generic;
    using MSLibrary.Xrm;
    
    public class AMPageResponse
    {
        public bool IsSuccess { get; set; } = true;

        public string Url { get; set; }
    }
}
