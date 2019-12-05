
namespace DCEM.UserCenterService.Main.ViewModel.Response
{
    using System.Collections.Generic;
    using MSLibrary.Xrm;
    using Newtonsoft.Json.Linq;

    public class ProducListResponse
    {
        public ProducListResponse()
        {
            ProductList = new List<Product>();
        }

        public List<Product> ProductList { get; set; }
    }


    public class Product
    {
        public Product()
        {
            ProductImageArray = new JArray();
        }

        /// <summary>
        /// 商品实体
        /// </summary>
        public JObject Procudt { get; set; }

        /// <summary>
        /// 商品图片
        /// </summary>
        public JArray ProductImageArray { get; set; }
    }
}
