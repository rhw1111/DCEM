//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.Repository
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using System.Xml.Linq;
    using System;

    public class UserRepository : IUserRepository
    {
        /// <summary>
        /// 账号登陆
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<XDocument> LoginAccount(UserLoginRequest request)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
  <entity name='mcs_user'>
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <attribute name='mcs_email' />
    <attribute name='mcs_cardid' />
    <attribute name='mcs_profession' />
    <attribute name='mcs_code' />
    <attribute name='mcs_status' />
    <attribute name='mcs_nickname' />
    <attribute name='mcs_gender' />
    <attribute name='mcs_marriagestatus' />
    <attribute name='mcs_birthday' />
    <attribute name='mcs_company' />
    <attribute name='mcs_signature' />
    <attribute name='mcs_phone' />
    <attribute name='mcs_memberid' />
    <attribute name='mcs_userid' />
    <attribute name='mcs_description' />
    <order attribute='createdon' descending='true' />
    <filter type='and'>
      <condition attribute='mcs_status' operator='eq' value='1' />
    </filter>
    <link-entity name='mcs_userkeys' from='mcs_userid' to='mcs_userid' link-type='inner' alias='ae'>
      <filter type='and'>
        <condition attribute='mcs_hashvalue' operator='eq' value='{request.pwd}' />
        <condition attribute='mcs_keytype' operator='eq' value='{request.keytype}' />
        <condition attribute='mcs_status' operator='eq' value='{request.status}' />
        <condition attribute='mcs_certificationtype' operator='eq' value='{request.certificationtype}' />
      </filter>
    </link-entity>
    <link-entity name='mcs_loginname' from='mcs_userid' to='mcs_userid' link-type='inner' alias='af'>
      <filter type='and'>
        <condition attribute='mcs_name' operator='eq' value='{request.account}' />
        <condition attribute='mcs_logintype' operator='eq' value='{request.logintype}' />
        <condition attribute='mcs_status' operator='eq' value='1' />
      </filter>
      <attribute name='mcs_name' alias='account'/>
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }


        /// <summary>
        /// 用户信息获取
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<XDocument> GetUser(UserLoginRequest request)
        {
            return await Task<XDocument>.Run(() =>
            {

                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
  <entity name='mcs_user'>
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <attribute name='mcs_email' />
    <attribute name='mcs_cardid' />
    <attribute name='mcs_profession' />
    <attribute name='mcs_code' />
    <attribute name='mcs_status' />
    <attribute name='mcs_nickname' />
    <attribute name='mcs_gender' />
    <attribute name='mcs_marriagestatus' />
    <attribute name='mcs_birthday' />
    <attribute name='mcs_company' />
    <attribute name='mcs_signature' />
    <attribute name='mcs_phone' />
    <attribute name='mcs_memberid' />
    <attribute name='mcs_userid' />
    <attribute name='mcs_description' />
    <order attribute='createdon' descending='true' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' /> 
    </filter> 
    <link-entity name='mcs_loginname' from='mcs_userid' to='mcs_userid' link-type='inner' alias='ab'>
        <filter type='and'> 
        <condition attribute='mcs_logintype' operator='eq' value='{request.logintype}' /> 
        <condition attribute='mcs_status' operator='eq' value='1' /> 
        <condition attribute='mcs_name' operator='eq' value='{request.account}' />
        </filter>
      <attribute name='mcs_name' alias='account'/>
    </link-entity> 
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

        /// <summary>
        /// 用户行为获取
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public async Task<XDocument> GetBehavior(string  code)
        {
            return await Task<XDocument>.Run(() =>
            {

                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
  <entity name='mcs_behavior'>
    <attribute name='mcs_name' /> 
    <attribute name='mcs_behaviorid' /> 
    <filter type='and'>
      <condition attribute='mcs_code' operator='eq' value='{code}' /> 
    </filter>  
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }



        public async Task<XDocument> GetUserPwd(UserLoginRequest request)
        {
            return await Task<XDocument>.Run(() =>
            {



                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
  <entity name='mcs_userkeys'>
    <attribute name='mcs_userkeysid' />
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <order attribute='mcs_name' descending='false' />
    <filter type='and'>
      <condition attribute='mcs_keytype' operator='eq' value='{request.keytype}' />
      <condition attribute='mcs_status' operator='eq' value='{request.status}' />
      <condition attribute='mcs_certificationtype' operator='eq' value='{request.certificationtype}' />
    </filter>
    <link-entity name='mcs_user' from='mcs_userid' to='mcs_userid' link-type='inner' alias='ac'>
      <link-entity name='mcs_loginname' from='mcs_userid' to='mcs_userid' link-type='inner' alias='ad'>
        <filter type='and'>
          <condition attribute='mcs_name' operator='eq' value='{request.account}' />
          <condition attribute='mcs_status' operator='eq' value='1' />
          <condition attribute='mcs_logintype' operator='eq' value='{request.logintype}' />
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }



        /// <summary>
        /// 安全问题设置列表获取
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<XDocument> GetSecurityquestion()
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
  <entity name='mcs_securityquestion'>
    <attribute name='mcs_securityquestionid' />
    <attribute name='mcs_code' />
    <attribute name='mcs_name' /> 
    <order attribute='mcs_index' descending='true' /> 
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }


        /// <summary>
        /// 用户安全密码获取
        /// </summary>
        /// <returns></returns>
        public async Task<XDocument> GetUserSecurityquestion(UserLoginRequest request)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
  <entity name='mcs_usersecurityquestion'>
    <attribute name='mcs_securityquestionid' />
    <attribute name='mcs_answer' />
    <attribute name='mcs_name' />  
        <link-entity name='mcs_user' from='mcs_userid' to='mcs_userid' link-type='inner' alias='ac'>
          <link-entity name='mcs_loginname' from='mcs_userid' to='mcs_userid' link-type='inner' alias='ad'>
            <filter type='and'>
              <condition attribute='mcs_name' operator='eq' value='{request.account}' />
              <condition attribute='mcs_status' operator='eq' value='1' />
              <condition attribute='mcs_logintype' operator='eq' value='{request.logintype}' />
            </filter>
          </link-entity>
        </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

        /// <summary>
        /// 获取用户积分记录
        /// </summary>
        /// <param name="userDetailRequest"></param>
        /// <returns></returns>
        public async Task<XDocument> getuserscore(UserDetailRequest userDetailRequest)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true' count='{userDetailRequest.PageSize}' page='{userDetailRequest.PageIndex}'>
  <entity name='mcs_memberintegraldetail'>
    <attribute name='mcs_memberintegraldetailid' />
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <attribute name='mcs_integraltype' />
    <attribute name='mcs_num' />
    <attribute name='overriddencreatedon' />
    <order attribute='mcs_name' descending='false' />
    <link-entity name='mcs_member' from='mcs_memberid' to='mcs_memberid' link-type='inner' alias='am'>
      <link-entity name='mcs_user' from='mcs_memberid' to='mcs_memberid' link-type='inner' alias='an'>
        <filter type='and'>
          <condition attribute='mcs_userid' operator='eq'   uitype='mcs_user' value='{userDetailRequest.id}' />
        </filter>
      </link-entity>
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

        /// <summary>
        /// 获取用户积分记录
        /// </summary>
        /// <param name="userDetailRequest"></param>
        /// <returns></returns>
        public async Task<XDocument> getuserscorebalance(UserDetailRequest userDetailRequest)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
  <entity name='mcs_member'>
    <attribute name='mcs_memberid' />
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <attribute name='mcs_code' />
    <attribute name='mcs_mobile' />
    <attribute name='mcs_memberlevelid' />
    <attribute name='mcs_bonuspoint' />
    <attribute name='mcs_accumulatepoint' />
    <attribute name='mcs_provinceid' />
    <attribute name='mcs_districtid' />
    <attribute name='mcs_cityid' />
    <order attribute='mcs_code' descending='true' />
    <link-entity name='mcs_user' from='mcs_memberid' to='mcs_memberid' link-type='inner' alias='ab'>
      <filter type='and'>
        <condition attribute='mcs_userid' operator='eq' uitype='mcs_user' value='{userDetailRequest.id}' />
      </filter>
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }



        /// <summary>
        /// 用户注册协议获取
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public async Task<XDocument> GetAgreement(string defcode)
        {
            return await Task<XDocument>.Run(() =>
            {

                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                                  <entity name='mcs_frontcontent'>
                                    <attribute name='mcs_name' />
                                    <attribute name='mcs_contenttext' />
                                    <attribute name='mcs_description' />
                                    <attribute name='mcs_thumbnail' />  
                                    <filter type='and'>
                                      <condition attribute='mcs_contentstatus' operator='eq' value='1' /> 
                                      <condition attribute='mcs_defcode' operator='eq' value='{defcode}' /> 
                                    </filter>  
                                  </entity>
                                </fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

    }
}
