﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using DCEM.ServiceAssistantService.Main.Application.Repository;
using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;

namespace DCEM.ServiceAssistantService.Main.Application.Services
{
    public class BaseDataService:IBaseDataService
    {
        private ICrmService _crmService;
        private IBaseDataRepository _baseDataRepository;

        public BaseDataService(CrmService crmService, IBaseDataRepository baseDataRepository)
        {
            _crmService = crmService;
            _baseDataRepository = baseDataRepository;
        }

        /// <summary>
        /// 查询故障类别代码
        /// </summary>
        /// <param name="malFunctionTypeRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryMalFunctionType(MalFunctionTypeRequest malFunctionTypeRequest)
        {
            try
            {
                var fetchString = _baseDataRepository.QueryMalFunctionType(malFunctionTypeRequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_malfunctiontype",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = malFunctionTypeRequest.page;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 维修项目基础数据
        /// </summary>
        /// <param name="repairItemInfoRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryRepairItemInfo(RepairItemInfoRequest repairItemInfoRequest)
        {
            try
            {
                var fetchString = _baseDataRepository.QueryRepairItemInfo(repairItemInfoRequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_repairitemtype",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = repairItemInfoRequest.page;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 查询维修配件基础数据
        /// </summary>
        /// <param name="repairItemPartRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryRepairItemPart(RepairItemPartRequest repairItemPartRequest)
        {
            try
            {
                var fetchString = _baseDataRepository.QueryRepairItemPart(repairItemPartRequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_repairitempart",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = repairItemPartRequest.page;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 维修类别基础数据
        /// </summary>
        /// <param name="repairItemTypeRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryRepairItemType(RepairItemTypeRequest repairItemTypeRequest)
        {
            try
            {
                var fetchString = _baseDataRepository.QueryRepairItemType(repairItemTypeRequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_repairitemtype",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = repairItemTypeRequest.page;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 维修类型基础数据
        /// </summary>
        /// <param name="repairItemTypeDetailRequest"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QueryRepairItemTypeDetail(RepairItemTypeDetailRequest repairItemTypeDetailRequest)
        {
            try
            {
                var fetchString = _baseDataRepository.QueryRepairItemTypeDetail(repairItemTypeDetailRequest);

                var fetchXdoc = XDocument.Parse(fetchString);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_repairitemtypedetail",
                    FetchXml = fetchXdoc
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;

                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = repairItemTypeDetailRequest.page;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 查询个人用户信息
        /// </summary>
        /// <param name="systemuserid"></param>
        /// <returns></returns>
        public async Task<CrmEntity> QyerySystemUser(string systemuserid)
        {
            try
            {
                var dicHead = new Dictionary<string, IEnumerable<string>>();
                dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" });

                var fetchString = _baseDataRepository.QyerySystemUser(systemuserid);
                CrmEntity entity = null;
                entity = await _crmService.Retrieve("systemuser", Guid.Parse(systemuserid), fetchString, null, dicHead);
                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        /// <summary>
        /// 分页查询用户列表数据
        /// </summary>
        /// <param name="searchkey"></param>
        /// <param name="pageSize"></param>
        /// <param name="pageNum"></param>
        /// <param name="sort"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> QuerySystemUserByPage(string searchkey = "", string proxyUserId = "", string dealerId = "", int pageSize = 10, int pageNum = 1, string sort = "")
        {
            try
            {
                string filterstr = "";

                //if (!string.IsNullOrEmpty(dealerId))
                //{
                //    filterstr += $"<condition attribute='mcs_dealer' operator='eq' value='{dealerId}' />";
                //}

                if (!string.IsNullOrEmpty(searchkey))
                {
                    filterstr += $"<filter type='or' >";
                    filterstr += $"<condition attribute='fullname' operator='like' value='%{searchkey}%' />";
                    filterstr += $"</filter>";
                }

                var fetchxml = string.Format($@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"" count=""{pageSize}"" page=""{pageNum}"">
                                <entity name = ""systemuser"" >
                                    <attribute name = ""systemuserid"" />
                                    <attribute name = ""firstname"" />
                                    <attribute name = ""lastname"" />
                                    <attribute name = ""mcs_dealer"" />
                                    <attribute name = ""fullname"" />
                                <filter type = ""and"" >
                                  <condition attribute='isdisabled' operator='eq' value='0' />
                                  {filterstr}
                               </filter>
                                </entity>
                            </fetch>");
                XDocument xmlDoc = XDocument.Parse(fetchxml);

                var request = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "systemuser",
                    FetchXml = xmlDoc,
                    ProxyUserId= string.IsNullOrEmpty(proxyUserId)?Guid.Empty:Guid.Parse(proxyUserId)
                };
                var crmResponse = await _crmService.Execute(request);
                CrmRetrieveMultipleFetchResponseMessage response = crmResponse as CrmRetrieveMultipleFetchResponseMessage;

                QueryResult<CrmEntity> queryResult = new QueryResult<CrmEntity>();
                if (response.Value != null)
                {
                    queryResult.Results = response.Value.Results;
                    queryResult.TotalCount = response.Value.Count;
                    queryResult.CurrentPage = pageNum;
                }
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
