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
using DCEM.Main.Entities;
using DCEM.Main;

namespace DCEM.ServiceAssistantService.Main.Application
{
    //服务委托书相关
    public class ServiceproxyService : IServiceproxyService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        private int defaultpageCount;

        public ServiceproxyService(ICrmService crmService)
        {
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
            defaultpageCount = 10;
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
        public async Task<XDocument> GetGetQueryListFetchXml(int pageIndex, string filter)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{defaultpageCount}' page='{pageIndex}' >
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
        public async Task<QueryResult<CrmEntity>> QueryList(int type, int pageIndex, string search)
        {

            #region 获取记录结果集
            var filter = await GetQueryListFilter(type, search);
            var fetchXdoc = await GetGetQueryListFetchXml(pageIndex, filter);

            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);

            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceproxy",
                FetchXml = fetchXdoc,
                ProxyUserId = userInfo != null ? userInfo.systemuserid: null
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var resultsList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion;

            #region 组装返回结果集
            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = resultsList.Value.Results;
            queryResult.CurrentPage = pageIndex;
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

            #region 环检项
            var vehcheckFilter = $@"
                <link-entity name='mcs_serviceordercheckresult' from='mcs_checkreultid' to='mcs_vehcheckresultid' alias='a'>
                    <attribute name='mcs_serviceordercheckresultid' />
                    <attribute name='mcs_checkreult' />
                    <filter type='and'>
                      <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                    </filter>
                </link-entity>";
            var vehcheckResponse = await QueryVehcheckListByExpression(vehcheckFilter);
            #endregion

            #region 工时
            var workFilter = $@"
                <link-entity name='mcs_serviceorderrepairitem' from='mcs_repairitemid' to='mcs_repairiteminfoid' alias='a'>
                    <all-attributes/>
                    <filter type='and'>
                      <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                    </filter>
                </link-entity>";
            var workResponse = await QueryRepairitemListByFilter(1, 5000, workFilter);
            #endregion

            #region 零件
            var partsFilter = $@"
                <link-entity name='mcs_serviceorderpart' from='mcs_partsid' to='mcs_partsid' alias='a'>
                    <all-attributes/>
                    <filter>
                      <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                    </filter>
                </link-entity>";
            var partsResponse = await QueryPartsListByFilter(1, 5000, partsFilter);
            #endregion

            #region 维修履历
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var customerid = serviceproxyEntity.Attributes.Value<string>("_mcs_customerid_value");
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_serviceproxy'>
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                    <condition attribute='mcs_customerid' operator='eq' value='{customerid}' />
                    <condition attribute='mcs_currenttype' operator='eq' value='20' />
                    <condition attribute='mcs_status' operator='eq' value='180' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceproxy",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var serviceproxyResumeResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion


            serviceproxyQueryInfoResponse.Serviceproxy = serviceproxyEntity;
            serviceproxyQueryInfoResponse.ServiceordercheckresultList = vehcheckResponse.Results;
            serviceproxyQueryInfoResponse.ServiceorderrepairitemList = workResponse.Results;
            serviceproxyQueryInfoResponse.ServiceorderpartList = partsResponse.Results;
            serviceproxyQueryInfoResponse.ServiceproxyResumeList = serviceproxyResumeResponse.Value.Results;
            return serviceproxyQueryInfoResponse;

        }

        #endregion

        #region 添加 编辑 服务委托书 问诊单
        public async Task<CrmExecuteEntity> AddOrUpdateGetServiceproxyEntity(ServiceproxyAddOrUpdateRequest request, Guid serviceproxyGuid)
        {
            return await Task<CrmExecuteEntity>.Run(() =>
            {
                var serviceproxyEntity = new CrmExecuteEntity("mcs_serviceproxy", serviceproxyGuid);
                serviceproxyEntity.Attributes.Add("mcs_customerid", new CrmEntityReference("mcs_vehowner", Guid.Parse(request.serviceproxy.customerid)));

                if (request.serviceproxy.dealerid != null)
                    serviceproxyEntity.Attributes.Add("mcs_dealerid", new CrmEntityReference("mcs_dealer", Guid.Parse(request.serviceproxy.dealerid)));  //厅店
                if (request.serviceproxy.customername != null)
                    serviceproxyEntity.Attributes.Add("mcs_customername", request.serviceproxy.customername);           //车主姓名
                if (request.serviceproxy.carplate != null)
                    serviceproxyEntity.Attributes.Add("mcs_carplate", request.serviceproxy.carplate);                   //车牌号
                if (request.serviceproxy.customerphone != null)
                    serviceproxyEntity.Attributes.Add("mcs_customerphone", request.serviceproxy.customerphone);         //车主手机
                if (request.serviceproxy.shuttlename != null)
                    serviceproxyEntity.Attributes.Add("mcs_shuttlename", request.serviceproxy.shuttlename);             //送修人
                if (request.serviceproxy.shuttlephone != null)
                    serviceproxyEntity.Attributes.Add("mcs_shuttlephone", request.serviceproxy.shuttlephone);           //送修人手机
                if (request.serviceproxy.inpower != null)
                    serviceproxyEntity.Attributes.Add("mcs_inpower", request.serviceproxy.inpower);                     //进店电量
                if (request.serviceproxy.oilquantity != null)
                    serviceproxyEntity.Attributes.Add("mcs_oilquantity", request.serviceproxy.oilquantity);             //进店油量
                if (request.serviceproxy.mileage != null)
                    serviceproxyEntity.Attributes.Add("mcs_mileage", request.serviceproxy.mileage);                     //进店里程数
                if (request.serviceproxy.arrivalon != null)
                    serviceproxyEntity.Attributes.Add("mcs_arrivalon", Convert.ToDateTime(request.serviceproxy.arrivalon).ToUniversalTime());   //到店时间
                if (request.serviceproxy.customercomment != null)
                    serviceproxyEntity.Attributes.Add("mcs_customercomment", request.serviceproxy.customercomment);     //客服描述
                if (request.serviceproxy.repairlocationid != null)
                    serviceproxyEntity.Attributes.Add("mcs_repairlocationid", new CrmEntityReference("mcs_repairlocation", Guid.Parse(request.serviceproxy.repairlocationid)));     //工位
                if (request.serviceproxy.expectfinishat != null)
                    serviceproxyEntity.Attributes.Add("mcs_expectfinishat", Convert.ToDateTime(request.serviceproxy.expectfinishat).ToUniversalTime());     //预计交车时间
                if (request.serviceproxy.customercontent != null)
                    serviceproxyEntity.Attributes.Add("mcs_customercontent", request.serviceproxy.customercontent);     //故障信息
                if (request.serviceproxy.testresult != null)
                    serviceproxyEntity.Attributes.Add("mcs_testresult", request.serviceproxy.testresult);     //检查结果
                if (request.serviceproxy.appointmentcode != null)
                    serviceproxyEntity.Attributes.Add("mcs_appointmentcode", new CrmEntityReference("mcs_appointmentinfo", Guid.Parse(request.serviceproxy.appointmentcode)));     //检查结果
                if (request.serviceproxy.carmodel != null)
                    serviceproxyEntity.Attributes.Add("mcs_carmodel", new CrmEntityReference("mcs_carmodel", Guid.Parse(request.serviceproxy.carmodel)));     //车型

                serviceproxyEntity.Attributes.Add("mcs_currenttype", request.serviceproxy.currenttype);  //单据类型 10问诊单 20服务委托书
                serviceproxyEntity.Attributes.Add("mcs_ifchange", false);
                serviceproxyEntity.Attributes.Add("mcs_isdelete", false);

                return serviceproxyEntity;
            });

        }

        public async Task<ValidateResult<CrmEntity>> AddOrUpdate(ServiceproxyAddOrUpdateRequest request)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            var validateResult = new ValidateResult<CrmEntity>();
            var reusetCrmEntity = new CrmEntity("mcs_serviceproxy", new Guid());
            var serviceproxyGuid = new Guid();

            decimal hoursamount = 0; //维修总金额
            decimal partsamount = 0; //零件总金额
            decimal discountamount = 0;//优惠总金额
            decimal amounttotal = 0;//费用合计

            if (request.actioncode == 1 || request.actioncode == 3)
            {
                #region 加入服务委托书
                //加入服务委托书
                serviceproxyGuid = Guid.NewGuid();
                var serviceproxyEntity = await AddOrUpdateGetServiceproxyEntity(request, serviceproxyGuid);
                var reuset = await _crmService.Create(serviceproxyEntity, userInfo?.systemuserid);
                #endregion
            }
            else if (request.actioncode == 2)
            {
                #region 更新服务委托书
                serviceproxyGuid = Guid.Parse(request.serviceproxy.serviceproxyid);
                var serviceproxyEntity = await AddOrUpdateGetServiceproxyEntity(request, serviceproxyGuid);
                await _crmService.Update(serviceproxyEntity);
                #endregion

            }

            #region 更新环检项目(环检项目以前是通过插件自动创建的 所以这里只能更新)

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
                    var crmExecuteEntity = new CrmExecuteEntity("mcs_serviceordercheckresult", Guid.Parse(vehcheckMap[checkGuid].Attributes.Value<string>("a.mcs_serviceordercheckresultid")));
                    crmExecuteEntity.Attributes.Add("mcs_checkreult", serviceordercheckresult.checkreult);
                    await _crmService.Update(crmExecuteEntity);
                }
                else  //简单容错机制  如果没有找到记录 就创建
                {
                    var serviceordercheckresultGuid = Guid.NewGuid();
                    var serviceordercheckresultEntity = new CrmExecuteEntity("mcs_serviceordercheckresult", serviceordercheckresultGuid);
                    serviceordercheckresultEntity.Attributes.Add("mcs_checkreultid", new CrmEntityReference("mcs_vehcheckresult", Guid.Parse(serviceordercheckresult.checkreultid)));
                    serviceordercheckresultEntity.Attributes.Add("mcs_name", serviceordercheckresult.name);
                    serviceordercheckresultEntity.Attributes.Add("mcs_checkreult", serviceordercheckresult.checkreult);
                    serviceordercheckresultEntity.Attributes.Add("mcs_serviceorderid", new CrmEntityReference("mcs_serviceproxy", serviceproxyGuid));
                    var reuset = await _crmService.Create(serviceordercheckresultEntity);
                }

            }
            #endregion

            #endregion

            #region 删除旧的维修项目
            var deletePairitemList = await _crmService.RetrieveMultiple("mcs_serviceorderrepairitem", $"$filter=_mcs_serviceorderid_value eq {serviceproxyGuid}");
            foreach (var deletePairitem in deletePairitemList.Results)
            {
                await _crmService.Delete("mcs_serviceorderrepairitem", deletePairitem.Id);
            }
            #endregion

            #region 更新维修项目

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

                //计算工时总额
                hoursamount += serviceorderrepairitem.price * serviceorderrepairitem.discount * serviceorderrepairitem.workinghour;
                //计算折扣
                discountamount += serviceorderrepairitem.price * serviceorderrepairitem.workinghour - serviceorderrepairitem.price * serviceorderrepairitem.discount * serviceorderrepairitem.workinghour;

                await _crmService.Create(serviceorderrepairitemEntity);
            }
            #endregion

            #region 删除旧的维修配件
            var deletePartsList = await _crmService.RetrieveMultiple("mcs_serviceorderpart", $"$filter=_mcs_serviceorderid_value eq {serviceproxyGuid}");
            foreach (var deleteParts in deletePartsList.Results)
            {
                await _crmService.Delete("mcs_serviceorderpart", deleteParts.Id);
            }
            #endregion

            #region 更新维修配件
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

                //计算零件总额
                partsamount += serviceorderpart.price * serviceorderpart.discount * serviceorderpart.quantity;
                //计算折扣
                discountamount += serviceorderpart.price * serviceorderpart.quantity - serviceorderpart.price * serviceorderpart.discount * serviceorderpart.quantity;
                await _crmService.Create(serviceorderpartEntity);
            }
            #endregion


            #region 计算总金额(更新表)
            amounttotal = hoursamount + partsamount;

            var serviceproxyUpdateEntity = new CrmExecuteEntity("mcs_serviceproxy", serviceproxyGuid);
            serviceproxyUpdateEntity.Attributes.Add("mcs_hoursamount", hoursamount);           
            serviceproxyUpdateEntity.Attributes.Add("mcs_partsamount", partsamount);         
            serviceproxyUpdateEntity.Attributes.Add("mcs_discountamount", discountamount);         
            serviceproxyUpdateEntity.Attributes.Add("mcs_amounttotal", amounttotal);          
            await _crmService.Update(serviceproxyUpdateEntity);
            #endregion

            #region 组装数据返回


            reusetCrmEntity = await _crmService.Retrieve("mcs_serviceproxy", serviceproxyGuid, null);
            validateResult.Data = reusetCrmEntity;
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            #endregion

      

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

        #region 问诊单转服务委托书
        public async Task<ValidateResult<string>> ToServiceproxy(string serviceproxyGuid)
        {
            var validateResult = new ValidateResult<string>();
            var serviceproxyEntity = new CrmExecuteEntity("mcs_serviceproxy", Guid.Parse(serviceproxyGuid));
            serviceproxyEntity.Attributes.Add("mcs_currenttype", 20);
            await _crmService.Update(serviceproxyEntity);
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            return validateResult;
        }
        #endregion

        #region 查询 所有环检项 列表
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

        #region 查询 厅店工位 列表
        public async Task<QueryResult<CrmEntity>> QueryRepairlocationList()
        {
            var queryResult = new QueryResult<CrmEntity>();
            var result = await _crmService.RetrieveMultiple("mcs_repairlocation", string.Empty, null, dicHead);
            queryResult.Results = result.Results;
            return queryResult;
        }
        #endregion

        #region 查询 保养项 列表
        public async Task<QueryResult<CrmEntity>> QueryMaintenanceList()
        {
            var queryResult = new QueryResult<CrmEntity>();
            var result = await _crmService.RetrieveMultiple("mcs_maintenance", string.Empty, null, dicHead);
            queryResult.Results = result.Results;
            return queryResult;
        }
        #endregion

        #region 查询 保养项 详情
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
            var queryRepairitemList = await QueryRepairitemListByFilter(1, 5000, maintenanceiteminfofilter);
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
            var queryPartsList = await QueryPartsListByFilter(1, 5000, repairitempartfilter);
            #endregion

            queryResult.Maintenance = maintenanceEntity;
            queryResult.MaintenanceiteminfoList = await AddExtRepairitemList(queryRepairitemList.Results, dealeridGuid);
            queryResult.RepairitempartList = await AddExtPartsList(queryPartsList.Results);

            return queryResult;
        }
        #endregion

        #region 加工 额外维修项目信息
        public async Task<List<CrmEntity>> AddExtRepairitemList(List<CrmEntity> repairitemList, string dealeridGuid)
        {
          
            var repairitemMap = new Dictionary<Guid, CrmEntity>();

            #region 组装 维修项目Map
            foreach (var repairitem in repairitemList)
            {
                if (!repairitemMap.ContainsKey(repairitem.Id))
                    repairitemMap.Add(repairitem.Id, repairitem);
            }
            #endregion

            #region 查询 默认维修类型
            //查询 默认维修类型 维修类型
            var repairitemtypeEntity = await _crmService.RetrieveMultiple("mcs_repairitemtype", "$filter=mcs_name eq '自费'", null, dicHead);
            //查询 默认维修类型 维修类别
            var repairitemtypedetailEntity = await _crmService.RetrieveMultiple("mcs_repairitemtypedetail", "$filter=mcs_name eq '一般维修'", null, dicHead);
            #endregion

            #region 查询 厅店索赔设置 (保修的费用)
            var xdoc = await Task<XDocument>.Run(() =>
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
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_dealerwarrantysetting",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var dealerwarrantysettingResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 更新 维修项目Map
            foreach (var repairitemkv in repairitemMap)
            {
                //初始化 价格
                repairitemkv.Value.Attributes.Add("ext_price", JToken.FromObject(0)); //默认费用
                repairitemkv.Value.Attributes.Add("ext_price_formatted", JToken.FromObject("¥0")); //默认费用
                //加入维修类型
                if (repairitemtypeEntity.Results.Count > 0)
                {
                    repairitemkv.Value.Attributes.Add("ext_repairitemtypeid", JToken.FromObject(repairitemtypeEntity.Results[0].Id));
                    repairitemkv.Value.Attributes.Add("ext_repairitemtypeid_formatted", repairitemtypeEntity.Results[0].Attributes["mcs_name"]);
                }
                //加入维修类别
                if (repairitemtypedetailEntity.Results.Count > 0)
                {
                    repairitemkv.Value.Attributes.Add("ext_repairitemtypedetailid", JToken.FromObject(repairitemtypedetailEntity.Results[0].Id));
                    repairitemkv.Value.Attributes.Add("ext_repairitemtypedetailid_formatted", repairitemtypedetailEntity.Results[0].Attributes["mcs_name"]);
                }
                //加入价格
                if (dealerwarrantysettingResponse.Value.Results.Count > 0)
                {
                    if (dealerwarrantysettingResponse.Value.Results[0].Attributes.ContainsKey("mcs_price_base"))
                    {
                        repairitemkv.Value.Attributes["ext_price"] = dealerwarrantysettingResponse.Value.Results[0].Attributes["mcs_price_base"];
                        repairitemkv.Value.Attributes["ext_price_formatted"] = dealerwarrantysettingResponse.Value.Results[0].Attributes["mcs_price_base@OData.Community.Display.V1.FormattedValue"];
                    }
                }
            }
            #endregion

            return repairitemMap.Values.ToList();

        }
        #endregion

        #region 加工 额外的配件信息
        public async Task<List<CrmEntity>> AddExtPartsList(List<CrmEntity> partsList)
        {
            var partsMap = new Dictionary<Guid, CrmEntity>();

            #region 组装 维修配件Map
            //组装map
            foreach (var parts in partsList)
            {
                if (!partsMap.ContainsKey(parts.Id))
                    partsMap.Add(parts.Id, parts);
            }
            #endregion

            #region 查询 默认维修类型 额外信息(通用)
            //查询 默认维修类型 维修类型
            var repairitemtypeEntity = await _crmService.RetrieveMultiple("mcs_repairitemtype", "$filter=mcs_name eq '自费'", null, dicHead);
            //查询 默认维修类型 维修类别
            var repairitemtypedetailEntity = await _crmService.RetrieveMultiple("mcs_repairitemtypedetail", "$filter=mcs_name eq '一般维修'", null, dicHead);
            #endregion

            #region 查询 备件价格(自费维修配件费用) 额外信息(维修配件) 组装Map
            var xdoc = await Task<XDocument>.Run(() =>
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
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);

            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_spmpartspricemanagement",
                FetchXml = xdoc,
                ProxyUserId= userInfo!=null? userInfo.systemuserid:null
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var spmpartspricemanagementResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

            var spmpartspricemanagementMap = new Dictionary<Guid, CrmEntity>();
            foreach (var spmpartspricemanagement in spmpartspricemanagementResponse.Value.Results)
            {
                var partid = spmpartspricemanagement.Attributes["_mcs_partid_value"].Value<string>();
                spmpartspricemanagementMap.Add(Guid.Parse(partid), spmpartspricemanagement);
            }
            #endregion

            #region 更新 维修配件Map
            foreach (var partskv in partsMap)
            {
                //初始化 价格
                partskv.Value.Attributes.Add("ext_price", JToken.FromObject(0)); //默认费用
                partskv.Value.Attributes.Add("ext_price_formatted", JToken.FromObject("¥0")); //默认费用

                //加入 维修类型
                if (repairitemtypeEntity.Results.Count > 0)
                {
                    partskv.Value.Attributes.Add("ext_repairitemtypeid_formatted", repairitemtypeEntity.Results[0].Attributes["mcs_name"]);
                    partskv.Value.Attributes.Add("ext_repairitemtypeid", JToken.FromObject(repairitemtypeEntity.Results[0].Id));
                }
                //加入 维修类别
                if (repairitemtypedetailEntity.Results.Count > 0)
                {
                    partskv.Value.Attributes.Add("ext_repairitemtypedetailid_formatted", repairitemtypedetailEntity.Results[0].Attributes["mcs_name"]);
                    partskv.Value.Attributes.Add("ext_repairitemtypedetailid", JToken.FromObject(repairitemtypedetailEntity.Results[0].Id));
                }
                //加入 价格
                if (spmpartspricemanagementMap.ContainsKey(partskv.Key))
                {
                    if (spmpartspricemanagementMap[partskv.Key].Attributes.ContainsKey("mcs_wholesalesprice_base"))
                    {
                        partskv.Value.Attributes["ext_price"] = spmpartspricemanagementMap[partskv.Key].Attributes["mcs_wholesalesprice_base"];
                        partskv.Value.Attributes["ext_price_formatted"] = spmpartspricemanagementMap[partskv.Key].Attributes["mcs_wholesalesprice_base@OData.Community.Display.V1.FormattedValue"];
                    }
                }
            }
            #endregion

            return partsMap.Values.ToList();
        }

        #endregion

        #region 查询 维修项目
        public async Task<QueryResult<CrmEntity>> QueryRepairitemList(string dealeridGuid, int pageIndex, string search)
        {
            string filter = string.Empty;
            if (!string.IsNullOrEmpty(search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{search}%' />";
                filter += $"<condition attribute='mcs_repairitemcode' operator='like' value='%{search}%' />";
                filter += $"<condition attribute='mcs_pinyincode' operator='like' value='%{search}%' />";
                filter += $"</filter>";
            }
            var result = await QueryRepairitemListByFilter(pageIndex, defaultpageCount, filter);
            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = await AddExtRepairitemList(result.Results, dealeridGuid);
            return queryResult;

        }

        public async Task<QueryResult<CrmEntity>> QueryRepairitemListByFilter(int pageIndex, int pageCount, string filter)
        {
            #region 查询维修项目基本信息

            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true' count='{pageCount}' page='{pageIndex}'>
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
            var workResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = workResponse.Value.Results;
            return queryResult;


        }


        #endregion

        #region 查询 维修配件
        public async Task<QueryResult<CrmEntity>> QueryPartsList(int pageIndex, string search)
        {
            string filter = string.Empty;
            if (!string.IsNullOrEmpty(search))
            {
                filter += $@"
                <link-entity name='mcs_repairitempart' from='mcs_partsid' to='mcs_partsid'>
                    <filter type='or'>
                    <condition attribute='mcs_name' operator='like' value='%{search}%' />
                    <condition attribute='mcs_pinyincode' operator='like' value='%{search}%' />
                    </filter>
                </link-entity>";
            }

            var result = await QueryPartsListByFilter(pageIndex, defaultpageCount, filter);
            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = await AddExtPartsList(result.Results);
            return queryResult;
        }

        public async Task<QueryResult<CrmEntity>> QueryPartsListByFilter(int pageIndex, int pageCount, string filter)
        {
            #region 查询备件基本信息

            var xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"
                <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{pageCount}' page='{pageIndex}' distinct='true'>
                    <entity name='mcs_parts'>
                        <order attribute='mcs_name' descending='false' />
                        {filter}
                    </entity>
                </fetch>";
                return XDocument.Parse(fetchXml);
            });

            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);

            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_parts",
                FetchXml = xdoc,
                ProxyUserId = userInfo != null ? userInfo.systemuserid : null
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var partsResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

            #endregion

            var queryResult = new QueryResult<CrmEntity>();
            queryResult.Results = partsResponse.Value.Results;
            return queryResult;
        }
        #endregion

        #region 查询 维修类别(保修自费)
        public async Task<QueryResult<CrmEntity>> QueryRepairitemtypeList()
        {
            var queryResult = new QueryResult<CrmEntity>();
            var result = await _crmService.RetrieveMultiple("mcs_repairitemtype", string.Empty);
            queryResult.Results = result.Results;
            return queryResult;
        }
        #endregion

        #region 查询 维修类型
        public async Task<QueryResult<CrmEntity>> QueryRepairitemtypedetailList()
        {
            var queryResult = new QueryResult<CrmEntity>();
            var result = await _crmService.RetrieveMultiple("mcs_repairitemtypedetail", string.Empty);
            queryResult.Results = result.Results;
            return queryResult;
        }
        #endregion

        #region 查询维修履历列表--用于C端
        public async Task<QueryResult<CrmEntity>> UcQueryList(string phone, int? status, int pageindex, int pagesize)
        {
            #region 获取记录结果集
            var filter = await UcQueryListFilter(phone, status);
            var fetchXdoc = await UcQueryListFetchXml(pageindex, pagesize, filter);
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

        private async Task<XDocument> UcQueryListFetchXml(int pageindex, int pagesize, string filter)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{pagesize}' page='{pageindex}' >
              <entity name='mcs_serviceproxy'>
                  <order attribute='createdon' descending='true' />
                  {filter}
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

        private async Task<string> UcQueryListFilter(string phone, int? status)
        {
            return await Task<string>.Run(() =>
            {
                var filter = string.Empty;
                if (!string.IsNullOrWhiteSpace(phone))
                {
                    filter += @$"
                    <condition attribute='mcs_customerphone' operator='eq' value='{phone}' />";
                }
                if (status != null)
                {
                    filter += @$"
                    <condition attribute='mcs_status' operator='eq' value='{status}' />";
                }
                if (!string.IsNullOrEmpty(filter))
                {
                    filter = "<filter type='and'>   <condition attribute='statecode' operator='eq' value='0' />" + filter;
                    filter = filter + "</filter>";
                }
                return filter;
            });
        }
        #endregion

        #region 获取服务委托书 问诊单 详情--用于C端
        public async Task<ServiceproxyQueryInfoResponse> UcQueryInfo(string guid)
        {
            var serviceproxyQueryInfoResponse = new ServiceproxyQueryInfoResponse();
            var scFetchString = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_serviceproxy'>
                     <all-attributes />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      <condition attribute='mcs_serviceproxyid' operator='eq' value='{guid}' />
                    </filter>
                    <link-entity name='mcs_dealer' from='mcs_dealerid' to='mcs_dealerid' visible='false' link-type='outer' alias='dealer'>
                      <attribute name='mcs_name' />
                      <attribute name='mcs_phone' />
                      <attribute name='mcs_shopaddress' />
                    </link-entity>
                  </entity>
                </fetch>";
            var serviceproxyGuid = Guid.Parse(guid);

            var scFetchXdoc = XDocument.Parse(scFetchString);
            var scFetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceproxy",
                FetchXml = scFetchXdoc
            };
            scFetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var scFetchResponse = await _crmService.Execute(scFetchRequest);
            var scFetchResponseResult = scFetchResponse as CrmRetrieveMultipleFetchResponseMessage;


            var serviceproxyEntity = scFetchResponseResult.Value.Results[0];//await _crmService.Retrieve("mcs_serviceproxy", serviceproxyGuid, scFetchString, null, dicHead);

            #region 环检项
            var vehcheckFilter = $@"
                <link-entity name='mcs_serviceordercheckresult' from='mcs_checkreultid' to='mcs_vehcheckresultid' alias='a'>
                    <attribute name='mcs_serviceordercheckresultid' />
                    <attribute name='mcs_checkreult' />
                    <filter type='and'>
                      <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                    </filter>
                </link-entity>";
            var vehcheckResponse = await QueryVehcheckListByExpression(vehcheckFilter);
            #endregion

            #region 工时
            var workFilter = $@"
                <link-entity name='mcs_serviceorderrepairitem' from='mcs_repairitemid' to='mcs_repairiteminfoid' alias='a'>
                    <all-attributes/>
                    <filter type='and'>
                      <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                    </filter>
                </link-entity>";
            var workResponse = await QueryRepairitemListByFilter(1, 5000, workFilter);
            #endregion

            #region 零件
            var partsFilter = $@"
                <link-entity name='mcs_serviceorderpart' from='mcs_partsid' to='mcs_partsid' alias='a'>
                    <all-attributes/>
                    <filter>
                      <condition attribute='mcs_serviceorderid' operator='eq' value='{serviceproxyGuid}' />
                    </filter>
                </link-entity>";
            var partsResponse = await QueryPartsListByFilter(1, 5000, partsFilter);
            #endregion

            #region 维修履历
            var xdoc = await Task<XDocument>.Run(() =>
            {
                var customerid = serviceproxyEntity.Attributes.Value<string>("_mcs_customerid_value");
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_serviceproxy'>
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                    <condition attribute='mcs_customerid' operator='eq' value='{customerid}' />
                    <condition attribute='mcs_currenttype' operator='eq' value='20' />
                    <condition attribute='mcs_status' operator='eq' value='180' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceproxy",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var serviceproxyResumeResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion


            serviceproxyQueryInfoResponse.Serviceproxy = serviceproxyEntity;
            serviceproxyQueryInfoResponse.ServiceordercheckresultList = vehcheckResponse.Results;
            serviceproxyQueryInfoResponse.ServiceorderrepairitemList = workResponse.Results;
            serviceproxyQueryInfoResponse.ServiceorderpartList = partsResponse.Results;
            serviceproxyQueryInfoResponse.ServiceproxyResumeList = serviceproxyResumeResponse.Value.Results;
            return serviceproxyQueryInfoResponse;

        }

        #endregion
    }
}
