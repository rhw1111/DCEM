
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.Main.Entities
{
    public class QueryShippingDetailRequest
    {
        public string ShippingCode { get; set; }
    }

    public class ShippingDetailResutResponse : ResponseBase
    {
        public List<ShippingDetail> Data { get; set; }
    }
}
