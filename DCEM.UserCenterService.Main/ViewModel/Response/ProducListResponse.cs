
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
            Procudt = new JObject();
            ProductImageArray = new JArray();
            ProductSpecificationArray = new JArray();
            ProductOrderingattributeArray = new JArray();
            ProductRelatedArray = new JArray();
        }

        /// <summary>
        /// 商品实体
        /// </summary>
        public JObject Procudt { get; set; }

        /// <summary>
        /// 商品图片
        /// </summary>
        public JArray ProductImageArray { get; set; }

        /// <summary>
        /// 商品规格
        /// </summary>
        public JArray ProductSpecificationArray { get; set; }

        /// <summary>
        /// 商品订购属性
        /// </summary>
        public JArray ProductOrderingattributeArray { get; set; }
        /// <summary>
        /// 关联关系
        /// </summary>
        public JArray ProductRelatedArray { get; set; }

    }
}
