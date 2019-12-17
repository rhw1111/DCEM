
namespace DCEM.UserCenterService.Main.ViewModel.Response
{
    using System.Collections.Generic;
    using MSLibrary.Xrm;
    
    public class AMPageResponse
    {
        //缩略图的前置绝对路径
        public bool IsSuccess { get; set; } = true;

        public string Url { get; set; }
    }

}
