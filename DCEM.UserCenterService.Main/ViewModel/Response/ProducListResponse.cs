
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
            ProductInfo = new JObject();
            ProductImageArray = new JArray();
            ProductSpecificationArray = new JArray();
            ProductOrderingattributeArray = new JArray();
            ProductRelatedArray = new JArray();
            ProductPriceArray = new JArray();
            ProductRightspackageArray = new List<Rightspackage>();
        }

        /// <summary>
        /// 商品实体
        /// </summary>
        public JObject ProductInfo { get; set; }

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

        /// <summary>
        /// 商品SKU
        /// </summary>
        public JArray ProductPriceArray { get; set; }

        /// <summary>
        /// 商品权益包
        /// </summary>
        public List<Rightspackage> ProductRightspackageArray { get; set; }
    }


    public class Rightspackage
    {
        public Rightspackage()
        {
            RightspackageInfo = new JObject();
            RightsArray = new JArray();
        }
        public JObject RightspackageInfo { get; set; }

        public JArray RightsArray { get; set; }
    }

}
