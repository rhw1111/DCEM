using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using DCEM.SalesAssistant.Main.ViewModel.Response;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Threading.Tasks;
namespace DCEM.SalesAssistant.Main.Application.Services
{
    public class ActivityService : IActivityService
    {
        private const string partnertype = "3";
        private ICrmService _crmService;
        private IActivityRepository _Repository;
        public ActivityService(ICrmService crmService, IActivityRepository repository)
        {
            _crmService = crmService;
            _Repository = repository;
        }
        /// <summary>
        /// 列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<QueryResult<CrmEntity>> getlist(ActivitysRequest request)
        {
            try
            {
                var fetchXdoc = _Repository.GetListFetchXml(request);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_activity",
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
        public async Task<CrmEntity> getdetail(Guid id)
        {

            try
            {
                VehnetworkDetailRepository repository = new VehnetworkDetailRepository();
                var fetchXdoc = _Repository.GetDetaillFetchXml(id);
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = "mcs_activity",
                    FetchXml = fetchXdoc.Result
                };
                var fetchResponse = await _crmService.Execute(fetchRequest);
                var detailResult = fetchResponse as CrmRetrieveMultipleFetchResponseMessage;
                return detailResult.Value.Results[0];
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        /// <summary>
        /// 修改新增
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async Task<ValidateResult> AddOrUpdate(ActivityEditRequest model)
        {

            var validateResult = new ValidateResult();
            try
            {
                var entity = new CrmExecuteEntity("mcs_activity", model.id);
                if (model.mcs_activitystatus != null)
                    entity.Attributes.Add("mcs_activitystatus", model.mcs_activitystatus.Value);
                if (model.mcs_endtime != null)
                    entity.Attributes.Add("mcs_endtime", model.mcs_endtime.Value.ToUniversalTime());
                if (model.mcs_excutestatus != null)
                    entity.Attributes.Add("mcs_excutestatus", model.mcs_excutestatus.Value);
                if (model.mcs_iffollowed != null)
                    entity.Attributes.Add("mcs_iffollowed", model.mcs_iffollowed.Value);
                if (model.mcs_ifsystemcreate != null)
                    entity.Attributes.Add("mcs_ifsystemcreate", model.mcs_ifsystemcreate.Value);
                if (model.mcs_importantlevel != null)
                    entity.Attributes.Add("mcs_importantlevel", model.mcs_importantlevel.Value);
                if (model.mcs_isaddedtodes != null)
                    entity.Attributes.Add("mcs_isaddedtodes", model.mcs_isaddedtodes.Value);
                if (!string.IsNullOrEmpty(model.mcs_name))
                    entity.Attributes.Add("mcs_name", model.mcs_name);
                if (model.mcs_nextfollowupcontent != null)
                    entity.Attributes.Add("mcs_nextfollowupcontent", model.mcs_nextfollowupcontent);
                if (model.mcs_nextfollowuptime != null)
                    entity.Attributes.Add("mcs_nextfollowuptime", model.mcs_nextfollowuptime.Value.ToUniversalTime());
                if (model.mcs_thisfollowupcontent != null)
                    entity.Attributes.Add("mcs_thisfollowupcontent", model.mcs_thisfollowupcontent);
                if (model.mcs_accountid !=Guid.Empty)
                    entity.Attributes.Add("mcs_accountid",new  CrmEntityReference("mcs_account", model.mcs_accountid.Value));
                if (model.mcs_onlyleadid != Guid.Empty)
                    entity.Attributes.Add("mcs_onlyleadid", new CrmEntityReference("mcs_onlylead", model.mcs_onlyleadid.Value));
                if (model.mcs_contactid != Guid.Empty)
                    entity.Attributes.Add("mcs_contactid", new CrmEntityReference("mcs_contact", model.mcs_contactid.Value));
                //判断修改还是删除
                if (Guid.Empty == model.id)
                {
                    entity.Id = Guid.NewGuid();
                    await _crmService.Create(entity, null);
                }
                else
                    await _crmService.Update(entity, null);


                #region 组装数据返回 
                validateResult.Result = true;
                validateResult.Description = "操作成功";
                #endregion
            }
            catch (Exception e)
            {
                validateResult.Result = false;
                validateResult.Description = e.Message;
            }

            return validateResult;

        }


    }
}
