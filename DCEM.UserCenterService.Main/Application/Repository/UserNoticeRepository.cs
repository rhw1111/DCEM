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

    public class UserNoticeRepository : IUserNoticeRepository
    {
        public string GetUserNotices(UserNoticeRequest request)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(request.Search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{request.Search}%' />";
                filter += $"<condition attribute='mcs_content' operator='like' value='%{request.Search}%' />";
                filter += $"</filter>";
            }

            //if (!string.IsNullOrWhiteSpace(request.UserId))
            //{
            //    filter += $"<filter type='and'>";
            //    filter += $"<condition attribute='mcs_user' operator='eq' value='{request.UserId}' />";
            //    filter += $"</filter>";
            //}

            var fetchString = $@"<fetch version='1.0' count='{request.PageSize}' page='{request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='mcs_user_msg'>
                <attribute name='mcs_name' />
                <attribute name='createdon' />
                <attribute name='mcs_content' />
                <attribute name='mcs_readstatus' />
                <attribute name='mcs_readdate' />
                <attribute name='mcs_deletestatus' />
                <attribute name='mcs_deletedate' />
                <attribute name='mcs_url' />
                <attribute name='mcs_head_imageurl' />
                <attribute name='mcs_user' />
                <attribute name='mcs_type' />
                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                  <condition attribute='mcs_deletestatus' operator='eq' value='false' />
                  <condition attribute='mcs_user' operator='eq' value='{request.UserId}' />
                    {filter}
                </filter>
              </entity>
            </fetch>";

            return fetchString;
        }

 
    }
}