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
namespace DCEM.ServiceAssistantService.Main.Application
{
    public class ServiceproxyService : IServiceproxyService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        public ServiceproxyService(ICrmService crmService)
        {
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
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
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{500}' page='{pageindex}' >
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

        #region 获取详情
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

        #region 添加服务委托书 问诊单
        public async Task<ValidateResult<CrmParameter>> AddOrUpdate(ServiceproxyAddOrUpdateRequest request)
        {
            var validateResult = new ValidateResult<CrmParameter>();
            var reusetCrmParameter = new CrmParameter();

            if (request.actioncode == 1)
            {
                //加入服务委托书
                var serviceproxyGuid = Guid.NewGuid();
                var serviceproxyEntity = new CrmExecuteEntity("mcs_serviceproxy", serviceproxyGuid);
                serviceproxyEntity.Attributes.Add("mcs_customerid", new CrmEntityReference("mcs_vehowner", Guid.Parse(request.serviceproxy.customerid)));
                serviceproxyEntity.Attributes.Add("mcs_customername", request.serviceproxy.customername);           //车主姓名
                serviceproxyEntity.Attributes.Add("mcs_carplate", request.serviceproxy.carplate);                   //车牌号
                serviceproxyEntity.Attributes.Add("mcs_customerphone", request.serviceproxy.customerphone);         //车主手机
                serviceproxyEntity.Attributes.Add("mcs_shuttlename", request.serviceproxy.shuttlename);             //送修人
                serviceproxyEntity.Attributes.Add("mcs_shuttlephone", request.serviceproxy.shuttlephone);           //送修人手机
                serviceproxyEntity.Attributes.Add("mcs_inpower", request.serviceproxy.inpower);                     //进店电量
                serviceproxyEntity.Attributes.Add("mcs_oilquantity", request.serviceproxy.oilquantity);             //进店油量
                serviceproxyEntity.Attributes.Add("mcs_mileage", request.serviceproxy.mileage);                     //进店里程数
                if (request.serviceproxy.arrivalon != null)
                    serviceproxyEntity.Attributes.Add("mcs_arrivalon", Convert.ToDateTime(request.serviceproxy.arrivalon).ToUniversalTime());                 //到店时间
                serviceproxyEntity.Attributes.Add("mcs_customercomment", request.serviceproxy.customercomment);     //客服描述
                serviceproxyEntity.Attributes.Add("mcs_currenttype", 10);
                serviceproxyEntity.Attributes.Add("mcs_ifchange", false);
                serviceproxyEntity.Attributes.Add("mcs_isdelete", false);
                var reuset = await _crmService.Create(serviceproxyEntity);

                //加入环检项目
                foreach (var serviceordercheckresult in request.serviceordercheckresultArray)
                {
                    var serviceordercheckresultGuid = Guid.NewGuid();
                    var serviceordercheckresultEntity = new CrmExecuteEntity("mcs_serviceordercheckresult", serviceordercheckresultGuid);
                    serviceordercheckresultEntity.Attributes.Add("mcs_checkreultid", new CrmEntityReference("mcs_vehcheckresult", Guid.Parse(serviceordercheckresult.checkreultid)));
                    serviceordercheckresultEntity.Attributes.Add("mcs_name", serviceordercheckresult.name);
                    serviceordercheckresultEntity.Attributes.Add("mcs_checkreult", serviceordercheckresult.checkreult);
                    serviceordercheckresultEntity.Attributes.Add("mcs_serviceorderid", new CrmEntityReference("mcs_serviceproxy", serviceproxyGuid));
                    reuset = await _crmService.Create(serviceordercheckresultEntity);
                }

                reusetCrmParameter.Type = "Guid";
                reusetCrmParameter.Value = reuset;

                validateResult.Data = reusetCrmParameter;
                validateResult.Result = true;
                validateResult.Description = "操作成功";
            }

            return validateResult;
        }
        #endregion

        #region 查询所有环检项 配置信息
        public async Task<QueryResult<CrmEntity>> QueryVehcheckresultList()
        {
            var queryResult = new QueryResult<CrmEntity>();
            var result = await _crmService.RetrieveMultiple("mcs_vehcheckresult", string.Empty, null, dicHead);
            queryResult.Results = result.Results;
            return queryResult;
        }
        #endregion

    }
}
