using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Response
{
    public class UserScoreListResponse:PageBaseResponseModel
    {
        public List<CrmEntity> scores { get; set; }
        public decimal balance { get; set; }
    }
}
