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

    public class DealerRepository : IDealerRepository
    {
        public async Task<XDocument> GetListFetchXml(DealerListRequest dealerListRequest)
        {
            return await Task<XDocument>.Run(() =>
            {

                var filterStr = "";
                if (dealerListRequest.dealertype != "0")
                {
                    filterStr += $@"  <condition attribute='mcs_dealertype' operator='in'> <value>2</value>";
                    if (dealerListRequest.dealertype == "1")
                    {
                        filterStr += $@"<value>1</value>";
                    }
                    if (dealerListRequest.dealertype == "3")
                    {
                        filterStr += $@"<value>3</value>";
                    }
                    filterStr += $@"</condition>";
                }
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_dealer'>
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <attribute name='mcs_dealerid' />
    <attribute name='mcs_shopaddress' />
    <attribute name='mcs_address' />
 <attribute name='mcs_x' />
 <attribute name='mcs_y' />
    <order attribute='mcs_name' descending='false' />
    <filter type='and'>
      <condition attribute='mcs_isparentcompany' operator='eq' value='0' />
      <condition attribute='statecode' operator='eq' value='0' />
      <condition attribute='mcs_provinceid' operator='eq' value='{dealerListRequest.provinceid}'/>
      <condition attribute='mcs_cityid' operator='eq' value='{dealerListRequest.cityid}'/>
{filterStr}
    </filter>
  </entity>
</fetch>";
                return XDocument.Parse(fetchXml);
            });
        }

    }
}
