using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class CustomerLabelRepository: ICustomerLabelRepository
    {
        public async Task<XDocument> GetAll()
        {
            return await Task<XDocument>.Run(() =>
            {
                var fetchXml = $@"<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
  <entity name='mcs_tag'>
    <attribute name='mcs_tagid' />
    <attribute name='mcs_name' />
    <attribute name='createdon' />
    <order attribute='mcs_name' descending='false' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' />
    </filter>
  </entity>
</fetch>"; 
                return XDocument.Parse(fetchXml);
            });
        }
    }
}
