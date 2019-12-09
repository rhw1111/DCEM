
namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using Newtonsoft.Json.Linq;

    public class CreateOrderRequest
    {
        public JObject ProductOrder { get; set; }

        public JArray ProductorderitemArray { get; set; }
    }
}
