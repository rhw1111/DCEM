using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.Common;
using DCEM.SalesAssistant.Main.DTOModel;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class VehnetworkService : IVehnetworkService
    {
        private const string partnertype = "3";
        private ICrmService _crmService;
        private IVehnetworkRepository _Repository;
        public VehnetworkService(ICrmService crmService, IVehnetworkRepository repository)
        {
            _crmService = crmService;
            _Repository = repository;
        }
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> getlist(VehnetworkListRequest request)
        {
            try
            {
                var fetchXdoc = _Repository.GetListFetchXml(request);

                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_vehnetwork",
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
        public async Task<VehnetworkDetailRepository> getdetail(Guid id)
        {
            try
            {
                VehnetworkDetailRepository repository = new VehnetworkDetailRepository();
                #region 开票明细
                var fetchXdoc = _Repository.GetDetaillFetchXml(id);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_vehnetwork",
                    FetchXml = fetchXdoc.Result
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                repository.Detail = detailResult.Value.Results[0];
                #endregion
                #region 身份附件
                fetchXdoc = _Repository.GetAttachmentDetaillFetchXml(id, partnertype, "3");
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_attachment",
                    FetchXml = fetchXdoc.Result
                };
                fetchResponse = await _crmService.Execute(fetchRequest);
                detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                repository.CardNoDetail = detailResult.Value.Results;
                #endregion
                #region 发票附件
                fetchXdoc = _Repository.GetAttachmentDetaillFetchXml(id, partnertype, "4");
                fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_attachment",
                    FetchXml = fetchXdoc.Result
                };
                fetchResponse = await _crmService.Execute(fetchRequest);
                detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                repository.InvoiceDetail = detailResult.Value.Results;
                #endregion 

                return repository;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<ValidateResult<string>> PostStatus(Guid id)
        {
            var validateResult = new ValidateResult<string>();

            #region 身份附件验证
            var fetchXdoc = _Repository.GetAttachmentDetaillFetchXml(id, partnertype, "3");
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_attachment",
                FetchXml = fetchXdoc.Result
            };
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            if (detailResult.Value.Results.Count == 0)
            {
                validateResult.Result = false;
                validateResult.Description = "请上传身份证附件！";
                return validateResult;
            }
            #endregion
            #region 发票附件验证
            fetchXdoc = _Repository.GetAttachmentDetaillFetchXml(id, partnertype, "4");
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_attachment",
                FetchXml = fetchXdoc.Result
            };
            fetchResponse = await _crmService.Execute(fetchRequest);
            detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            if (detailResult.Value.Results.Count == 0)
            {
                validateResult.Result = false;
                validateResult.Description = "请上传发票附件！";
                return validateResult;
            }
            #endregion

            #region 开票明细
            fetchXdoc = _Repository.GetDetaillFetchXml(id);
            fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_vehnetwork",
                FetchXml = fetchXdoc.Result
            };
            fetchResponse = await _crmService.Execute(fetchRequest);
            detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            var detail = detailResult.Value.Results[0];
            /// <summary>
            ///  只针对整车订单（企业客户订单不处理）  是否已经厅店门店出库  没出库不允许进行交车完成
            /// </summary>
            if (detail.Attributes["postatus"] != null)
            {
                //销售出库
                if (detail.Attributes["postatus"].ToString() != "12")
                {

                    validateResult.Result = false;
                    validateResult.Description = "请先在门店将车辆出库，再进行交车完成操作！";
                    return validateResult;
                }
            }
            #endregion
            //修改开票记录状态 交车完成
            var entity = new CrmExecuteEntity("mcs_vehnetwork", id);
            entity.Attributes.Add("mcs_tservicestatus", 5);
            entity.Attributes.Add("mcs_deliveryon", DateTime.Now.ToUniversalTime());
            await _crmService.Update(entity, null);
            //修改交车单状态
            if (detail.Attributes["_mcs_vehdelivery_value"] != null)
            {
                var vehdelivery = new CrmExecuteEntity("mcs_vehdelivery", Guid.Parse(detail.Attributes["_mcs_vehdelivery_value"].ToString()));
                vehdelivery.Attributes.Add("mcs_deliverystatus", 7);
                vehdelivery.Attributes.Add("mcs_deliveryon", DateTime.Now.ToUniversalTime());
                await _crmService.Update(vehdelivery, null);
            }
            //修改车辆档案车辆属性
            //if (detail.Attributes["mcs_carproperty"] != null)
            //{
            //    var vehowner = new CrmExecuteEntity("mcs_vehowner", Guid.Parse(detail.Attributes["mcs_vehownerid"].ToString()));
            //    vehowner.Attributes.Add("mcs_carproperty", int.Parse(detail.Attributes["mcs_carproperty"].ToString()));
            //    await _crmService.Update(vehowner, null);
            //}
            validateResult.Result = true;
            return validateResult;
        }
        public async Task<ValidateResult<string>> UpdateCard(UpdateCardRequest request)
        {
            var validateResult = new ValidateResult<string>();

            

            #region 开票明细
            var fetchXdoc = _Repository.GetDetaillFetchXml(request.id);
            var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
            {
                EntityName = "mcs_vehnetwork",
                FetchXml = fetchXdoc.Result
            };
            var fetchResponse = await _crmService.Execute(fetchRequest);
            var detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
            var detail = detailResult.Value.Results[0];
            if (detail != null) {
                //修改开票信息的身份证、发票信息
                var entity = new CrmExecuteEntity("mcs_vehnetwork", request.id);
 
                if (!string.IsNullOrEmpty(request.name)) {
                    entity.Attributes.Add("mcs_carder", request.name);
                    entity.Attributes.Add("mcs_idcode", request.idcard);
                    entity.Attributes.Add("mcs_address", request.idaddress);
                    if (request.sex == "男")
                        entity.Attributes.Add("mcs_gender", 1);
                    else
                        entity.Attributes.Add("mcs_gender", 2);
                    entity.Attributes.Add("mcs_idtype", 1);
                    entity.Attributes.Add("mcs_invoiceidtype", 1);
                    entity.Attributes.Add("mcs_invoiceidcode", request.idcard);
                }
                if (!string.IsNullOrEmpty(request.fpname)) {
                    entity.Attributes.Add("mcs_invoicename", request.fpname);
                    entity.Attributes.Add("mcs_code", request.fpnumber);
                    string time = request.time.Replace("年", "-").Replace("月", "-").Replace("日", "");
                    DateTime dates = DateTime.Parse(time);
                    //entity.Attributes.Add("mcs_invoiceon", dates);

                    entity.Attributes.Add("mcs_invoiceon", dates.ToUniversalTime());
                }



                await _crmService.Update(entity, null);

            }
            #endregion
            

            validateResult.Result = true;
            validateResult.Description = "修改成功";
            return validateResult;
        }

        public async Task<ValidateResult<string>> Voice(VoiceRequest request)
        {
            var validateResult = new ValidateResult<string>();

            if (!string.IsNullOrEmpty(request.phone) && !string.IsNullOrEmpty(request.content)) {

                var fetchXdoc = _Repository.GetAccountFetchXml(request.phone);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "account",
                    FetchXml = fetchXdoc.Result
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                var entity = detailResult.Value.Results[0];
                if (entity != null) {
                    //插入logcall数据
                    var logcall = new CrmExecuteEntity("mcs_logcall", Guid.NewGuid());
                    logcall.Attributes.Add("mcs_fullname", "爱车APP语音转换");
                    logcall.Attributes.Add("mcs_mobilephone", request.phone);
                    logcall.Attributes.Add("mcs_content", request.content);
                    logcall.Attributes.Add("mcs_results", request.content);
                    logcall.Attributes.Add("mcs_visittime", DateTime.Now.ToUniversalTime());

                    await _crmService.Create(logcall, null);
                }

            }
            validateResult.Result = true;
            validateResult.Description = "操作成功";
            return validateResult;
        }

    }
}
