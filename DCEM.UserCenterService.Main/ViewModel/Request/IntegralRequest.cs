using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    public class IntegralRequest
    {
        public string UserId { get; set; }
        public string IntegralPointCode { get; set; }
        public string Num { get; set; }
        public string OrderNumber { get; set; }
        public int SourceSystem { get; set; }
        public string Description { get; set; }
        public string TransactionTime { get; set; }
    }
}
