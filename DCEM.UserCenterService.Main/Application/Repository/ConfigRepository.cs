//------------------------------------------------------------------------------
//用于config配置值获取
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.Repository
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using System.Xml.Linq;

    public class ConfigRepository : IConfigRepository
    {
        public async Task<XDocument> GetConfigFetchXml(string name)
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>
                                  <entity name='mcs_cepconfig'>
                                    <attribute name='mcs_name' />
                                    <attribute name='mcs_val' />
                                    <filter type='and'>
                                      <condition attribute='mcs_name' operator='eq' value='{name}' /> 
                                    </filter>  
                                  </entity>
                                </fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

    }
}
