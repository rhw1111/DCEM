using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Common;
using DCEM.SalesAssistant.Main.DTOModel;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class VehlisenseService : IVehlisenseService
    {
        private const string partnertype = "2";
        private ICrmService _crmService;
        private IVehlisenseRepository _Repository;
        public VehlisenseService(ICrmService crmService, IVehlisenseRepository repository)
        {
            _crmService = crmService;
            _Repository = repository;
        }
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> getlist(VehlisenseListRequest request)
        {
            try
            {
                var fetchXdoc = _Repository.GetListFetchXml(request);

                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_vehlisense",
                    FetchXml = fetchXdoc.Result
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var fetchResponseResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                var queryResult = new QueryResult<CrmEntity>();
                queryResult.Results = fetchResponseResult.Value.Results;
                queryResult.CurrentPage = request.PageSize;
                queryResult.TotalCount = 0;
                return queryResult;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 明细获取
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<VehlisenseDetailRepository> getdetail(Guid id)
        {
            try
            {
                VehlisenseDetailRepository repository = new VehlisenseDetailRepository();
                #region 上牌明细
                var fetchXdoc = _Repository.GetDetaillFetchXml(id);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_vehlisense",
                    FetchXml = fetchXdoc.Result
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                repository.Detail = detailResult.Value.Results[0];
                #endregion
                #region  附件
                fetchXdoc = _Repository.GetAttachmentDetaillFetchXml(id, partnertype, "2");
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_attachment",
                    FetchXml = fetchXdoc.Result
                };
                fetchResponse = await _crmService.Execute(fetchRequest);
                detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                repository.AttmDetail = detailResult.Value.Results;
                #endregion 

                return repository;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<ValidateResult<CrmEntity>> AddOrUpdate(JObject jo)
        {
            var actionCode = jo.Value<int>("actionCode");
            var vehownerJo = jo.Value<JObject>("Vehowner");
 
            var vehownerGuid = Guid.NewGuid();

            var vehownerEntity = new CrmExecuteEntity("mcs_vehlisense", vehownerGuid);

            var validateResult = new ValidateResult<CrmEntity>();

            if (actionCode == 2)
            {
                vehownerGuid = Guid.Parse(vehownerJo.Value<string>("mcs_vehlisenseid"));
                vehownerEntity.Id = vehownerGuid;
            }
            if (vehownerJo.ContainsKey("mcs_name"))
                vehownerEntity.Attributes.Add("mcs_name", vehownerJo.Value<string>("mcs_name"));
            if (vehownerJo.ContainsKey("mcs_idcard"))
                vehownerEntity.Attributes.Add("mcs_idcard", vehownerJo.Value<string>("mcs_idcard"));
            if (vehownerJo.ContainsKey("mcs_lisensedate"))
                vehownerEntity.Attributes.Add("mcs_lisensedate", vehownerJo.Value<DateTime?>("mcs_lisensedate"));
 

            if (vehownerJo.ContainsKey("mcs_address"))
                vehownerEntity.Attributes.Add("mcs_address", vehownerJo.Value<string>("mcs_address"));
            if (vehownerJo.ContainsKey("mcs_fee"))
                vehownerEntity.Attributes.Add("mcs_fee", vehownerJo.Value<decimal>("mcs_fee"));


            if (actionCode == 1)
            {
                //var dealeridGuid = Guid.Parse(jo.Value<string>("dealerid"));
                //vehownerEntity.Attributes.Add("mcs_dealer", new CrmEntityReference("mcs_dealer", dealeridGuid));
                //await _crmService.Create(vehownerEntity, null);
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

    }
}
