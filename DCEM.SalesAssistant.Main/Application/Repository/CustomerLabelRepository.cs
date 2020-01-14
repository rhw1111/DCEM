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
        /// <summary>
        /// 获取客户标签(过滤动态标签)
        /// </summary>
        /// <returns></returns>
        public async Task<XDocument> GetAll()
        {
            //<condition attribute='mcs_taggroupid' operator='ne' value='E6E6CC76-F1BE-4C66-9695-D43CBA9589ED'/>
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
    <link-entity name='mcs_taggroup' alias='ab' link-type='inner' to='mcs_taggroupid' from='mcs_taggroupid'>
        <filter type='and'>
            <condition attribute='mcs_code' value='9999' operator='ne'/>
        </filter>
    </link-entity>
  </entity>
</fetch>"; 
                return XDocument.Parse(fetchXml);
            });
        }
    }
}
