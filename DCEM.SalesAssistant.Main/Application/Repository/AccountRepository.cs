using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;

namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class AccountRepository : IAccountRepository
    {
        public string QueryList(AccountSearhRequest accountRequest)
        {
            var filter = string.Empty;
            if (!string.IsNullOrWhiteSpace(accountRequest.SearchKey))
            {
                filter += $"<filter type='or'>";
                filter += $"<condition attribute='name' operator='like' value='%{accountRequest.SearchKey}%' />";
                filter += $"<condition attribute='accountnumber' operator='like' value='%{accountRequest.SearchKey}%' />";
                filter += $"<condition attribute='mcs_mobilephone' operator='like' value='%{accountRequest.SearchKey}%' />";
                filter += $"</filter>";
            }
            if (accountRequest.mcs_customerstatus.HasValue && accountRequest.mcs_customerstatus.GetValueOrDefault(0)>0)
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_customerstatus' operator='eq' value='{accountRequest.mcs_customerstatus}' />";
                filter += $"</filter>";
            }
            if (!string.IsNullOrEmpty(accountRequest.mcs_dealerid))
            {
                filter += $"<filter type='and'>";
                filter += $"<condition attribute='mcs_dealerid' operator='eq' value='{accountRequest.mcs_dealerid}' />";
                filter += $"</filter>";
            }

            var fetchString = $@"<fetch version='1.0' count='{accountRequest.PageSize}' page='{accountRequest.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                <entity name='account'>
                <attribute name='accountid' />
                <attribute name='name' />
                <attribute name='accountnumber' />
                <attribute name='mcs_mobilephone' />
                <attribute name='mcs_customerstatus' />
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
