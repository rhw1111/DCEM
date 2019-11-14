using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class OrderPayEditRequest
    {  
        //交车单
        public string delivery { get; set; }
        //收款类型
        public string paycategory { get; set; }
        //金额
        public decimal amount { get; set; }
        //收款时间
        public DateTime payon { get; set; }
        //交易流水号
        public string batchcode { get; set; }
        //备注
        public string remark { get; set; }
    }
}
