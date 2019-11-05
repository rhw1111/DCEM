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
                  <order attribute='mcs_fullname' descending='true' />
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

        #region 获取单个客户信息
        public async Task<CustomerQueryInfoResponse> QueryInfo(string guid)
        {
            var customerQueryInfoResponse = new CustomerQueryInfoResponse();
            var carserviceadvisorGuid = Guid.Parse(guid);
            var carserviceadvisorEntity = await _crmService.Retrieve("mcs_carserviceadvisor", carserviceadvisorGuid, string.Empty, null, dicHead);
            var vehownerGuid = Guid.Parse(carserviceadvisorEntity.Attributes.Value<string>("_mcs_customerid_value"));
            var vehownerEntity = await _crmService.Retrieve("mcs_vehowner", vehownerGuid, string.Empty, null, dicHead);


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


            customerQueryInfoResponse.Carserviceadvisor = carserviceadvisorEntity;
            customerQueryInfoResponse.Vehowner = vehownerEntity;
            customerQueryInfoResponse.CustomerfollowuplogList = customerfollowuplogList.Value.Results;
            customerQueryInfoResponse.TagList = tagList.Value.Results;
            return customerQueryInfoResponse;

        }
        #endregion
    }
}
