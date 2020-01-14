//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.Services
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using MSLibrary;
    using System;
    using System.Xml.Linq;
    using DCEM.UserCenterService.Main.Common;
    using System.Collections.Generic;

    public class QuestionService : IQuestionService
    {

        private ICrmService _crmService;

        public IQuestionRepository _questionRepository;

        public QuestionService(ICrmService crmService, IQuestionRepository questionRepository)
        {
            _crmService = crmService;
            _questionRepository = questionRepository;
        }



        /// <summary>
        /// 问卷调查获取
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<ValidateResult<QuestionSettingResponse>> QueryQiestion(string id)
        {
            try
            {
                QuestionSettingResponse model = new QuestionSettingResponse();
                var validateResult = new ValidateResult<QuestionSettingResponse>();
                var crmRequestHelper = new CrmRequestHelper();
                XDocument fetchXdoc = null;
                fetchXdoc = _questionRepository.QueryQiestion(id);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_questionnairesetting", fetchXdoc);
                if (entities.Results.Count > 0)
                {
                    model.Model = entities.Results[0];
                    //获取问题
                    List<CrmEntity> detaillist = new List<CrmEntity>();
                    fetchXdoc = _questionRepository.QueryDetailList(model.Model.Id);
                    entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_questions", fetchXdoc);
                    if (entities.Results.Count > 0)
                    {
                        detaillist = entities.Results;
                    }

                    //获取问题项
                    List<CrmEntity> answerslist = new List<CrmEntity>();
                    fetchXdoc = _questionRepository.QueryAnswersList(model.Model.Id);
                    entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_answers", fetchXdoc);
                    if (entities.Results.Count > 0)
                    {
                        answerslist = entities.Results;
                    }
                    foreach (var item in detaillist)
                    {
                        QuestionsResponse response = new QuestionsResponse();
                        response.Item = item;
                        foreach (var answers in answerslist)
                        {
                            //判断问题项是否属于当前问题
                            if (answers.Attributes["questionsid"].ToString() == item.Id.ToString())
                            {
                                response.Answers.Add(answers);
                            }
                        }
                        model.Questions.Add(response);
                    }
                    validateResult.Result = true;
                    validateResult.Data = model;
                }
                else
                {
                    validateResult.Result = false;
                    validateResult.Description = "当前问卷调查不存在！";
                }
                return validateResult;

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        /// <summary>
        /// 添加
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async Task<ValidateResult> AddAnswercontent(QuestionAddRequest model)
        {
            var validateResult = new ValidateResult();
            try
            {
                var crmRequestHelper = new CrmRequestHelper();
                XDocument fetchXdoc = null;
                fetchXdoc = _questionRepository.QueryQiestion(model.mcs_questionnairesetting);
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_questionnairesetting", fetchXdoc);
                if (entities.Results.Count > 0)
                {
                    fetchXdoc = _questionRepository.QueryUser(model.mcs_answername);
                    var userentities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_user", fetchXdoc);
                    if (userentities.Results.Count > 0)
                    {
                        fetchXdoc = _questionRepository.QueryDeliverychannel(model.mcs_deliverychannel);
                        var deliverychannelentities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_deliverychannel", fetchXdoc);
                        //回答渠道获取
                        if (deliverychannelentities.Results.Count > 0)
                        {
                            foreach (var item in model.model)
                            {
                                Guid id = Guid.NewGuid();
                                var entity = new CrmExecuteEntity("mcs_answercontent", id);
                                entity.Attributes.Add("mcs_answername", new CrmEntityReference("mcs_user", userentities.Results[0].Id));
                                entity.Attributes.Add("mcs_deliverychannel", new CrmEntityReference("mcs_deliverychannel", deliverychannelentities.Results[0].Id));
                                entity.Attributes.Add("mcs_questionnairesetting", new CrmEntityReference("mcs_questionnairesetting", entities.Results[0].Id));

                                string starttime = entities.Results[0].Attributes["mcs_starttime@OData.Community.Display.V1.FormattedValue"].ToString();
                                string endtime = entities.Results[0].Attributes["mcs_endtime@OData.Community.Display.V1.FormattedValue"].ToString();
                                if ((!string.IsNullOrEmpty(starttime)) && (!string.IsNullOrEmpty(starttime)))
                                {
                                    if (DateTime.Parse(starttime) <= DateTime.Now && DateTime.Parse(endtime) >= DateTime.Now)
                                    {
                                        string mcs_awardcategory = entities.Results[0].Attributes["mcs_awardcategory@OData.Community.Display.V1.FormattedValue"].ToString();
                                        string mcs_awardamount = entities.Results[0].Attributes["mcs_awardamount@OData.Community.Display.V1.FormattedValue"].ToString();
                                        string mcs_awardcount = string.Format("奖励类别：{0},奖励数量{1}", mcs_awardcategory, mcs_awardamount);
                                        entity.Attributes.Add("mcs_awardcount", mcs_awardcount);
                                        entity.Attributes.Add("mcs_isaward", 1);
                                    }
                                    else
                                        entity.Attributes.Add("mcs_isaward", 2);

                                }
                                else
                                    entity.Attributes.Add("mcs_isaward", 2);

                                if (!string.IsNullOrEmpty(item.mcs_answer))
                                    entity.Attributes.Add("mcs_answer", item.mcs_answer);
                                if (!string.IsNullOrEmpty(item.mcs_answercontentcode))
                                    entity.Attributes.Add("mcs_answercontentcode", item.mcs_answercontentcode);
                                if (!string.IsNullOrEmpty(item.mcs_name))
                                    entity.Attributes.Add("mcs_name", item.mcs_name);
                                entity.Attributes.Add("mcs_questions", new CrmEntityReference("mcs_questions", item.mcs_questions));
                                await _crmService.Create(entity);
                            }
                            //判断是否有试驾记录，如果有写入试驾反馈
                            if (!string.IsNullOrEmpty(model.driverecordid))
                            {
                                fetchXdoc = _questionRepository.GetDriverecord(model.driverecordid);
                                var driverecord = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_driverecord", fetchXdoc);
                                if (driverecord.Results.Count > 0)
                                { 
                                    Guid id = Guid.NewGuid();
                                    var entity = new CrmExecuteEntity("mcs_testdrivefeedbackmaster", id);
                                    entity.Attributes.Add("mcs_username", userentities.Results[0].Attributes["mcs_name"].ToString());
                                    entity.Attributes.Add("mcs_userid", userentities.Results[0].Attributes["mcs_code"].ToString());
                                    entity.Attributes.Add("mcs_driverecordid", new CrmEntityReference("mcs_driverecord", driverecord.Results[0].Id));
                                    entity.Attributes.Add("mcs_surveytime", DateTime.Now);
                                    entity.Attributes.Add("mcs_userphone", userentities.Results[0].Attributes["mcs_phone"].ToString());

                                    fetchXdoc = _questionRepository.GetOnlylead(userentities.Results[0].Id.ToString());
                                    var onlylead = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_onlylead", fetchXdoc);
                                    if (onlylead.Results.Count > 0)
                                        entity.Attributes.Add("mcs_onlyleadid", new CrmEntityReference("mcs_onlylead", onlylead.Results[0].Id));
                                    await _crmService.Create(entity);
                                    foreach (var item in model.model)
                                    {
                                        Guid testdriveid = Guid.NewGuid();
                                        var testdriveentity = new CrmExecuteEntity("mcs_testdrivefeedback", testdriveid);
                                        testdriveentity.Attributes.Add("mcs_survey", model.mcs_questionnairesetting);
                                        testdriveentity.Attributes.Add("mcs_username", userentities.Results[0].Attributes["mcs_name"].ToString());
                                        testdriveentity.Attributes.Add("mcs_userphone", userentities.Results[0].Attributes["mcs_phone"].ToString());
                                        testdriveentity.Attributes.Add("mcs_userid", userentities.Results[0].Attributes["mcs_code"].ToString());
                                        testdriveentity.Attributes.Add("mcs_surveyquestion", item.mcs_name);
                                        testdriveentity.Attributes.Add("mcs_suveryanswer", item.mcs_answer);
                                        testdriveentity.Attributes.Add("mcs_surveytype", item.mcs_type);
                                        testdriveentity.Attributes.Add("mcs_driverecordid", new CrmEntityReference("mcs_driverecord", driverecord.Results[0].Id));
                                        if (onlylead.Results.Count > 0)
                                            testdriveentity.Attributes.Add("mcs_onlyleadid", new CrmEntityReference("mcs_onlylead", onlylead.Results[0].Id));
                                        testdriveentity.Attributes.Add("mcs_testdrivefeedbackmasterid", new CrmEntityReference("mcs_testdrivefeedbackmaster", id));
                                        await _crmService.Create(testdriveentity);
                                    }
                                }

                            }


                            #region 组装数据返回 
                            validateResult.Result = true;
                            validateResult.Description = "操作成功";
                            return validateResult;
                            #endregion
                        }

                    }

                }
                validateResult.Result = false;
                validateResult.Description = "来源数据异常！";





            }
            catch (Exception e)
            {
                validateResult.Result = false;
                validateResult.Description = e.Message;
            }

            return validateResult;

        }





        /// <summary>
        /// 根据编码获取用户
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public async Task<CrmEntity> GetUserToCode(string code)
        {
            var validateResult = new ValidateResult();

            var crmRequestHelper = new CrmRequestHelper();
            XDocument fetchXdoc = null;
            fetchXdoc = _questionRepository.QueryUser(code);
            var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_user", fetchXdoc);
            if (entities.Results.Count > 0)
            {
                return entities.Results[0];
            }
            return null;
        }
    }
}
