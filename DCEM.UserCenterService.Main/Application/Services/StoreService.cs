

namespace DCEM.UserCenterService.Main.Application.Services
{
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using MSLibrary.Xrm;
    using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using System.Xml.Linq;
    using System;
    using Newtonsoft.Json.Linq;
    using MSLibrary;

    public class StoreService : IStoreService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        private int pageCount;
        public StoreService(ICrmService crmService)
        {
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
            pageCount = 50;
        }
        #endregion

        #region 获取 商品列表
        public async Task<ProducListResponse> QueryProductList(ProducListRequest request)
        {
            var producListResponse = new ProducListResponse();
            var dicProduct = new Dictionary<Guid, Product>();

            #region 查询所有商品
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{50}' page='{1}' distinct='true'>
                    <entity name='mcs_tc_product'>
                        <order attribute='createdon' descending='true' />
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });

            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tc_product",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var procudtResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询商品的图片
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_tc_productimage'>
                        <attribute name='mcs_tc_productimageid' />
                        <attribute name='mcs_imagetype' />
                        <attribute name='mcs_imagename' />
                        <attribute name='mcs_product' />
                        <order attribute='createdon' descending='true' />
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });


            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tc_productimage",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var productImageResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询商品的规格型号
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_tc_productspecification'>
                        <attribute name='mcs_tc_productspecificationid' />
                        <attribute name='mcs_attributegroupname' />
                        <attribute name='mcs_attributename' />
                        <attribute name='mcs_attributevalue' />
                        <attribute name='mcs_product' />
                        <attribute name='mcs_attributegroupindex' />
                        <order attribute='createdon' descending='true' />
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });


            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tc_productspecification",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var productSpecificationResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询商品的订购属性
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_tc_productorderingattribute'>
                        <order attribute='createdon' descending='true' />
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });


            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tc_productorderingattribute",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var productOrderingattributeResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询商品的SKU
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_tc_productprice'>
                        <order attribute='createdon' descending='true' />
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });


            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tc_productprice",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var productPriceResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion


            #region 查询商品的关联关系
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_tc_productrelated'>
                        <order attribute='createdon' descending='true' />
                        <link-entity name='mcs_tc_productprice' from='mcs_tc_productpriceid' to='mcs_relatedproductsku' link-type='outer' alias='a' visible='false'>
                            <all-attributes/>
                        </link-entity>
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });


            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tc_productrelated",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var productrElatedArrayResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 组装商品
            foreach (var entity in procudtResponse.Value.Results)
            {
                var product = new Product();
                product.ProductInfo = entity.Attributes;
                dicProduct.Add(entity.Id, product);
            }
            #endregion

            #region 组装商品图片
            var host = "https://ceo-oss.oss-cn-hangzhou.aliyuncs.com/";
            foreach (var entity in productImageResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                entity.Attributes.Add("ext_fullurl", host + entity.Attributes.Value<string>("mcs_imagename"));
                dicProduct[productGuid].ProductImageArray.Add(entity.Attributes);
            }
            #endregion

            #region 组装商品规格型号
            foreach (var entity in productSpecificationResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                dicProduct[productGuid].ProductSpecificationArray.Add(entity.Attributes);
            }
            #endregion

            #region 组装商品的订购属性
            foreach (var entity in productOrderingattributeResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                dicProduct[productGuid].ProductOrderingattributeArray.Add(entity.Attributes);
            }
            #endregion

            #region 组装商品订购属性的规格型号
            foreach (var entity in productSpecificationResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                dicProduct[productGuid].ProductOrderingattributeArray.Add(entity.Attributes);
            }
            #endregion

            #region 组装商品的关联关系
            foreach (var entity in productrElatedArrayResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                dicProduct[productGuid].ProductRelatedArray.Add(entity.Attributes);
            }
            #endregion

            #region 组装商品的SKU
            foreach (var entity in productPriceResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                dicProduct[productGuid].ProductPriceArray.Add(entity.Attributes);
            }
            #endregion

            #region 返回对象组装
            foreach (var kv in dicProduct)
            {
                producListResponse.ProductList.Add(kv.Value);
            }
            #endregion

            return producListResponse;
        }
        #endregion

        #region 创建订单接口
        public async Task<ValidateResult<CrmEntity>> CreateOrder(JObject jo)
        {
            var validateResult = new ValidateResult<CrmEntity>();
            //var productOrderJo = jo.Value<JObject>("ProductOrder");
            //var productorderitemJArray = jo.Value<JArray>("ProductorderitemArray");

            //var productOrderGuid = Guid.NewGuid();
            //var productOrderEntity = new CrmExecuteEntity("mcs_tc_order", productOrderGuid);

            //if (productOrderJo.ContainsKey("mcs_purchasername"))  //购买方名称
            //    productOrderEntity.Attributes.Add("mcs_purchasername", productOrderJo.Value<string>("mcs_purchasername"));
            //if (productOrderJo.ContainsKey("mcs_purchaserphone"))  //购买方联系方式
            //    productOrderEntity.Attributes.Add("mcs_purchaserphone", productOrderJo.Value<string>("mcs_purchaserphone"));
            //if (productOrderJo.ContainsKey("mcs_purchasercertificatetype"))  //购买方证件类型
            //    productOrderEntity.Attributes.Add("mcs_purchasercertificatetype", productOrderJo.Value<string>("mcs_purchasercertificatetype"));
            //if (productOrderJo.ContainsKey("mcs_purchasercertificatecode"))  //购买方证件号码
            //    productOrderEntity.Attributes.Add("mcs_purchasercertificatecode", productOrderJo.Value<string>("mcs_purchasercertificatecode"));

            #region 组装数据返回
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            #endregion
            return validateResult;

        }
        #endregion

    }
}
