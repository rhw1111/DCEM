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

    }
}
