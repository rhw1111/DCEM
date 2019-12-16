
namespace DCEM.UserCenterService.Main.Application.Services
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using System;
    using System.Xml.Linq;
    using DCEM.UserCenterService.Main.Common;
    using MSLibrary;
    using DCEM.Main;
    using DCEM.Main.Entities;
    using MSLibrary.Xrm.MessageHandle;

    public class UsermessageService : IUsermessageService
    {

        private ICrmService _crmService;

        public IUsermessageRepository _repository;
        private const string entityName = "mcs_usermessage";
        public UsermessageService(ICrmService crmService, IUsermessageRepository repository)
        {
            _crmService = crmService;
            _repository = repository;
        }

        /// <summary>
        /// 获取验证码
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult> ValCode(UsermessageRequest request)
        {
            try
            {
                var validateResult = new ValidateResult();
                var crmRequestHelper = new CrmRequestHelper();
                XDocument fetchXdoc = null;
                fetchXdoc = await _repository.GetMes(request);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, entityName, fetchXdoc);
                if (entities.Results.Count > 0)
                {
                    var ent = entities.Results[0];
                    var code = ent.Attributes["mcs_name"].ToString();
                    var createdon = DateTime.Parse(ent.Attributes["createdon"].ToString());
                    //180秒过期判断
                    if (createdon.AddSeconds(180) >= new DateTime())
                    {
                        //判断当前验证码是否错误   
                        if (code != request.valcode)
                        {
                            validateResult.Result = false;
                            validateResult.Description = "短信验证码错误！";
                        }
                        else
                        {
                            validateResult.Result = true;
                        }
                    }
                    else
                    {
                        validateResult.Result = false;
                        validateResult.Description = "短信验证码过期！";
                    }
                }
                else
                {
                    validateResult.Result = false;
                    validateResult.Description = "短信验证码不存在！";
                }
                return validateResult;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }




        /// <summary>
        /// 保存
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async Task<ValidateResult> Add(UsermessageRequest model)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            var validateResult = new ValidateResult();


            try
            {
                Guid id = Guid.NewGuid();
                var entity = new CrmExecuteEntity(entityName, id);
                if (!string.IsNullOrEmpty(model.phone))
                    entity.Attributes.Add("mcs_phone", model.phone);
                if (!string.IsNullOrEmpty(model.valcode))
                    entity.Attributes.Add("mcs_name", model.valcode);
                entity.Attributes.Add("mcs_type", model.type);
                await _crmService.Create(entity, userInfo?.systemuserid);


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
