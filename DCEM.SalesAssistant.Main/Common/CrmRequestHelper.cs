﻿using DCEM.Main;
using DCEM.Main.Entities;
using MSLibrary;
using MSLibrary.Xrm;
using MSLibrary.Xrm.Message.RetrieveMultipleFetch;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Common
{
    public class CrmRequestHelper
    {
        public async Task<CrmEntityCollection> ExecuteAsync(ICrmService crmService, string entityName, XDocument document,Guid? userId=null)
        {
            try
            {
                var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
                var dicHead = new Dictionary<string, IEnumerable<string>>();
                dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" });
                var fetchRequest = new CrmRetrieveMultipleFetchRequestMessage()
                {
                    EntityName = entityName,
                    FetchXml = document,
                    ProxyUserId= userInfo?.systemuserid
                };
                fetchRequest.Headers.Add("Prefer", dicHead["Prefer"]);
                var crmResponseMessage = await crmService.Execute(fetchRequest);
                var resultsList = crmResponseMessage as CrmRetrieveMultipleFetchResponseMessage; 
                return resultsList.Value;
            }
            catch (Exception ex)
            {
                return new CrmEntityCollection();
            }
        }

        public async Task<CrmEntity> Retrieve(ICrmService crmService, string entityName,  Guid id, Guid? userId=null)
        {
            var userInfo = ContextContainer.GetValue<UserInfo>(ContextExtensionTypes.CurrentUserInfo);
            var dicHead = new Dictionary<string, IEnumerable<string>>();
            dicHead.Add("Prefer", new List<string>() { "odata.include-annotations=\"*\"" }); 
            CrmEntity entity = null;
            entity = await crmService.Retrieve(entityName, id,"", userInfo?.systemuserid, dicHead);
            return entity;
        }
    }
}
