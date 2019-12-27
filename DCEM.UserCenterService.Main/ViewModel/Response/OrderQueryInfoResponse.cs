using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json.Linq;
namespace DCEM.UserCenterService.Main.ViewModel.Response
{
    public class OrderQueryInfoResponse
    {
        public OrderQueryInfoResponse()
        {
            OrderInfo = new JObject();
            OrderItemArray = new List<JObject>();
        }

        //订单信息
        public JObject OrderInfo { get; set; }

        //客户跟进记录
        public List<JObject> OrderItemArray { get; set; }

    }
}
