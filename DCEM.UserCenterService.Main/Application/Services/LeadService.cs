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
    using System;
    using System.Xml.Linq;
    using DCEM.UserCenterService.Main.Common;
    using MSLibrary;

    public class LeadService : ILeadService
    {
        
        private ICrmService _crmService;
        
        public ILeadRepository _leadRepository;
        
        public LeadService(ICrmService crmService, ILeadRepository leadRepository)
        {
             _crmService = crmService;
             _leadRepository=leadRepository;
        }

        public async Task<ValidateResult<CrmEntity>> create(LeadRequest request)
        {
            var validateResult = new ValidateResult<CrmEntity>();
            try
            {
                var createEntity = new CrmExecuteEntity("lead", Guid.NewGuid());
                if (!string.IsNullOrEmpty(request.mcs_mobilephone))
                {
                    createEntity.Attributes.Add("mobilephone", request.mcs_mobilephone);
                }
                if (!string.IsNullOrEmpty(request.emailaddress1))
                {
                    createEntity.Attributes.Add("emailaddress1", request.emailaddress1);
                }
                if (request.mcs_leadorigin!=null)
                {
                    createEntity.Attributes.Add("mcs_leadorigin", request.mcs_leadorigin);
                }
                if (request.mcs_accountpoints!=null)
                {
                    createEntity.Attributes.Add("mcs_accountpoints", request.mcs_accountpoints);
                }
                if (!string.IsNullOrEmpty(request.description))
                {
                    createEntity.Attributes.Add("description", request.description);
                }
                if (request.mcs_gender != null)
                {
                    createEntity.Attributes.Add("mcs_gender", request.mcs_gender);
                }
                if (!string.IsNullOrWhiteSpace(request.mcs_provinceid))
                {
                    var salesarea = new CrmEntityReference("mcs_salesarea", Guid.Parse(request.mcs_provinceid));
                    createEntity.Attributes.Add("mcs_provinceid", salesarea);
                }
                if (!string.IsNullOrWhiteSpace(request.mcs_cityid))
                {
                    var salesarea = new CrmEntityReference("mcs_salesarea", Guid.Parse(request.mcs_cityid));
                    createEntity.Attributes.Add("mcs_cityid", salesarea);
                }
                if (!string.IsNullOrWhiteSpace(request.mcs_areaid))
                {
                    var salesarea = new CrmEntityReference("mcs_salesarea", Guid.Parse(request.mcs_areaid));
                    createEntity.Attributes.Add("mcs_districtid", salesarea);
                }
                if (!string.IsNullOrWhiteSpace(request.mcs_dealerid))
                {
                    var dealer = new CrmEntityReference("mcs_dealer", Guid.Parse(request.mcs_dealerid));
                    createEntity.Attributes.Add("mcs_dealerid", dealer);
                }
                var mcs_behaviorEntityRefence = await GetBehaviorEntityByCode(request.behaviorcode);
                if (mcs_behaviorEntityRefence != null)
                {
                    createEntity.Attributes.Add("mcs_behaviorid", mcs_behaviorEntityRefence);
                }
                //预约意向车型
                if (!string.IsNullOrWhiteSpace(request.mcs_blindordervehtype))
                {
                    createEntity.Attributes.Add("mcs_blindordervehtype", request.mcs_blindordervehtype);
                }
                //订单号
                if (!string.IsNullOrWhiteSpace(request.mcs_order))
                {
                    createEntity.Attributes.Add("mcs_order", request.mcs_order);
                }
                //预约号
                if (!string.IsNullOrWhiteSpace(request.mcs_premiumcode))
                {
                    createEntity.Attributes.Add("mcs_premiumcode", request.mcs_premiumcode);
                }
                //用车城市
                if (!string.IsNullOrWhiteSpace(request.mcs_usecarcity))
                {
                    createEntity.Attributes.Add("mcs_usecarcity", request.mcs_usecarcity);
                }
                //下单时间
                if (request.mcs_ordertime!=null)
                {
                    var ordertime=  request.mcs_ordertime.Value.ToUniversalTime();
                    createEntity.Attributes.Add("mcs_ordertime", ordertime);
                }
                //订单状态
                if (request.mcs_optiontype != null)
                {
                    createEntity.Attributes.Add("mcs_optiontype", request.mcs_optiontype);
                }
                //线索媒体
                if (!string.IsNullOrWhiteSpace(request.mediacode))
                {
                    var mediaef = await GetMediaEntityByCode(request.mediacode); ;
                    if (mediaef != null)
                    {
                        createEntity.Attributes.Add("mcs_mediaid", mediaef);
                    }
                }
                //线索终端
                if (!string.IsNullOrWhiteSpace(request.terminalcode))
                {
                    var terminalef = await GetTerminalEntityByCode(request.terminalcode);
                    if (terminalef != null)
                    {
                        createEntity.Attributes.Add("mcs_terminalid", terminalef);
                    }
                }
                //引流渠道
                if (request.mcs_channel != null)
                {
                    createEntity.Attributes.Add("mcs_channel", request.mcs_channel);
                }
                //用户Id
                if (!string.IsNullOrWhiteSpace(request.mcs_userid))
                {
                    createEntity.Attributes.Add("mcs_userid", request.mcs_userid);
                }
                //全名
                if (!string.IsNullOrWhiteSpace(request.mcs_fullname))
                {
                    createEntity.Attributes.Add("lastname", request.mcs_fullname);
                }
                //数据来源
                createEntity.Attributes.Add("mcs_leadsource", request.mcs_leadsource);
                //预售描述
                if (!string.IsNullOrWhiteSpace(request.mcs_orderdescription))
                {
                    createEntity.Attributes.Add("mcs_orderdescription", request.mcs_orderdescription);
                }
                var entityId = await _crmService.Create(createEntity);

                validateResult.Result = true;
                validateResult.Description = "操作成功";
            }
            catch (Exception ex)
            {
                validateResult.Result = false;
                validateResult.Description ="操作失败";
            }
            return validateResult;
        }

        #region 私有方法
        /// <summary>
        /// 线索终端
        /// </summary>
        /// <param name="terminalcode"></param>
        /// <returns></returns>
        private async Task<CrmEntityReference> GetTerminalEntityByCode(string terminalcode)
        {
            CrmEntityReference referenceEntity = null;
            try
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_terminal'>
                    <attribute name='mcs_terminalid' />
                    <attribute name='mcs_name' />
                    <attribute name='createdon' />
                    <order attribute='mcs_name' descending='false' />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      <condition attribute='mcs_code' operator='eq' value='{terminalcode}' />
                    </filter>
                  </entity>
                </fetch>";
                var fetchXdoc = XDocument.Parse(fetchXml);
                var crmRequestHelper = new CrmRequestHelper();
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_terminal", fetchXdoc);
                if (entities != null && entities.Results[0] != null)
                {
                    var entity = entities.Results[0];
                    referenceEntity = new CrmEntityReference(entity.EntityName, entity.Id);
                }
            }
            catch (Exception ex)
            {
                referenceEntity = null;
            }
            return referenceEntity;
        }

        /// <summary>
        /// 线索媒体
        /// </summary>
        /// <param name="mediacode"></param>
        /// <returns></returns>
        private async Task<CrmEntityReference> GetMediaEntityByCode(string mediacode)
        {
            CrmEntityReference referenceEntity = null;
            try
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_media'>
                    <attribute name='mcs_mediaid' />
                    <attribute name='mcs_name' />
                    <attribute name='createdon' />
                    <order attribute='mcs_name' descending='false' />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      <condition attribute='mcs_code' operator='eq' value='{mediacode}' />
                    </filter>
                  </entity>
                </fetch>";
                var fetchXdoc = XDocument.Parse(fetchXml);
                var crmRequestHelper = new CrmRequestHelper();
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_media", fetchXdoc);
                if (entities != null && entities.Results[0] != null)
                {
                    var entity = entities.Results[0];
                    referenceEntity = new CrmEntityReference(entity.EntityName, entity.Id);
                }
            }
            catch (Exception ex)
            {
                referenceEntity = null;
            }
            return referenceEntity;
        }

        private async Task<CrmEntityReference> GetBehaviorEntityByCode(string code)
        {
            CrmEntityReference referenceEntity = null;
            try
            {
               var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_behavior'>
                    <attribute name='mcs_behaviorid' />
                    <attribute name='mcs_name' />
                    <attribute name='createdon' />
                    <order attribute='mcs_name' descending='false' />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      <condition attribute='mcs_code' operator='eq' value='{code}' />
                    </filter>
                  </entity>
                </fetch>";
                var fetchXdoc = XDocument.Parse(fetchXml);
                var crmRequestHelper = new CrmRequestHelper();
                var entities = await crmRequestHelper.ExecuteAsync(_crmService, "mcs_behavior", fetchXdoc);
                if (entities != null && entities.Results[0] != null)
                {
                    var entity = entities.Results[0];
                    referenceEntity = new CrmEntityReference(entity.EntityName, entity.Id);
                }
            }
            catch (Exception ex)
            {
                referenceEntity = null;
            }
            return referenceEntity;
        }
        #endregion
    }
}
