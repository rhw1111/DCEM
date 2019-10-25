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
using MSLibrary.Xrm.Message.RetrieveEntityAttributeMetadataMultiple;
using MSLibrary.Xrm.Convert;
using MSLibrary.Xrm.Metadata;
using MSLibrary.Xrm.MessageHandle.CrmAttributeMetadataHandle;
using MSLibrary.Serializer;

namespace MSLibrary.Xrm.MessageHandle
{
    [Injection(InterfaceType = typeof(CrmMessageHandleForRetrieveEntityAttributeMetadataMultiple), Scope = InjectionScope.Singleton)]
    public class CrmMessageHandleForRetrieveEntityAttributeMetadataMultiple : ICrmMessageHandle
    {
        public async Task<CrmRequestMessageHandleResult> ExecuteRequest(CrmRequestMessage request)
        {
            if (!(request is CrmRetrieveEntityAttributeMetadataMultipleRequestMessage))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.CrmRequestMessageTypeNotMatch,
                    DefaultFormatting = "消息请求类型不匹配，期待的类型为{0}，实际类型为{1}，位置为{2}",
                    ReplaceParameters = new List<object>() { typeof(CrmRetrieveEntityAttributeMetadataMultipleRequestMessage).FullName, request.GetType().FullName, $"{ this.GetType().FullName }.ExecuteRequest" }
                };

                throw new UtilityException((int)Errors.CrmRequestMessageTypeNotMatch, fragment);
            }

            var realRequest = request as CrmRetrieveEntityAttributeMetadataMultipleRequestMessage;

            var url = $"{realRequest.OrganizationURI}/api/data/v{realRequest.ApiVersion}/EntityDefinitions";
            if (realRequest.EntityMetadataId != Guid.Empty)
            {
                url = $"{url}({realRequest.EntityMetadataId.ToString()})";
            }
            else
            {
                url = $"{url}(LogicalName='{realRequest.EntityName}')";
            }


            url = $"{url}/Attributes";

            if (!string.IsNullOrEmpty(realRequest.QueryExpression))
            {
                url = $"{url}?{realRequest.QueryExpression}";
            }

            var headers = new Dictionary<string, IEnumerable<string>>();
            headers["OData-MaxVersion"] = new List<string> { "4.0" };
            headers["OData-Version"] = new List<string> { "4.0" };
            headers["Content-Type"] = new List<string> { "application/json" };
            headers["Content-Type-ChartSet"] = new List<string> { "utf-8" };
            headers["Accept"] = new List<string> { "application/json" };

            foreach (var itemHeader in realRequest.Headers)
            {
                headers[itemHeader.Key] = itemHeader.Value;
            }


            CrmRequestMessageHandleResult result = new CrmRequestMessageHandleResult();
            result.Url = url;
            result.Method = HttpMethod.Get;
            result.Headers = headers;
            result.Extension = realRequest;

            return await Task.FromResult(result);
        }

        public async Task<CrmResponseMessage> ExecuteResponse(object extension, string requestUrl, string requestBody, int responseCode, Dictionary<string, IEnumerable<string>> responseHeaders, string responseBody)
        {
            var request = (CrmRetrieveEntityAttributeMetadataMultipleRequestMessage)extension;

            CrmRetrieveEntityAttributeMetadataMultipleResponseMessage response = new CrmRetrieveEntityAttributeMetadataMultipleResponseMessage();

            var jObject = JsonSerializerHelper.Deserialize<JObject>(responseBody);

            var results = JsonSerializerHelper.Deserialize<List<CrmAttributeMetadata>>(jObject["value"].ToString());

            response.Result = results;
            return await Task.FromResult(response);
        }
    }
}
