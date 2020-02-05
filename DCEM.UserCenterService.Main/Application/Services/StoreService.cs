

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
            pageCount = 10;
        }
        #endregion

        #region 获取 商品列表
        public async Task<ProducListResponse> QueryProductList(ProducListRequest request)
        {
            var producListResponse = new ProducListResponse();
            var dicProduct = new Dictionary<Guid, Product>();
            var dicRightspackage = new Dictionary<Guid, Rightspackage>();
            var dicRights = new Dictionary<Guid, JObject>();

            #region 查询所有商品
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_tc_product'>
                        <order attribute='createdon' descending='true' />
                        <filter type='and'>
                            <condition attribute='mcs_type' operator='in'>
                                <value>2</value>
                                <value>1</value>
                            </condition>
                            <condition attribute='mcs_state' operator='eq' value='2' />
                        </filter>
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
                        <filter type='and'>
                            <condition attribute='statecode' operator='eq' value='0' />
                            <condition attribute='mcs_product' operator='not-null' />
                        </filter>
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
                        <filter type='and'>
                            <condition attribute='statecode' operator='eq' value='0' />
                            <condition attribute='mcs_product' operator='not-null' />
                        </filter>
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
                        <filter type='and'>
                          <condition attribute='statecode' operator='eq' value='0' />
                          <condition attribute='mcs_product' operator='not-null' />
                        </filter>
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
                        <filter type='and'>
                            <condition attribute='statecode' operator='eq' value='0' />
                            <condition attribute='mcs_product' operator='not-null' />
                        </filter>
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

            #region 查询商品SKU的订购关系(弃用)
            //xdoc = await Task<XDocument>.Run(() =>
            //{
            //    var fetchXml = $@"
            //    <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
            //        <entity name='mcs_tc_skuattr'>
            //            <order attribute='createdon' descending='true' />
            //        </entity>
            //    </fetch>";
            //    return XDocument.Parse(fetchXml);
            //});


            //fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            //{
            //    EntityName = "mcs_tc_skuattr",
            //    FetchXml = xdoc
            //};
            //fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            //fetchResponse = await _crmService.Execute(fetchRequest);
            //var skuattrResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询商品的关联关系
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_tc_productrelated'>
                        <order attribute='createdon' descending='true' />
                        <filter type='and'>
                            <condition attribute='statecode' operator='eq' value='0' />
                            <condition attribute='mcs_product' operator='not-null' />
                        </filter>
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

            #region 查询权益包
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_rc_rightspackage'>
                        <order attribute='createdon' descending='true' />
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });

            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_rc_rightspackage",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var rightspackageArrayResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询权益项
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_rc_rights'>
                        <order attribute='createdon' descending='true' />
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });


            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_rc_rights",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var rightsArrayResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询权益包与权益项的关系
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_rc_rightspackagedetail'>
                        <order attribute='createdon' descending='true' />
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });

            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_rc_rightspackagedetail",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var rightspackagedetailArrayResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询权益包与商品的关系
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_rc_rightspackageproduct'>
                        <order attribute='createdon' descending='true' />
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });

            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_rc_rightspackageproduct",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var rightspackageproductArrayResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
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
                if (dicProduct.ContainsKey(productGuid))
                    dicProduct[productGuid].ProductImageArray.Add(entity.Attributes);
            }
            #endregion

            #region 组装商品规格型号
            foreach (var entity in productSpecificationResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                if (dicProduct.ContainsKey(productGuid))
                    dicProduct[productGuid].ProductSpecificationArray.Add(entity.Attributes);
            }
            #endregion

            #region 组装商品的订购属性
            foreach (var entity in productOrderingattributeResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                if (dicProduct.ContainsKey(productGuid))
                    dicProduct[productGuid].ProductOrderingattributeArray.Add(entity.Attributes);
            }
            #endregion

            #region 组装商品的关联关系
            foreach (var entity in productrElatedArrayResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                if (dicProduct.ContainsKey(productGuid))
                    dicProduct[productGuid].ProductRelatedArray.Add(entity.Attributes);
            }
            #endregion

            #region 组装商品SKU订购关系Map (弃用)
            //var skuattrMap = new Dictionary<string, JObject>();
            //foreach (var entity in skuattrResponse.Value.Results)
            //{
            //    var key = entity.Attributes.Value<string>("_mcs_sku_value");
            //    if (!skuattrMap.ContainsKey(key))
            //    {
            //        skuattrMap.Add(key, new JObject());
            //    }
            //    skuattrMap[key].Add(entity.Attributes.Value<string>("_mcs_attr_value"), new JObject());
            //}
            #endregion

            #region 组装权益包
            foreach (var entity in rightspackageArrayResponse.Value.Results)
            {
                var rightspackage = new Rightspackage();
                rightspackage.RightspackageInfo = entity.Attributes;
                dicRightspackage.Add(entity.Id, rightspackage);
            }
            #endregion

            #region 组装权益项
            foreach (var entity in rightsArrayResponse.Value.Results)
            {
                var rights = new JObject();
                rights = entity.Attributes;
                dicRights.Add(entity.Id, rights);
            }
            #endregion

            #region 组装权益包与权益项的关系
            foreach (var entity in rightspackagedetailArrayResponse.Value.Results)
            {
                var rightsGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_rights_value"));
                var rightspackageGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_rightspackage_value"));
                if (dicRights.ContainsKey(rightsGuid) && dicRightspackage.ContainsKey(rightspackageGuid))
                    dicRightspackage[rightspackageGuid].RightsArray.Add(dicRights[rightsGuid]);
            }
            #endregion

            #region 组装权益包与商品的关系
            foreach (var entity in rightspackageproductArrayResponse.Value.Results)
            {
                var productGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_product_value"));
                var rightspackageGuid = Guid.Parse(entity.Attributes.Value<string>("_mcs_rightspackage_value"));
                if (dicProduct.ContainsKey(productGuid) && dicRightspackage.ContainsKey(rightspackageGuid))
                    dicProduct[productGuid].ProductRightspackageArray.Add(dicRightspackage[rightspackageGuid]);
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

        #region 获取 订单列表
        public async Task<QueryResult<JObject>> QueryOrderList(int pageindex = 1, string search = "")
        {
            #region 组装filter
            var filter = string.Empty;
            if (!string.IsNullOrEmpty(search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{search}%' />";
                filter += $"<condition attribute='mcs_purchasername' operator='like' value='%{search}%' />";
                filter += $"<condition attribute='mcs_purchaserphone' operator='like' value='%{search}%' />";
                filter += $"</filter>";
            }

            //if (!string.IsNullOrEmpty(filter))
            //{
            filter = @"<filter type='and'>
                           <condition attribute='mcs_orderclass' operator='eq' value='100' />" + filter;
            filter = filter + "</filter>";
            //}
            #endregion

            #region 组装FetchXml
            var xDoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{pageCount}' page='{pageindex}' >
              <entity name='mcs_tc_order'>
                <order attribute='mcs_ordertime' descending='true' />
                  {filter}
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            }); ;
            #endregion

            #region 获取记录结果集
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tc_order",
                FetchXml = xDoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var resultsList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion;

            #region 组装数据返回
            var result = new QueryResult<JObject>();
            foreach (var entity in resultsList.Value.Results)
            {
                result.Results.Add(entity.Attributes);
            }
            return result;
            #endregion
        }




        #endregion

        #region 获取单条订单信息
        public async Task<OrderQueryInfoResponse> QueryOrderInfo(string guid)
        {
            var orderQueryInfoResponse = new OrderQueryInfoResponse();
            var orderid = Guid.Parse(guid);
            var orderEntity = await _crmService.Retrieve("mcs_tc_order", orderid, string.Empty, null, dicHead);

            #region 跟进记录
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_tc_productorderitem'>
                <filter type='and'>
                <condition attribute='mcs_order' operator='eq' value='{orderid}' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tc_productorderitem",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var productorderitemList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            orderQueryInfoResponse.OrderInfo = orderEntity.Attributes;
            foreach (var orderitem in productorderitemList.Value.Results)
            {
                orderQueryInfoResponse.OrderItemArray.Add(orderitem.Attributes);
            }
            return orderQueryInfoResponse;
        }

        #endregion

    }
}
