
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
    using System.Collections.Generic;
    using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
    using MSLibrary.Xrm.Message.RetrieveCollectionAttribute;

    public class UserService : IUserService
    {

        private ICrmService _crmService; 
        public IUserRepository _repository;
        private const string entityName = "mcs_user";
        private string dicHeadKey;
        private Dictionary<string, IEnumerable<string>> dicHead;
        public UserService(ICrmService crmService, IUserRepository repository)
        {
            _crmService = crmService;
            _repository = repository;
            dicHeadKey = "Prefer";
            dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add(dicHeadKey, new List<string>() { "odata.include-annotations=\"*\"" });
        }

        /// <summary>
        /// 获取注册协议
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> GetAgreement(string id)
        {
            try
            {
                var validateResult = new ValidateResult<CrmEntity>();
                var crmRequestHelper = new CrmRequestHelper();
                XDocument fetchXdoc = null;
                fetchXdoc = await _repository.GetAgreement(id);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_frontcontent", fetchXdoc);
                if (entities.Results.Count > 0)
                {
                    validateResult.Result = true;
                    validateResult.Data = entities.Results[0];
                }
                else
                {
                    validateResult.Result = false;
                }
                return validateResult;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 账户登陆
        /// </summary>
        /// <param name="dealerListRequest"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> LoginAccount(UserLoginRequest request)
        {
            try
            {
                //密码加密MD5
                request.pwd = EncrypHelper.encrypt(request.pwd);
                var validateResult = new ValidateResult<CrmEntity>();
                var crmRequestHelper = new CrmRequestHelper();
                XDocument fetchXdoc = null;
                fetchXdoc = await _repository.LoginAccount(request);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, entityName, fetchXdoc);
                if (entities.Results.Count > 0)
                {
                    LoginLog(request, entities.Results[0].Id, (int)UserEnum.LoginlogEnum.成功);
                    validateResult.Result = true;
                    validateResult.Data = entities.Results[0];
                }
                else
                {
                    fetchXdoc = await _repository.GetUser(request);
                    var ent = await crmRequestHelper.ExecuteAsync(_crmService, entityName, fetchXdoc);
                    LoginLog(request, ent.Results[0].Id, (int)UserEnum.LoginlogEnum.失败);
                    validateResult.Result = false;
                    validateResult.Description = "账号密码错误！";
                }
                return validateResult;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        /// <summary>
        /// 登陆日志
        /// </summary>
        /// <param name="model"></param>
        /// <param name="id"></param>
        /// <param name="type">1 成功；2失败</param>
        public void LoginLog(UserLoginRequest model, Guid userid, int type)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            Guid logid = Guid.NewGuid();
            var entity = new CrmExecuteEntity("mcs_userloginlog", logid);
            entity.Attributes.Add("mcs_userid", new CrmEntityReference(entityName, userid));
            entity.Attributes.Add("mcs_ip", model.ip);
            entity.Attributes.Add("mcs_loginresult", type);
            entity.Attributes.Add("mcs_logintime", DateTime.Now.ToUniversalTime());
            _crmService.Create(entity, userInfo?.systemuserid);
        }

        /// <summary>
        /// 获取账户
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<CrmEntity>> GetUser(UserLoginRequest request)
        {
            try
            {
                var validateResult = new ValidateResult<CrmEntity>();
                var crmRequestHelper = new CrmRequestHelper();
                XDocument fetchXdoc = null;
                fetchXdoc = await _repository.GetUser(request);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, entityName, fetchXdoc);
                if (entities.Results.Count > 0)
                {
                    validateResult.Result = true;
                    validateResult.Data = entities.Results[0];
                }
                else
                {
                    validateResult.Result = false;
                }
                return validateResult;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// 获取详情
        /// </summary>
        /// <param name="userDetailRequest"></param>
        /// <returns></returns>
        public async Task<CrmEntity> getuserdetail(UserDetailRequest userDetailRequest)
        {
            try
            {
                var validateResult = new ValidateResult<CrmEntity>();
                var crmRequestHelper = new CrmRequestHelper();
                var entitie = await crmRequestHelper.Retrieve(_crmService, entityName, Guid.Parse(userDetailRequest.id));
                return entitie;
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
        public async Task<ValidateResult> AddUser(UserAddRequest model)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            var validateResult = new ValidateResult();


            try
            {
                //C端用户ID
                Guid id = Guid.NewGuid();
                //用户会员实体ID
                Guid memberid = Guid.NewGuid();

                var member = new CrmExecuteEntity("mcs_member", memberid);
                var entity = new CrmExecuteEntity(entityName, id);
                if (!string.IsNullOrEmpty(model.account))
                {
                    member.Attributes.Add("mcs_mobilephonemask", model.account);
                    entity.Attributes.Add("mcs_phone", model.account);
                }
                if (!string.IsNullOrEmpty(model.birthday))
                    entity.Attributes.Add("mcs_birthday", DateTime.Parse(model.birthday).ToUniversalTime());
                if (!string.IsNullOrEmpty(model.company))
                    entity.Attributes.Add("company", model.company);
                if (!string.IsNullOrEmpty(model.description))
                    entity.Attributes.Add("mcs_description", model.description);
                if (model.gender != null)
                    entity.Attributes.Add("mcs_gender", model.gender);
                if (model.marriagestatus != null)
                    entity.Attributes.Add("mcs_marriagestatus", model.marriagestatus);
                if (!string.IsNullOrEmpty(model.mcs_cardid))
                    entity.Attributes.Add("mcs_cardid", model.mcs_cardid);
                if (!string.IsNullOrEmpty(model.mcs_email))
                {
                    entity.Attributes.Add("mcs_email", model.mcs_email);
                    member.Attributes.Add("mcs_email", model.mcs_email);
                }
                if (!string.IsNullOrEmpty(model.name))
                {
                    entity.Attributes.Add("mcs_name", model.name);
                }
                if (!string.IsNullOrEmpty(model.nickname))
                {
                    member.Attributes.Add("mcs_name", model.nickname);
                    member.Attributes.Add("mcs_nickname", model.nickname);
                    entity.Attributes.Add("mcs_nickname", model.nickname);
                }
                if (!string.IsNullOrEmpty(model.profession))
                    entity.Attributes.Add("mcs_profession", model.profession);
                if (!string.IsNullOrEmpty(model.signature))
                    entity.Attributes.Add("mcs_signature", model.signature);
                entity.Attributes.Add("mcs_memberid", new CrmEntityReference("mcs_member", memberid));

                member.Attributes.Add("mcs_userid", id.ToString());
                await _crmService.Create(member, userInfo?.systemuserid);
                //c端用户实体
                await _crmService.Create(entity, userInfo?.systemuserid);

                ///用户密码
                Guid userkeyid = Guid.NewGuid();
                entity = new CrmExecuteEntity("mcs_userkeys", userkeyid);
                model.userkey.pwd = EncrypHelper.encrypt(model.userkey.pwd);
                entity.Attributes.Add("mcs_userid", new CrmEntityReference(entityName, id));
                entity.Attributes.Add("mcs_hashvalue", model.userkey.pwd);
                entity.Attributes.Add("mcs_keytype", model.userkey.keytype);
                entity.Attributes.Add("mcs_status", model.userkey.status);
                entity.Attributes.Add("mcs_certificationtype", model.userkey.certificationtype);
                await _crmService.Create(entity, userInfo?.systemuserid);

                //用户登陆
                Guid loginnamekeyid = Guid.NewGuid();
                entity = new CrmExecuteEntity("mcs_loginname", loginnamekeyid);
                entity.Attributes.Add("mcs_userid", new CrmEntityReference(entityName, id));
                entity.Attributes.Add("mcs_logintype", model.logintype);
                entity.Attributes.Add("mcs_name", model.account);
                entity.Attributes.Add("mcs_status", 1);
                await _crmService.Create(entity, userInfo?.systemuserid);

                ///问题选择
                foreach (var item in model.quests)
                {
                    if (!string.IsNullOrEmpty(item.securityquestion) && !string.IsNullOrEmpty(item.answer))
                    {
                        Guid usersecurityquestionid = Guid.NewGuid();
                        entity = new CrmExecuteEntity("mcs_usersecurityquestion", usersecurityquestionid);
                        entity.Attributes.Add("mcs_userid", new CrmEntityReference(entityName, id));
                        entity.Attributes.Add("mcs_securityquestionid", new CrmEntityReference("mcs_securityquestion", Guid.Parse(item.securityquestion)));
                        entity.Attributes.Add("mcs_answer", item.answer);
                        await _crmService.Create(entity, userInfo?.systemuserid);
                    }

                }
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

        /// <summary>
        /// 修改用户信息
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async Task<ValidateResult> UpdateUser(UserAddRequest model)
        {
            var validateResult = new ValidateResult();

            try
            {
                var entity = new CrmExecuteEntity(entityName, model.userid);
                if (!string.IsNullOrEmpty(model.phone))
                    entity.Attributes.Add("mcs_phone", model.phone);
                if (!string.IsNullOrEmpty(model.birthday))
                    entity.Attributes.Add("mcs_birthday", DateTime.Parse(model.birthday).ToUniversalTime());
                if (!string.IsNullOrEmpty(model.company))
                    entity.Attributes.Add("mcs_company", model.company);
                if (!string.IsNullOrEmpty(model.description))
                    entity.Attributes.Add("mcs_description", model.description);
                if (model.gender != null)
                    entity.Attributes.Add("mcs_gender", model.gender);
                if (model.marriagestatus != null)
                    entity.Attributes.Add("mcs_marriagestatus", model.marriagestatus);
                if (!string.IsNullOrEmpty(model.mcs_cardid))
                    entity.Attributes.Add("mcs_cardid", model.mcs_cardid);
                entity.Attributes.Add("mcs_email", model.mcs_email);
                if (!string.IsNullOrEmpty(model.name))
                    entity.Attributes.Add("mcs_name", model.name);
                if (!string.IsNullOrEmpty(model.nickname))
                    entity.Attributes.Add("mcs_nickname", model.nickname);
                if (!string.IsNullOrEmpty(model.profession))
                    entity.Attributes.Add("mcs_profession", model.profession);
                if (!string.IsNullOrEmpty(model.signature))
                    entity.Attributes.Add("mcs_signature", model.signature);


                if (!string.IsNullOrEmpty(model.province))
                {
                    var province = new CrmEntityReference("mcs_sysarea", Guid.Parse(model.province));
                    entity.Attributes.Add("mcs_province", province);
                }
                if (!string.IsNullOrEmpty(model.city))
                {
                    var city = new CrmEntityReference("mcs_sysarea", Guid.Parse(model.city));
                    entity.Attributes.Add("mcs_city", city);
                }
                if (!string.IsNullOrEmpty(model.area))
                {
                    var area = new CrmEntityReference("mcs_sysarea", Guid.Parse(model.area));
                    entity.Attributes.Add("mcs_area", area);
                }

                //c端用户实体
                await _crmService.Update(entity);


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



        /// <summary>
        /// 密码修改
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async Task<ValidateResult> UpdateUserPwd(UserLoginRequest model)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            var validateResult = new ValidateResult();
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                XDocument fetchXdoc = null;
                fetchXdoc = await _repository.GetUserPwd(model);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_userkeys", fetchXdoc);
                if (entities.Results.Count > 0)
                {
                    var res = entities.Results[0];
                    var entity = new CrmExecuteEntity("mcs_userkeys", res.Id);
                    model.pwd = EncrypHelper.encrypt(model.pwd);
                    if (!string.IsNullOrEmpty(model.pwd))
                        entity.Attributes.Add("mcs_hashvalue", model.pwd);
                    //c端用户实体
                    await _crmService.Update(entity, userInfo?.systemuserid);

                    #region 组装数据返回 
                    validateResult.Result = true;
                    validateResult.Description = "操作成功";
                }
                else
                {

                    validateResult.Result = false;
                    validateResult.Description = "操作失败";
                }

                #endregion

            }
            catch (Exception e)
            {
                validateResult.Result = false;
                validateResult.Description = e.Message;
            }

            return validateResult;

        }





        /// <summary>
        /// 安全问题设置列表获取
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<ValidateResult<List<CrmEntity>>> GetSecurityquestion()
        {
            var validateResult = new ValidateResult<List<CrmEntity>>();
            var crmRequestHelper = new CrmRequestHelper();
            XDocument fetchXdoc = null;
            fetchXdoc = await _repository.GetSecurityquestion();
            var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_securityquestion", fetchXdoc);
            if (entities.Results.Count > 0)
            {
                validateResult.Result = true;
                validateResult.Data = entities.Results;
            }
            else
            {
                validateResult.Result = false;
            }
            return validateResult;
        }
        /// <summary>
        /// 获取用户标签
        /// </summary>
        /// <param name="userDetailRequest"></param>
        /// <returns></returns>
        public async Task<UserTagListResponse> getusertag(UserDetailRequest userDetailRequest)
        {
            try
            {
                var response = new UserTagListResponse();
                var crmRequestHelper = new CrmRequestHelper();
                var fetchRequest = new CrmRetrieveCollectionAttributeRequestMessage()
                {
                    EntityName = "mcs_user",
                    EntityId = Guid.Parse(userDetailRequest.id),
                    AttributeName = "mcs_mcs_user_mcs_usertag",
                    QueryExpression = "$select=mcs_name"
                };
                fetchRequest.Headers.Add("Prefer", dicHead["Prefer"]);
                var crmResponseMessage = await _crmService.Execute(fetchRequest);
                var entities = crmResponseMessage as CrmRetrieveCollectionAttributeResponseMessage; 
                response.tags = entities.Value.Results; 
                return response; 
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<UserScoreListResponse> getuserscore(UserDetailRequest userDetailRequest)
        {
            try
            {
                var response = new UserScoreListResponse();
                var validateResult = new ValidateResult<List<CrmEntity>>();
                var crmRequestHelper = new CrmRequestHelper();
                XDocument fetchXdoc = null;
                fetchXdoc = await _repository.getuserscore(userDetailRequest);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_memberintegraldetail", fetchXdoc);
                response.scores = entities.Results;
                response.ALLTotalCount = entities.Count;
                response.PageSize = userDetailRequest.PageSize;
                response.CurrentPage = userDetailRequest.PageIndex;


                XDocument fetchXdoc2 = await _repository.getuserscorebalance(userDetailRequest);
                var getbalanceentitys = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_member", fetchXdoc2);
                if (getbalanceentitys.Results != null && getbalanceentitys.Results.Count > 0)
                {
                    response.balance = (Int32)getbalanceentitys.Results[0].Attributes
    ["mcs_bonuspoint"];
                }
                else {
                    response.balance = 0;
                }
                return response; 
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
