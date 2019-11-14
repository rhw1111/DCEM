using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class DeliveryDetailRequest:BaseRequest
    {
        /// <summary>
        /// 交车单id
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// 物料码id
        /// </summary>
        public string materielId { get; set; }
    }
}
