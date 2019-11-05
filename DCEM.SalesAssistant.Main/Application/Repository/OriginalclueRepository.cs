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
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false' count='{originalclueListRequest.PageSize}' page='{originalclueListRequest.PageIndex}'>
  <entity name='lead'>
    <attribute name='fullname' />
    <attribute name='leadid' />
    <attribute name='leap_terminalid' />
    <attribute name='leap_gender' />
    <attribute name='mobilephone' />
    <order attribute='fullname' descending='false' />
    <filter type='and'>
      <condition attribute='leap_dealerid' operator='eq' />
    </filter>
 <link-entity name='leap_terminal' from='leap_terminalid' to='leap_terminalid' visible='false' link-type='outer' alias='leap_terminal'>
      <attribute name='leap_name' />
    </link-entity>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }
    }
}
