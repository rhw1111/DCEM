

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
                product.Procudt = entity.Attributes;
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

            #region 组装商品的关联关系
            foreach (var entity in productrElatedArrayResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                dicProduct[productGuid].ProductRelatedArray.Add(entity.Attributes);
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


        #endregion
    }
}
