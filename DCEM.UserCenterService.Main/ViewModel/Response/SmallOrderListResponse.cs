
using System.Collections.Generic;
using Newtonsoft.Json.Linq;

namespace DCEM.UserCenterService.Main.ViewModel.Response
{
    public class SmallOrderListResponse : PageBaseResponseModel
    {
        public SmallOrderListResponse()
        {
            SmallOrderList = new List<SmallOrder>();
        }
        public List<SmallOrder> SmallOrderList { get; set; }
    }


    public class SmallOrder 
    {
        public SmallOrder()
        {
            SmallOrderInfo = new JObject();
            EquityPackageArray = new List<EquityPackage>();//new JArray();
            OptionalArray = new List<Optional>();
        }
        /// <summary>
        /// 小订订单实体
        /// </summary>
        public JObject SmallOrderInfo { get; set; }
       
        /// <summary>
        /// 小订权益包
        /// </summary>
        public List<EquityPackage> EquityPackageArray { get; set; }
        /// <summary>
        /// 小订选配
        /// </summary>
        public List<Optional> OptionalArray { get; set; }
    }
}
