using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System.Xml.Linq;
using MSLibrary;
using System;
using DCEM.ServiceAssistantService.Main.DTOModel;
using System.Collections.Generic;
using MSLibrary.Xrm.Message.Retrieve;
using MSLibrary.Xrm.Message.RetrieveSignleAttribute;
using Newtonsoft.Json.Linq;
using System.Linq;
namespace DCEM.ServiceAssistantService.Main.Application
{
    public class ServiceproxyService : IServiceproxyService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        private int pageCount;

        public ServiceproxyService(ICrmService crmService)
        {
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
            pageCount = 10;
        }
        #endregion

        #region 获取服务委托书 问诊单 列表

        #region filter组装
        public async Task<string> GetQueryListFilter(int type, string search)
        {
            return await Task<string>.Run(() =>
            {
                var filter = string.Empty;
                if (type == 1)  //查问诊单
                {
                    filter += @$"
        <condition attribute='statecode' operator='eq' value='0' />
            <filter type='or'>
                <condition attribute='mcs_currenttype' operator='eq' value='10' />
                <condition attribute='mcs_ifchange' operator='eq' value='1' />
            </filter>
        <condition attribute='mcs_isdelete' operator='ne' value='1' />";
                }
                else if (type == 2) //查服务委托书
                {
                    filter += @$"
        <condition attribute='statecode' operator='eq' value='0' />
        <condition attribute='mcs_currenttype' operator='eq' value='20' />
        <condition attribute='mcs_isdelete' operator='ne' value='1' />";
                }

                if (!string.IsNullOrEmpty(search))
                {
                    filter += $"<filter type='or'>";
                    filter += $"<condition attribute='mcs_carplate' operator='like' value='%{search}%' />";
                    filter += $"<condition attribute='mcs_customername' operator='like' value='%{search}%' />";
                    filter += $"<condition attribute='mcs_name' operator='like' value='%{search}%' />";
                    filter += $"</filter>";
                }

                if (!string.IsNullOrEmpty(filter))
                {
                    filter = "<filter type='and'>" + filter;
                    filter = filter + "</filter>";
                }
                return filter;
            });
        }
        #endregion

        #region FetchXml组装
        public async Task<XDocument> GetGetQueryListFetchXml(int pageindex, string filter)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{pageCount}' page='{pageindex}' >
              <entity name='mcs_serviceproxy'>
                  <order attribute='createdon' descending='true' />
                  {filter}
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
        #endregion

        #region 组装结果集
        /// <summary>
        /// 
        /// </summary>
        /// <param name="type">1、问诊单，2、服务委托书</param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryList(int type, int pageindex, string search)
        {

            #region 获取记录结果集
            var filter = await GetQueryListFilter(type, search);
            var fetchXdoc = await GetGetQueryListFetchXml(pageindex, filter);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceproxy",
                FetchXml = fetchXdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var resultsList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion;

            #region 组装返回结果集
            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = resultsList.Value.Results;
            queryResult.CurrentPage = pageindex;
            return queryResult;
            #endregion

        }
        #endregion
        #endregion

        #region 获取服务委托书 问诊单 详情
        public async Task<ServiceproxyQueryInfoResponse> QueryInfo(string guid)
        {
            var serviceproxyQueryInfoResponse = new ServiceproxyQueryInfoResponse();
            var serviceproxyGuid = Guid.Parse(guid);
            var serviceproxyEntity = await _crmService.Retrieve("mcs_serviceproxy", serviceproxyGuid, string.Empty, null, dicHead);

            #region 环检
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_serviceordercheckresult'>
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceordercheckresult",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var serviceordercheckresultList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 工时
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_serviceorderrepairitem'>
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceorderrepairitem",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var serviceorderrepairitemList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 零件
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_serviceorderpart'>
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceorderpart",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var serviceorderpartList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion


            serviceproxyQueryInfoResponse.Serviceproxy = serviceproxyEntity;
            serviceproxyQueryInfoResponse.ServiceordercheckresultList = serviceordercheckresultList.Value.Results;
            serviceproxyQueryInfoResponse.ServiceorderrepairitemList = serviceorderrepairitemList.Value.Results;
            serviceproxyQueryInfoResponse.ServiceorderpartList = serviceorderpartList.Value.Results;
            return serviceproxyQueryInfoResponse;

        }

        #endregion

        #region 添加 编辑 服务委托书 问诊单
        public async Task<ValidateResult<CrmEntity>> AddOrUpdate(ServiceproxyAddOrUpdateRequest request)
        {
            var validateResult = new ValidateResult<CrmEntity>();
            var reusetCrmEntity = new CrmEntity("mcs_serviceproxy", new Guid());

            if (request.actioncode == 1)
            {
                #region 加入服务委托书
                //加入服务委托书
                var serviceproxyGuid = Guid.NewGuid();
                var serviceproxyEntity = new CrmExecuteEntity("mcs_serviceproxy", serviceproxyGuid);
                serviceproxyEntity.Attributes.Add("mcs_customerid", new CrmEntityReference("mcs_vehowner", Guid.Parse(request.serviceproxy.customerid)));
                serviceproxyEntity.Attributes.Add("mcs_dealerid", new CrmEntityReference("mcs_dealer", Guid.Parse(request.serviceproxy.dealerid)));           //厅店
                serviceproxyEntity.Attributes.Add("mcs_customername", request.serviceproxy.customername);           //车主姓名
                serviceproxyEntity.Attributes.Add("mcs_carplate", request.serviceproxy.carplate);                   //车牌号
                serviceproxyEntity.Attributes.Add("mcs_customerphone", request.serviceproxy.customerphone);         //车主手机
                serviceproxyEntity.Attributes.Add("mcs_shuttlename", request.serviceproxy.shuttlename);             //送修人
                serviceproxyEntity.Attributes.Add("mcs_shuttlephone", request.serviceproxy.shuttlephone);           //送修人手机
                if (request.serviceproxy.inpower != null)
                    serviceproxyEntity.Attributes.Add("mcs_inpower", request.serviceproxy.inpower);                     //进店电量
                if (request.serviceproxy.oilquantity != null)
                    serviceproxyEntity.Attributes.Add("mcs_oilquantity", request.serviceproxy.oilquantity);             //进店油量
                if (request.serviceproxy.mileage != null)
                    serviceproxyEntity.Attributes.Add("mcs_mileage", request.serviceproxy.mileage);                     //进店里程数
                if (request.serviceproxy.arrivalon != null)
                    serviceproxyEntity.Attributes.Add("mcs_arrivalon", Convert.ToDateTime(request.serviceproxy.arrivalon).ToUniversalTime());                 //到店时间
                serviceproxyEntity.Attributes.Add("mcs_customercomment", request.serviceproxy.customercomment);     //客服描述
                serviceproxyEntity.Attributes.Add("mcs_currenttype", request.serviceproxy.currenttype);  //单据类型 10问诊单 20服务委托书
                serviceproxyEntity.Attributes.Add("mcs_ifchange", false);
                serviceproxyEntity.Attributes.Add("mcs_isdelete", false);
                var reuset = await _crmService.Create(serviceproxyEntity);
                #endregion

                #region 更新环检项目(环检项目以前是通过插件更新的 所以这里只能更新)

                #region 组装环检项Map
                var vehcheckFilter = $@"
                <link-entity name='mcs_serviceordercheckresult' from='mcs_checkreultid' to='mcs_vehcheckresultid' link-type='outer' alias='a'>
                    <attribute name='mcs_serviceordercheckresultid' />
                    <filter>
                      <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                    </filter>
                </link-entity>
                ";
                ;
                var vehcheckResponse = await QueryVehcheckListByExpression(vehcheckFilter);
                var vehcheckMap = new Dictionary<Guid, CrmEntity>();
                foreach (var vehcheck in vehcheckResponse.Results)
                {
                    if (!vehcheckMap.ContainsKey(vehcheck.Id))
                        vehcheckMap.Add(vehcheck.Id, vehcheck);
                }
                #endregion

                #region 更新环检项
                //加入环检项目
                foreach (var serviceordercheckresult in request.serviceordercheckresultArray)
                {
                    var checkGuid = Guid.Parse(serviceordercheckresult.checkreultid);
                    if (vehcheckMap.ContainsKey(checkGuid))
                    {
                        var crmExecuteEntity = new CrmExecuteEntity("mcs_serviceordercheckresult", Guid.Parse(vehcheckMap[checkGuid].Attributes.Value<string>("a_x002e_mcs_serviceordercheckresultid")));
                        crmExecuteEntity.Attributes.Add("mcs_checkreult", serviceordercheckresult.checkreult);
                        await _crmService.Update(crmExecuteEntity);
                    }
                    else  //容错机制  如果没有找到记录 就创建
                    {
                        var serviceordercheckresultGuid = Guid.NewGuid();
                        var serviceordercheckresultEntity = new CrmExecuteEntity("mcs_serviceordercheckresult", serviceordercheckresultGuid);
                        serviceordercheckresultEntity.Attributes.Add("mcs_checkreultid", new CrmEntityReference("mcs_vehcheckresult", Guid.Parse(serviceordercheckresult.checkreultid)));
                        serviceordercheckresultEntity.Attributes.Add("mcs_name", serviceordercheckresult.name);
                        serviceordercheckresultEntity.Attributes.Add("mcs_checkreult", serviceordercheckresult.checkreult);
                        serviceordercheckresultEntity.Attributes.Add("mcs_serviceorderid", new CrmEntityReference("mcs_serviceproxy", serviceproxyGuid));
                        reuset = await _crmService.Create(serviceordercheckresultEntity);
                    }

                }
                #endregion

                #endregion

                #region 加入维修项目
                foreach (var serviceorderrepairitem in request.serviceorderrepairitemArray)
                {
                    var serviceorderrepairitemGuid = Guid.NewGuid();
                    var serviceorderrepairitemEntity = new CrmExecuteEntity("mcs_serviceorderrepairitem", serviceorderrepairitemGuid);
                    serviceorderrepairitemEntity.Attributes.Add("mcs_repairitemid", new CrmEntityReference("mcs_repairiteminfo", Guid.Parse(serviceorderrepairitem.repairitemid)));        //维修项目代码
                    serviceorderrepairitemEntity.Attributes.Add("mcs_name", serviceorderrepairitem.name);                  //维修项目名称
                    serviceorderrepairitemEntity.Attributes.Add("mcs_workinghour", serviceorderrepairitem.workinghour);    //工时数
                    serviceorderrepairitemEntity.Attributes.Add("mcs_price", serviceorderrepairitem.price);                //单价
                    serviceorderrepairitemEntity.Attributes.Add("mcs_discount", serviceorderrepairitem.discount);          //折扣
                    //维修类别
                    serviceorderrepairitemEntity.Attributes.Add("mcs_repairitemtypeid", new CrmEntityReference("mcs_repairitemtype", Guid.Parse(serviceorderrepairitem.repairitemtypeid)));
                    //维修类别
                    serviceorderrepairitemEntity.Attributes.Add("mcs_repairitemtypedetailid", new CrmEntityReference("mcs_repairitemtypedetail", Guid.Parse(serviceorderrepairitem.repairitemtypedetailid)));
                    //总价
                    serviceorderrepairitemEntity.Attributes.Add("mcs_repairamount", serviceorderrepairitem.price * serviceorderrepairitem.discount * serviceorderrepairitem.workinghour);
                    serviceorderrepairitemEntity.Attributes.Add("mcs_serviceorderid", new CrmEntityReference("mcs_serviceproxy", serviceproxyGuid));
                    reuset = await _crmService.Create(serviceorderrepairitemEntity);
                }
                #endregion

                #region 加入维修配件
                //加入维修配件
                foreach (var serviceorderpart in request.serviceorderpartArray)
                {
                    var serviceorderpartGuid = Guid.NewGuid();
                    var serviceorderpartEntity = new CrmExecuteEntity("mcs_serviceorderpart", serviceorderpartGuid);
                    serviceorderpartEntity.Attributes.Add("mcs_partsid", new CrmEntityReference("mcs_parts", Guid.Parse(serviceorderpart.partsid)));
                    serviceorderpartEntity.Attributes.Add("mcs_partsname", serviceorderpart.partsname);
                    serviceorderpartEntity.Attributes.Add("mcs_price", serviceorderpart.price);
                    serviceorderpartEntity.Attributes.Add("mcs_quantity", serviceorderpart.quantity);
                    serviceorderpartEntity.Attributes.Add("mcs_discount", serviceorderpart.discount);
                    serviceorderpartEntity.Attributes.Add("mcs_repairitemtypeid", new CrmEntityReference("mcs_repairitemtype", Guid.Parse(serviceorderpart.repairitemtypeid)));  //维修类别
                    serviceorderpartEntity.Attributes.Add("mcs_repairitemtypedetailid", new CrmEntityReference("mcs_repairitemtypedetail", Guid.Parse(serviceorderpart.repairitemtypedetailid)));
                    serviceorderpartEntity.Attributes.Add("mcs_amount", serviceorderpart.price * serviceorderpart.discount * serviceorderpart.quantity);        //总价
                    serviceorderpartEntity.Attributes.Add("mcs_serviceorderid", new CrmEntityReference("mcs_serviceproxy", serviceproxyGuid));
                    reuset = await _crmService.Create(serviceorderpartEntity);
                }
                #endregion


                reusetCrmEntity.Id = serviceproxyGuid;
                validateResult.Data = reusetCrmEntity;
                validateResult.Result = true;
                validateResult.Description = "操作成功";
            }

            return validateResult;
        }
        #endregion

        #region 删除 服务委托书 问诊单
        public async Task<ValidateResult<string>> Delete(string serviceproxyGuid)
        {
            var validateResult = new ValidateResult<string>();
            await _crmService.Delete("mcs_serviceproxy", Guid.Parse(serviceproxyGuid));
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            return validateResult;
        }
        #endregion

        #region 查询所有环检项 列表
        public async Task<QueryResult<CrmEntity>> QueryVehcheckList()
        {
            var queryResult = new QueryResult<CrmEntity>();
            var result = await QueryVehcheckListByExpression(string.Empty);
            queryResult.Results = result.Results;
            return queryResult;
        }

        public async Task<QueryResult<CrmEntity>> QueryVehcheckListByExpression(string filter)
        {
            //var queryResult = new QueryResult<CrmEntity>();
            //var result = await _crmService.RetrieveMultiple("mcs_vehcheckresult", queryExpression, null, dicHead);
            //queryResult.Results = result.Results;
            //return queryResult;


            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_vehcheckresult'>
                        <all-attributes />
                        <order attribute='mcs_name' descending='false' />
                        {filter}
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_vehcheckresult",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var response = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = response.Value.Results;
            return queryResult;
        }
        #endregion

        #region 查询厅店工位 列表
        public async Task<QueryResult<CrmEntity>> QueryRepairlocationList()
        {
            var queryResult = new QueryResult<CrmEntity>();
            var result = await _crmService.RetrieveMultiple("mcs_repairlocation", string.Empty, null, dicHead);
            queryResult.Results = result.Results;
            return queryResult;
        }
        #endregion

        #region 查询保养项 列表
        public async Task<QueryResult<CrmEntity>> QueryMaintenanceList()
        {
            var queryResult = new QueryResult<CrmEntity>();
            var result = await _crmService.RetrieveMultiple("mcs_maintenance", string.Empty, null, dicHead);
            queryResult.Results = result.Results;
            return queryResult;
        }
        #endregion

        #region 查询保养项 详情
        public async Task<MaintenanceQueryInfoResponse> QueryMaintenanceInfo(string maintenanceGuid, string dealeridGuid)
        {
            var queryResult = new MaintenanceQueryInfoResponse();
            var maintenanceEntity = await _crmService.Retrieve("mcs_maintenance", Guid.Parse(maintenanceGuid), null, null, dicHead);

            #region 维修项目 
            var maintenanceiteminfofilter = $@"    
            <link-entity name='mcs_maintenanceiteminfo' from='mcs_repairiteminfoid' to='mcs_repairiteminfoid'>
                <filter type='and'>
                <condition attribute='mcs_maintenanceid' operator='eq' value='{maintenanceGuid}' />
                </filter>
            </link-entity>";
            var queryRepairitemList = await QueryRepairitemListByFilter(dealeridGuid, maintenanceiteminfofilter);
            #endregion

            #region 维修配件
            var repairitempartfilter = $@"    
            <link-entity name='mcs_repairitempart' from='mcs_partsid' to='mcs_partsid'>
              <link-entity name='mcs_repairiteminfo' from='mcs_repairiteminfoid' to='mcs_repairitemid'>
                <link-entity name='mcs_maintenanceiteminfo' from='mcs_repairiteminfoid' to='mcs_repairiteminfoid'>
                  <filter type='and'>
                    <condition attribute='mcs_maintenanceid' operator='eq' value='{maintenanceGuid}' />
                  </filter>
                </link-entity>
              </link-entity>
            </link-entity>";
            var queryPartsList = await QueryPartsListByFilter(1, repairitempartfilter);
            #endregion

            queryResult.Maintenance = maintenanceEntity;
            queryResult.MaintenanceiteminfoList = queryRepairitemList.Results;
            queryResult.RepairitempartList = queryPartsList.Results;

            return queryResult;
        }
        #endregion

        #region 查询维修项目
        public async Task<QueryResult<CrmEntity>> QueryRepairitemList(string dealeridGuid)
        {
            return await QueryRepairitemListByFilter(dealeridGuid, string.Empty);
        }

        public async Task<QueryResult<CrmEntity>> QueryRepairitemListByFilter(string dealeridGuid, string filter)
        {
            #region 查询维修项目基本信息
            var repairitemMap = new Dictionary<Guid, CrmEntity>();
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                    <entity name='mcs_repairiteminfo'>
                        <order attribute='mcs_name' descending='false' />
                        {filter}
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_repairiteminfo",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var repairiteminfoResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询费用 来源厅店索赔设置
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='1' distinct='false'>
                <entity name='mcs_dealerwarrantysetting'>
                    <filter type='and'>
                        <condition attribute='mcs_dealername' operator='eq'  value='{dealeridGuid}' />
                        <condition attribute='mcs_startdate' operator='on-or-before' value='" + DateTime.Now.ToString("yyyy-MM-dd") + @"' />
                        <condition attribute='mcs_enddate' operator='on-or-after' value='" + DateTime.Now.ToString("yyyy-MM-dd") + @"' />
                    </filter>
                </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_dealerwarrantysetting",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var dealerwarrantysettingResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 组装map
            //查询维修类型
            var repairitemtypeEntity = await _crmService.RetrieveMultiple("mcs_repairitemtype", "$filter=mcs_name eq '自费'", null, dicHead);
            //查询维修类别
            var repairitemtypedetailEntity = await _crmService.RetrieveMultiple("mcs_repairitemtypedetail", "$filter=mcs_name eq '一般维修'", null, dicHead);
            //组装map
            foreach (var repairitem in repairiteminfoResponse.Value.Results)
            {
                repairitem.Attributes.Add("ext_price", JToken.FromObject(0)); //默认费用

                if (repairitemtypeEntity.Results.Count > 0)
                {
                    repairitem.Attributes.Add("ext_repairitemtypeid_formatted", repairitemtypeEntity.Results[0].Attributes["mcs_name"]); // 默认维修类型
                    repairitem.Attributes.Add("ext_repairitemtypeid", JToken.FromObject(repairitemtypeEntity.Results[0].Id));
                }

                if (repairitemtypedetailEntity.Results.Count > 0)
                {
                    repairitem.Attributes.Add("ext_repairitemtypedetailid_formatted", repairitemtypedetailEntity.Results[0].Attributes["mcs_name"]); //默认维修类别
                    repairitem.Attributes.Add("ext_repairitemtypedetailid", JToken.FromObject(repairitemtypedetailEntity.Results[0].Id));
                }

                if (dealerwarrantysettingResponse.Value.Results.Count > 0)
                {
                    if (dealerwarrantysettingResponse.Value.Results[0].Attributes.ContainsKey("mcs_price"))
                    {
                        repairitem.Attributes["ext_price"] = dealerwarrantysettingResponse.Value.Results[0].Attributes["mcs_price"];
                    }
                }

                repairitemMap.Add(repairitem.Id, repairitem);
            }
            #endregion

            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = repairitemMap.Values.ToList();
            return queryResult;


        }


        #endregion

        #region 查询维修配件
        public async Task<QueryResult<CrmEntity>> QueryPartsList()
        {
            var result = await QueryPartsListByFilter(1, string.Empty);
            return result;
        }

        public async Task<QueryResult<CrmEntity>> QueryPartsListByFilter(int pageIndex, string filter)
        {
            #region 查询备件基本信息
            var partsMap = new Dictionary<Guid, CrmEntity>();
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{15}' page='{1}' distinct='true'>
                    <entity name='mcs_parts'>
                        <order attribute='mcs_name' descending='false' />
                        {filter}
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_parts",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var partsResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

            //查询维修类型
            var repairitemtypeEntity = await _crmService.RetrieveMultiple("mcs_repairitemtype", "$filter=mcs_name eq '自费'", null, dicHead);
            //查询维修类别
            var repairitemtypedetailEntity = await _crmService.RetrieveMultiple("mcs_repairitemtypedetail", "$filter=mcs_name eq '一般维修'", null, dicHead);


            //组装map
            foreach (var parts in partsResponse.Value.Results)
            {
                parts.Attributes.Add("ext_price", JToken.FromObject(0)); //默认费用

                if (repairitemtypeEntity.Results.Count > 0)
                {
                    parts.Attributes.Add("ext_repairitemtypeid_formatted", repairitemtypeEntity.Results[0].Attributes["mcs_name"]); // 默认维修类型
                    parts.Attributes.Add("ext_repairitemtypeid", JToken.FromObject(repairitemtypeEntity.Results[0].Id));
                }

                if (repairitemtypedetailEntity.Results.Count > 0)
                {
                    parts.Attributes.Add("ext_repairitemtypedetailid_formatted", repairitemtypedetailEntity.Results[0].Attributes["mcs_name"]); //默认维修类别
                    parts.Attributes.Add("ext_repairitemtypedetailid", JToken.FromObject(repairitemtypedetailEntity.Results[0].Id));
                }
                partsMap.Add(parts.Id, parts);
            }

            #endregion

            #region 查询备件价格
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical'  distinct='false'>
                  <entity name='mcs_spmpartspricemanagement'>
                    <filter type='or'>";
                foreach (var parts in partsMap)
                    fetchXml += $@"<condition attribute='mcs_partid' operator='eq'  value='{parts.Key}' />";
                fetchXml += @"
                    </filter>
                  </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_spmpartspricemanagement",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var spmpartspricemanagementResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 组装数据
            foreach (var spmpartspricemanagement in spmpartspricemanagementResponse.Value.Results)
            {
                var partid = JToken.FromObject(string.Empty);
                var ext_price = JToken.FromObject(0);
                if (spmpartspricemanagement.Attributes.ContainsKey("_mcs_partid_value"))
                {
                    partid = spmpartspricemanagement.Attributes["_mcs_partid_value"];
                }
                if (spmpartspricemanagement.Attributes.ContainsKey("mcs_wholesalesprice_base"))
                {
                    ext_price = spmpartspricemanagement.Attributes["mcs_wholesalesprice_base"];
                }


                if (!string.IsNullOrEmpty(partid.ToObject<string>()))
                {
                    var partGuid = Guid.Parse(partid.ToObject<string>());
                    if (partsMap.ContainsKey(partGuid))
                    {
                        partsMap[partGuid].Attributes["ext_price"] = ext_price;
                    }
                }
            }
            #endregion

            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = partsMap.Values.ToList();
            return queryResult;
        }
        #endregion

    }
}
