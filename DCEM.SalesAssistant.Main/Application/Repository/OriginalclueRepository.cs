using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class OriginalclueRepository : IOriginalclueRepository
    {
        /// <summary>
        /// 组织查询fetch
        /// </summary>
        /// <param name="originalclueListRequest"></param>
        /// <returns></returns>
        public async Task<XDocument> GetGetQueryListFetchXml(OriginalclueListRequest originalclueListRequest)
        {
            return await Task<XDocument>.Run(() =>
            {
                var filterStr = "";
                if (!string.IsNullOrEmpty(originalclueListRequest.Search))
                {
                    filterStr = $@"<filter type='or'>
<condition attribute = 'mobilephone' operator= 'like' value = '%{originalclueListRequest.Search}%' />
<condition attribute = 'fullname' operator= 'like' value = '%{originalclueListRequest.Search}%' />
</filter >";
                }
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' count='{originalclueListRequest.PageSize}' page='{originalclueListRequest.PageIndex}'>
  <entity name='lead'>
    <attribute name='fullname' />
    <attribute name='leadid' />
    <attribute name='mcs_terminalid' />
    <attribute name='mcs_gender' />
    <attribute name='mobilephone' />
    <order attribute='createdon' descending='true' />
    <filter type='and'>
      <condition attribute='mcs_dealerid' operator='eq'  value='{originalclueListRequest.DealerId}'/>
{filterStr}
    </filter>
    <link-entity name='mcs_terminal' from='mcs_terminalid' to='mcs_terminalid' visible='false' link-type='outer' alias='mcs_terminal'>
      <attribute name='mcs_name' />
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
    }
}
