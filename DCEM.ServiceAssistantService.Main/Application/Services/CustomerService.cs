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
namespace DCEM.ServiceAssistantService.Main.Application
{
    public class CustomerService : ICustomerService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        private int pageCount;
        public CustomerService(ICrmService crmService)
        {
            _crmService = crmService;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
            pageCount = 10;
        }
        #endregion

        #region 获取 客户列表

        #region filter组装
        public async Task<string> GetQueryListFilter(int type, string search)
        {
            return await Task<string>.Run(() =>
            {
                var filter = string.Empty;
                if (type == 2)
                {
                    filter += $"<condition attribute='mcs_warrantyendtime' operator='le' value='{DateTime.Now.ToString("yyyy-MM-dd HH:mm")}' />";
                }
                else if (type == 3)
                {
                    filter += $"<condition attribute='mcs_insuranceexpirationdate' operator='le' value='{DateTime.Now.ToString("yyyy-MM-dd HH:mm")}' />";
                }

                if (!string.IsNullOrEmpty(search))
                {
                    filter += $"<filter type='or'>";
                    filter += $"<condition attribute='mcs_vehplate' operator='like' value='%{search}%' />";
                    filter += $"<condition attribute='mcs_mobilephone' operator='like' value='%{search}%' />";
                    filter += $"<condition attribute='mcs_fullname' operator='like' value='%{search}%' />";
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
        public async Task<XDocument> GetGetQueryListFetchXml(int type, int pageindex, string filter)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                if (type == 1)  //查记录
                {

                    fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' count='{pageCount}' page='{pageindex}' >
              <entity name='mcs_carserviceadvisor'>
                <attribute name='mcs_customerid' />
                <link-entity name='mcs_vehowner' from='mcs_vehownerid' to='mcs_customerid'  visible='false'  alias='a'>
                  <attribute name='mcs_vehtype' />
                  <attribute name='mcs_fullname' />
                  <attribute name='mcs_gender' />
                  <attribute name='mcs_mobilephone' />
                  <attribute name='mcs_vehplate' />
                  <order attribute='createdon' descending='true' />
                  {filter}
                </link-entity>
              </entity>
            </fetch>";
                }
                else   //查数据行数
                {
                    fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'  aggregate='true'>
                <entity name='mcs_carserviceadvisor'>
                    <attribute name='mcs_carserviceadvisorid' aggregate='countcolumn' alias='count'/>
                    <link-entity name='mcs_vehowner' from='mcs_vehownerid' to='mcs_customerid'  visible='false'  alias='a'>
                    {filter}
                    </link-entity>
                </entity>
            </fetch>";
                }

                return XDocument.Parse(fetchXml);
            });
        }
        #endregion

        #region 查询记录集
        public async Task<CustomerQueryListResponse<CrmEntity>> QueryList(int type, int pageindex, string search)
        {

            #region 获取记录结果集
            var filter = await GetQueryListFilter(type, search);
            var fetchXdoc = await GetGetQueryListFetchXml(1, pageindex, filter);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_carserviceadvisor",
                FetchXml = fetchXdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var resultsList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion;

            #region 查询总记录数
            filter = await GetQueryListFilter(1, search);
            fetchXdoc = await GetGetQueryListFetchXml(2, pageindex, filter);
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_carserviceadvisor",
                FetchXml = fetchXdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var allTotalCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询保修到期
            filter = await GetQueryListFilter(2, search);
            fetchXdoc = await GetGetQueryListFetchXml(2, pageindex, filter);
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_carserviceadvisor",
                FetchXml = fetchXdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);

            var wrrantyTotalCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询保险到期
            filter = await GetQueryListFilter(3, search);
            fetchXdoc = await GetGetQueryListFetchXml(3, pageindex, filter);
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_carserviceadvisor",
                FetchXml = fetchXdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);

            var insuranceTotalCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 组装返回结果集
            var queryResult = new CustomerQueryListResponse<CrmEntity>();
            queryResult.Results = resultsList.Value.Results;
            queryResult.CurrentPage = pageindex;
            queryResult.ALLTotalCount = (int)allTotalCountResults.Value.Results[0].Attributes["count"];
            queryResult.WarrantyTotalCount = (int)wrrantyTotalCountResults.Value.Results[0].Attributes["count"]; ;
            queryResult.InsuranceTotalCount = (int)insuranceTotalCountResults.Value.Results[0].Attributes["count"]; ;
            return queryResult;
            #endregion
        }
        #endregion

        #endregion

        #region 获取 单个客户信息
        public async Task<CustomerQueryInfoResponse> QueryInfo(string guid)
        {
            var customerQueryInfoResponse = new CustomerQueryInfoResponse();
            var carserviceadvisorGuid = Guid.Parse(guid);
            var carserviceadvisorEntity = await _crmService.Retrieve("mcs_carserviceadvisor", carserviceadvisorGuid, string.Empty, null, dicHead);
            var vehownerGuid = Guid.Parse(carserviceadvisorEntity.Attributes.Value<string>("_mcs_customerid_value"));
            var vehownerEntity = await _crmService.Retrieve("mcs_vehowner", vehownerGuid, string.Empty, null, dicHead);

            #region 跟进记录
            var xdoc = await Task<XDocument>.Run(() =>
             {
                 var fetchXml = string.Empty;
                 fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_customerfollowuplog'>
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                <condition attribute='mcs_carserviceadvisorid' operator='eq' value='{carserviceadvisorGuid}' />
                </filter>
              </entity>
            </fetch>";
                 return XDocument.Parse(fetchXml);
             });
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_customerfollowuplog",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var customerfollowuplogList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 标签
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_tag'>
                <order attribute='mcs_name' descending='false' />
                <link-entity name='mcs_mcs_vehowner_mcs_tag' from='mcs_tagid' to='mcs_tagid' visible='false' intersect='true'>
                    <filter type='and'>
                        <condition attribute='mcs_vehownerid' operator='eq' value='{vehownerGuid}' />
                    </filter>
                </link-entity>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });

            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_tag",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var tagList = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 维修履历
            xdoc = await Task<XDocument>.Run(() =>
            {
                var fetchXml = string.Empty;
                fetchXml = $@"
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' >
              <entity name='mcs_serviceproxy'>
                <order attribute='mcs_name' descending='false' />
                <filter type='and'>
                    <condition attribute='mcs_customerid' operator='eq' value='{vehownerGuid}' />
                    <condition attribute='mcs_currenttype' operator='eq' value='20' />
                    <condition attribute='mcs_status' operator='eq' value='180' />
                </filter>
              </entity>
            </fetch>";
                return XDocument.Parse(fetchXml);
            });
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_serviceproxy",
                FetchXml = xdoc
            };
            fetchRequest.Headers.Add(dicHeadKey, dicHead[dicHeadKey]);
            fetchResponse = await _crmService.Execute(fetchRequest);
            var serviceproxyResumeResponse = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            customerQueryInfoResponse.Carserviceadvisor = carserviceadvisorEntity;
            customerQueryInfoResponse.Vehowner = vehownerEntity;
            customerQueryInfoResponse.CustomerfollowuplogList = customerfollowuplogList.Value.Results;
            customerQueryInfoResponse.TagList = tagList.Value.Results;
            customerQueryInfoResponse.ServiceproxyResumeList = serviceproxyResumeResponse.Value.Results;
            return customerQueryInfoResponse;

        }
        #endregion

        #region 添加 编辑 客户信息
        public async Task<ValidateResult<CrmEntity>> AddOrUpdate(JObject jo)
        {
            var actionCode = jo.Value<int>("actionCode");
            var vehownerJo = jo.Value<JObject>("Vehowner");
            var carserviceadvisorJo = jo.Value<JObject>("Carserviceadvisor");

            var vehownerGuid = Guid.NewGuid();
            var carserviceadvisorGuid = Guid.NewGuid();

            var vehownerEntity = new CrmExecuteEntity("mcs_vehowner", vehownerGuid);
            var carserviceadvisorEntity = new CrmExecuteEntity("mcs_carserviceadvisor", carserviceadvisorGuid);
            var validateResult = new ValidateResult<CrmEntity>();

            if (actionCode == 2)
            {
                vehownerGuid = Guid.Parse(vehownerJo.Value<string>("mcs_vehownerid"));
                vehownerEntity.Id = vehownerGuid;
            }
            if (vehownerJo.ContainsKey("mcs_fullname"))
                vehownerEntity.Attributes.Add("mcs_fullname", vehownerJo.Value<string>("mcs_fullname"));
            if (vehownerJo.ContainsKey("mcs_vehplate"))
                vehownerEntity.Attributes.Add("mcs_vehplate", vehownerJo.Value<string>("mcs_vehplate"));
            if (vehownerJo.ContainsKey("mcs_mobilephone"))
                vehownerEntity.Attributes.Add("mcs_mobilephone", vehownerJo.Value<string>("mcs_mobilephone"));
            if (vehownerJo.ContainsKey("mcs_name"))
                vehownerEntity.Attributes.Add("mcs_name", vehownerJo.Value<string>("mcs_name"));
            if (vehownerJo.ContainsKey("mcs_enginennumber"))
                vehownerEntity.Attributes.Add("mcs_enginennumber", vehownerJo.Value<string>("mcs_enginennumber"));
            if (vehownerJo.ContainsKey("mcs_prodtime"))
                vehownerEntity.Attributes.Add("mcs_prodtime", vehownerJo.Value<DateTime?>("mcs_prodtime"));
            if (vehownerJo.ContainsKey("mcs_salesdate"))
                vehownerEntity.Attributes.Add("mcs_salesdate", vehownerJo.Value<DateTime?>("mcs_salesdate"));
            if (vehownerJo.ContainsKey("_mcs_vehtype_value"))
                vehownerEntity.Attributes.Add("mcs_vehtype", new CrmEntityReference("mcs_carmodel", Guid.Parse(vehownerJo.Value<string>("_mcs_vehtype_value"))));
            if (vehownerJo.ContainsKey("mcs_shuttlename"))
                vehownerEntity.Attributes.Add("mcs_shuttlename", vehownerJo.Value<string>("mcs_shuttlename"));
            if (vehownerJo.ContainsKey("mcs_shuttlephone"))
                vehownerEntity.Attributes.Add("mcs_shuttlephone", vehownerJo.Value<string>("mcs_shuttlephone"));


            if (actionCode == 1)
            {
                var dealeridGuid = Guid.Parse(jo.Value<string>("dealerid"));
                vehownerEntity.Attributes.Add("mcs_dealer", new CrmEntityReference("mcs_dealer", dealeridGuid));
                await _crmService.Create(vehownerEntity, null);

                carserviceadvisorEntity.Attributes.Add("mcs_customerid", new CrmEntityReference("mcs_vehowner", vehownerGuid));
                carserviceadvisorEntity.Attributes.Add("mcs_dealerid", new CrmEntityReference("mcs_dealer", dealeridGuid));
                await _crmService.Create(carserviceadvisorEntity, null);
            }
            else
            {
                await _crmService.Update(vehownerEntity, null);
            }

            #region 组装数据返回
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            #endregion

            return validateResult;
        }
        #endregion

    }
}
