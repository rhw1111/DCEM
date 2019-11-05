using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;

namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class AccountRepository : IAccountRepository
    {
        public string QueryList(AccountRequest accountRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(accountRequest.search))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='mcs_name' operator='like' value='%{accountRequest.search}%' />";
                filter += $"<condition attribute='mcs_userid' operator='like' value='%{accountRequest.search}%' />";
                filter += $"<condition attribute='mcs_mobilephone' operator='like' value='%{accountRequest.search}%' />";
                filter += $"<condition attribute='mcs_emailaddress1' operator='like' value='%{accountRequest.search}%' />";
                filter += $"</filter>";
            }
            if (accountRequest.mcs_dealerid!=null)
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{accountRequest.mcs_dealerid}' />";
                filter += $"</filter>";
            }

            var fetchString = $@"<fetch version='1.0' count='{accountRequest.PageSize}' page='{accountRequest.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='mcs_Account'>
                <attribute name='mcs_name' />

                <order attribute='createdon' descending='true' />
                <filter type='and'>
                  <condition attribute='statecode' operator='eq' value='0' />
                    {filter}
                </filter>
              </entity>
            </fetch>";

            return fetchString;
        }
    }
}
