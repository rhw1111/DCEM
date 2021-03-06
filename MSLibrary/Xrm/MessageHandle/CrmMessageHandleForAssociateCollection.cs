﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json.Linq;
using MSLibrary.DI;
using MSLibrary.LanguageTranslate;
using MSLibrary.Xrm.Message.AssociateCollection;
using MSLibrary.Xrm.Convert;
using MSLibrary.Serializer;
using MSLibrary.Xrm.Convert.CrmAlternateKeyTypeHandle;


namespace MSLibrary.Xrm.MessageHandle
{
    [Injection(InterfaceType = typeof(CrmMessageHandleForAssociateCollection), Scope = InjectionScope.Singleton)]
    public class CrmMessageHandleForAssociateCollection : ICrmMessageHandle
    {
        private ICrmAlternateKeyTypeHandle _crmAlternateKeyTypeHandle;
        public CrmMessageHandleForAssociateCollection(ICrmAlternateKeyTypeHandle crmAlternateKeyTypeHandle)
        {
            _crmAlternateKeyTypeHandle = crmAlternateKeyTypeHandle;
        }

        public async Task<CrmRequestMessageHandleResult> ExecuteRequest(CrmRequestMessage request)
        {
            if (!(request is CrmAssociateCollectionRequestMessage))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.CrmRequestMessageTypeNotMatch,
                    DefaultFormatting = "消息请求类型不匹配，期待的类型为{0}，实际类型为{1}，位置为{2}",
                    ReplaceParameters = new List<object>() { typeof(CrmAssociateCollectionRequestMessage).FullName, request.GetType().FullName, $"{ this.GetType().FullName }.ExecuteRequest" }
                };


                throw new UtilityException((int)Errors.CrmRequestMessageTypeNotMatch, fragment);
            }

            var realRequest = request as CrmAssociateCollectionRequestMessage;

            //如果唯一键集合不为空，则使用唯一键作为主键，否则，使用Entity的Id作为主键
            var url = $"{realRequest.OrganizationURI}/api/data/v{realRequest.ApiVersion}/{realRequest.EntityName.ToPlural()}";
            if (realRequest.AlternateKeys != null && realRequest.AlternateKeys.Count > 0)
            {
                StringBuilder strAlternateKey = new StringBuilder();
                foreach (var keyItem in realRequest.AlternateKeys)
                {
                    strAlternateKey.Append(keyItem.Key);
                    strAlternateKey.Append("=");
                    strAlternateKey.Append(await _crmAlternateKeyTypeHandle.Convert(keyItem.Value));
                    strAlternateKey.Append(",");
                }

                if (strAlternateKey.Length > 0)
                {
                    strAlternateKey.Remove(strAlternateKey.Length - 1, 1);
                }

                url = $"{url}({strAlternateKey.ToString()})";
            }
            else
            {
                url = $"{url}({realRequest.EntityId.ToString()})";
            }

            url = $"{url}/{ realRequest.AttributeName}/$ref";


            var headers = new Dictionary<string, IEnumerable<string>>();
            headers["OData-MaxVersion"] = new List<string> { "4.0" };
            headers["OData-Version"] = new List<string> { "4.0" };
            headers["Content-Type"] = new List<string> { "application/json" };
            headers["Content-Type-ChartSet"] = new List<string> {"utf-8" };
            headers["Accept"] = new List<string> { "application/json" };

            foreach (var itemHeader in realRequest.Headers)
            {
                headers[itemHeader.Key] = itemHeader.Value;
            }

            CrmRequestMessageHandleResult result = new CrmRequestMessageHandleResult();
            result.Url = url;
            result.Method = HttpMethod.Post;
            result.Headers = headers;
            result.Body = $@"{{""@odata.id"":""{realRequest.OrganizationURI}/api/data/v{realRequest.ApiVersion}/{realRequest.AssociateEntityName.ToPlural()}({realRequest.AssociateEntityId.ToString()})""}}";

            return result;
        }

        public async Task<CrmResponseMessage> ExecuteResponse(object extension, string requestUrl, string requestBody, int responseCode, Dictionary<string, IEnumerable<string>> responseHeaders, string responseBody,HttpResponseMessage responseMessage)
        {
            CrmAssociateCollectionResponseMessage response = new CrmAssociateCollectionResponseMessage();
            return await Task.FromResult(response);
        }
    }
}
