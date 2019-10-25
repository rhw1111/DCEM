using MSLibrary.Xrm;
using System.Threading.Tasks;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System.Xml.Linq;
using MSLibrary;
using System;
using DCEM.ServiceAssistantService.Main.DTOModel;
using System.Collections.Generic;
namespace DCEM.ServiceAssistantService.Main.Application
{
    public class CustomerService : ICustomerService
    {
        #region 初始化 构造函数
        private ICrmService _crmService;
        public CustomerService(ICrmService crmService)
        {
            _crmService = crmService;
        }
        #endregion

        #region 获取客户列表

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
            <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' count='{500}' page='{pageindex}' >
              <entity name='mcs_carserviceadvisor'>
                <order attribute='mcs_name' descending='false' />
                <link-entity name='mcs_vehowner' from='mcs_vehownerid' to='mcs_customerid' visible='false' alias='a'>
                  <attribute name='mcs_vehplate' />
                  <attribute name='mcs_vehtype' />
                  <attribute name='mcs_fullname' />
                  <attribute name='mcs_gender' />
                  <attribute name='mcs_mobilephone' />
                  <attribute name='mcs_name' />
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
                    <attribute name='mcs_carserviceadvisorid' aggregate='countcolumn' alias='mcs_carserviceadvisor'/>
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
            var ListResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion;

            #region 查询总记录数
            //filter = await GetQueryListFilter(1, search);
            //fetchXdoc = await GetGetQueryListFetchXml(2, pageindex, filter);
            //fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            //{
            //    EntityName = "mcs_carserviceadvisor",
            //    FetchXml = fetchXdoc
            //};
            //fetchResponse = await _crmService.Execute(fetchRequest);
            //var ALLTotalCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询保修到期
            //filter = await GetQueryListFilter(2, search);
            //fetchXdoc = await GetGetQueryListFetchXml(2, pageindex, filter);
            //fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            //{
            //    EntityName = "mcs_carserviceadvisor",
            //    FetchXml = fetchXdoc
            //};
            //fetchResponse = await _crmService.Execute(fetchRequest);
            //var WarrantyTotalCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 查询保险到期
            //filter = await GetQueryListFilter(2, search);
            //fetchXdoc = await GetGetQueryListFetchXml(2, pageindex, filter);
            //fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            //{
            //    EntityName = "mcs_carserviceadvisor",
            //    FetchXml = fetchXdoc
            //};
            //fetchResponse = await _crmService.Execute(fetchRequest);
            //var InsuranceTotalCountResults = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            #endregion

            #region 组装返回结果集
            var queryResult = new CustomerQueryListResponse<CrmEntity>();
            queryResult.Results = ListResults.Value.Results;
            queryResult.CurrentPage = pageindex;
            queryResult.ALLTotalCount = 0;
            queryResult.WarrantyTotalCount = 0;
            queryResult.InsuranceTotalCount = 0;
            return queryResult;
            #endregion
        }
        #endregion

        #endregion

        #region 获取单个客户信息
        public async Task<CustomerQueryInfoResponse> QueryInfo(string guid)
        {
            var carserviceadvisorGuid = Guid.Parse(guid);
            var carserviceadvisorEntity = await _crmService.Retrieve("mcs_carserviceadvisor", carserviceadvisorGuid, string.Empty);
            var vehownerGuid = Guid.Parse("");
            var vehownerEntity = await _crmService.Retrieve("mcs_vehowner", carserviceadvisorGuid, string.Empty);

            //mcs_customerfollowuplog
            return new CustomerQueryInfoResponse();

        }
        #endregion
    }
}
