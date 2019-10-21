using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using Newtonsoft.Json;

namespace MSLibrary.Xrm
{
    public partial class CRMApi
    {

        #region 基础
        //private static readonly CRMClient crmClient;

        /// <summary>
        /// 超时时间
        /// </summary>
        static readonly TimeSpan DefaultTimeout = TimeSpan.FromMinutes(5);

        /// <summary>
        /// static construct
        /// </summary>
        static CRMApi()
        {
            System.Net.ServicePointManager.DefaultConnectionLimit = Environment.ProcessorCount * 12;
            //crmClient = new CRMClient();
        }

        static CRMClient GetRequestClient(string token="")
        {
            var handler = new HttpClientHandler()
            {
                Credentials = CredentialCache.DefaultNetworkCredentials
            };
            return new CRMClient(handler, true,null,token);
        }

        /// <summary>
        /// 在创建实体或调用操作时使用。
        /// </summary>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult Post(string requestUri, object data, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            return Post(requestUri, data, null, credentials, timeout);
        }
        /// <summary>
        /// 在创建实体或调用操作时使用。
        /// </summary>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="reqeustHeaders"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult Post(string requestUri, object data, Action<HttpRequestHeaders> reqeustHeaders, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            using (var client = GetRequestClient())
            {
                if (timeout.HasValue)
                {
                    client.Timeout = timeout.Value;
                }
                if (reqeustHeaders != null)
                {
                    reqeustHeaders(client.DefaultRequestHeaders);
                }
                var response = client.PostAsJsonAsyncWithLog(requestUri, data);
                return HandleApiResult(response);
            }

        }
        /// <summary>
        /// 在创建实体或调用操作时使用。
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult<T> Post<T>(string requestUri, object data, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            return Post<T>(requestUri, data, null, credentials, timeout);
        }
        /// <summary>
        /// 在创建实体或调用操作时使用。
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="reqeustHeaders"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult<T> Post<T>(string requestUri, object data, Action<HttpRequestHeaders> reqeustHeaders, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            using (var client = GetRequestClient())
            {
                if (timeout.HasValue)
                {
                    client.Timeout = timeout.Value;
                }
                if (reqeustHeaders != null)
                {
                    reqeustHeaders(client.DefaultRequestHeaders);
                }
                var response = client.PostAsJsonAsyncWithLog(requestUri, data);
                client.Dispose();
                return HandleApiResult<T>(response);
            }

        }
        /// <summary>
        /// 在某些情况下用于更新实体的各个属性。更新大多数实体时，不建议使用此方法。您将在更新模型实体时使用此方法。
        /// </summary>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult Put(string requestUri, object data, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            return Put(requestUri, data, null, credentials, timeout);
        }
        /// <summary>
        /// 在某些情况下用于更新实体的各个属性。更新大多数实体时，不建议使用此方法。您将在更新模型实体时使用此方法。
        /// </summary>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="reqeustHeaders"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult Put(string requestUri, object data, Action<HttpRequestHeaders> reqeustHeaders, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            using (var client = GetRequestClient())
            {
                if (timeout.HasValue)
                {
                    client.Timeout = timeout.Value;
                }
                if (reqeustHeaders != null)
                {
                    reqeustHeaders(client.DefaultRequestHeaders);
                }
                var response = client.PutAsJsonAsyncWithLog(requestUri, data);
                client.Dispose();
                return HandleApiResult(response);
            }

        }
        /// <summary>
        /// 在某些情况下用于更新实体的各个属性。更新大多数实体时，不建议使用此方法。您将在更新模型实体时使用此方法。
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult<T> Put<T>(string requestUri, object data, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            return Put<T>(requestUri, data, null, credentials, timeout);
        }
        /// <summary>
        /// 在某些情况下用于更新实体的各个属性。更新大多数实体时，不建议使用此方法。您将在更新模型实体时使用此方法。
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="reqeustHeaders"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult<T> Put<T>(string requestUri, object data, Action<HttpRequestHeaders> reqeustHeaders, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            using (var client = GetRequestClient())
            {
                if (timeout.HasValue)
                {
                    client.Timeout = timeout.Value;
                }
                if (reqeustHeaders != null)
                {
                    reqeustHeaders(client.DefaultRequestHeaders);
                }
                var response = client.PutAsJsonAsyncWithLog(requestUri, data);
                client.Dispose();
                return HandleApiResult<T>(response);
            }

        }
        /// <summary>
        /// 在更新实体或执行 upsert 操作时使用。
        /// </summary>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult Patch(string requestUri, object data, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            return Patch(requestUri, data, null, credentials, timeout);
        }
        /// <summary>
        /// 在更新实体或执行 upsert 操作时使用。
        /// </summary>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="reqeustHeaders"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult Patch(string requestUri, object data, Action<HttpRequestHeaders> reqeustHeaders, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            using (var client = GetRequestClient())
            {
                if (timeout.HasValue)
                {
                    client.Timeout = timeout.Value;
                }
                if (reqeustHeaders != null)
                {
                    reqeustHeaders(client.DefaultRequestHeaders);
                }
                var response = client.PatchAsJsonAsyncWithLog(requestUri, data);
                client.Dispose();
                return HandleApiResult(response);
            }
        }
        /// <summary>
        /// 在更新实体或执行 upsert 操作时使用。
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult<T> Patch<T>(string requestUri, object data, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            return Patch<T>(requestUri, data, null, credentials, timeout);
        }
        /// <summary>
        /// 在更新实体或执行 upsert 操作时使用。
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="requestUri"></param>
        /// <param name="data"></param>
        /// <param name="reqeustHeaders"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult<T> Patch<T>(string requestUri, object data, Action<HttpRequestHeaders> reqeustHeaders, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            using (var client = GetRequestClient())
            {
                if (timeout.HasValue)
                {
                    client.Timeout = timeout.Value;
                }
                if (reqeustHeaders != null)
                {
                    reqeustHeaders(client.DefaultRequestHeaders);
                }
                var response = client.PatchAsJsonAsyncWithLog(requestUri, data);
                client.Dispose();
                return HandleApiResult<T>(response);
            }

        }
        /// <summary>
        /// 在删除实体或实体的各个属性时使用。
        /// </summary>
        /// <param name="requestUri"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult Delete(string requestUri, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            return Delete(requestUri, null, credentials, timeout);
        }
        /// <summary>
        /// 在删除实体或实体的各个属性时使用。
        /// </summary>
        /// <param name="requestUri"></param>
        /// <param name="reqeustHeaders"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult Delete(string requestUri, Action<HttpRequestHeaders> reqeustHeaders, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            using (var client = GetRequestClient())
            {
                if (timeout.HasValue)
                {
                    client.Timeout = timeout.Value;
                }
                if (reqeustHeaders != null)
                {
                    reqeustHeaders(client.DefaultRequestHeaders);
                }
                var response = client.DeleteAsJsonAsyncWithLog(requestUri);
                client.Dispose();
                return HandleApiResult(response);
            }
        }
        /// <summary>
        /// 在检索数据（包括调用函数）时使用。确保成功检索的预期状态代码为 200 OK。
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="requestUri"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult<T> Get<T>(string requestUri, ICredentials credentials = null, TimeSpan? timeout = null)
        {
            return Get<T>(requestUri, null, credentials, timeout);
        }
        /// <summary>
        /// 在检索数据（包括调用函数）时使用。确保成功检索的预期状态代码为 200 OK。
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="requestUri"></param>
        /// <param name="reqeustHeaders"></param>
        /// <param name="credentials"></param>
        /// <param name="timeout"></param>
        /// <returns></returns>
        public static ApiResult<T> Get<T>(string requestUri, Action<HttpRequestHeaders> reqeustHeaders, ICredentials credentials = null, TimeSpan? timeout = null,string token="")
        {
            using (var client = GetRequestClient(token))
            {
                if (timeout.HasValue)
                {
                    client.Timeout = timeout.Value;
                }
                if (reqeustHeaders != null)
                {
                    reqeustHeaders(client.DefaultRequestHeaders);
                }
                var response = client.GetAsJsonAsyncWithLog(requestUri);
                client.Dispose();
                return HandleApiResult<T>(response);
            }
        }

        #region Helpers

        static void EnsureCredentials(ref ICredentials credentials)
        {
            if (credentials == null)
            {
                credentials = CredentialCache.DefaultNetworkCredentials;
            }
        }
        /// <summary>
        /// 若要模拟用户，请在将请求发送到 Web 服务之前添加一个名为 MSCRMCallerID 且 GUID 值等效于被模拟用户的 systemuserid 的请求头。
        /// </summary>
        /// <param name="requestHeader"></param>
        /// <param name="impersonateUserId"></param>
        static void PrepareImpersonateRequest(HttpRequestHeaders requestHeader, Guid? impersonateUserId)
        {
            if (impersonateUserId.HasValue)
            {
                //lock(crmClient) {
                if (!requestHeader.Contains("MSCRMCallerID"))
                {
                    requestHeader.TryAddWithoutValidation("MSCRMCallerID", impersonateUserId.ToString());
                }
                //}
            }
        }

        static void EnsureResponseContentTypeWithApplicationJson(HttpContent content)
        {
            string mediaType = content.Headers.ContentType.MediaType;
            //TextLogger.WriteLog("mediaType:" + mediaType + " content:" + content.ReadAsStringAsync().Result);
            if (mediaType != "application/json" && mediaType != "text/json")
            {
                throw new Exception("调用CRM接口未能按照预期返回响应媒体类型 \"application/json\" 或 \"text/json\"。");
            }
        }

        static ApiResult HandleApiResult(HttpResponseMessage response)
        {
            var apiResult = new ApiResult();
            if (response != null)
            {
                if (response.Headers != null)
                {
                    apiResult.ResponseHeaders = response.Headers;
                }
                if (response.IsSuccessStatusCode || response.StatusCode == HttpStatusCode.NotModified)
                {
                    apiResult.successed = true;
                }
                else
                {
                    ParseErrorResponse(response, apiResult);
                }

            }
            return apiResult;
        }

        static ApiResult<T> HandleApiResult<T>(HttpResponseMessage response)
        {
            var apiResult = new ApiResult<T>();
            apiResult.ResponseHeaders = response.Headers;
            if (response.IsSuccessStatusCode || response.StatusCode == HttpStatusCode.NotModified)
            {
                EnsureResponseContentTypeWithApplicationJson(response.Content);
                apiResult.data = JsonConvert.DeserializeObject<T>(response.Content.ReadAsStringAsync().Result);
                apiResult.successed = true;
            }
            else
            {
                ParseErrorResponse(response, apiResult);
            }
            return apiResult;
        }

        static void ParseErrorResponse(HttpResponseMessage response, ApiResult apiResult)
        {
            var innerResult2 = response.Content.ReadAsStringAsync().Result;
            if (response.StatusCode == HttpStatusCode.InternalServerError)
            {
                apiResult.code = "InternalServerError";
                apiResult.message = "HTTP 500。请求的资源 “" + response.RequestMessage.RequestUri + "” 在服务器上发生错误。";
            }
            else if (response.StatusCode == HttpStatusCode.NotFound)
            {
                apiResult.code = "ResourceNotFound";
                apiResult.message = "HTTP 404。请求的资源 “" + response.RequestMessage.RequestUri + "” 不在服务器上。";
            }
            else if (response.StatusCode == System.Net.HttpStatusCode.BadGateway)
            {
                apiResult.code = "BadGateway";
                apiResult.message = "HTTP 502。中间代理服务器从另一代理或原始服务器接收到错误响应。";
            }
            else if (response.StatusCode == System.Net.HttpStatusCode.ServiceUnavailable)
            {
                apiResult.code = "ServiceUnavailable";
                apiResult.message = "HTTP 503。CRM接口服务器暂时不可用。";
            }
            else if (response.StatusCode == System.Net.HttpStatusCode.GatewayTimeout)
            {
                apiResult.code = "GatewayTimeout";
                apiResult.message = "HTTP 504。访问统一业务平台接口时，服务器响应超时。";
            }
            else
            {
                try
                {
                    EnsureResponseContentTypeWithApplicationJson(response.Content);
                    //var innerResult = response.Content.ReadAsStringAsync().Result.FromJson<CRMErrorResponse>();
                    var innerResult = JsonConvert.DeserializeObject<CRMErrorResponse>(response.Content.ReadAsStringAsync().Result);
                    if (innerResult != null && innerResult.error != null)
                    {
                        apiResult.code = innerResult.error.code;
                        apiResult.message = innerResult.error.message;
                        if (innerResult.error.innererror != null)
                        {
                            apiResult.stackTrace = innerResult.error.innererror.stacktrace;
                        }
                    }
                }
                catch (Exception exp)
                {
                    apiResult.code = "CRMApiResponseReadError";
                    apiResult.message = exp.Message;
                    apiResult.stackTrace = exp.StackTrace;
                }
            }
        }

        #endregion
        #endregion

        /// <summary>
        /// 列表分页公共方法
        /// </summary>
        /// <typeparam name="T">实体</typeparam>
        /// <param name="entityname">实体名称</param>
        /// <param name="filterstr">筛选条件</param>
        /// <param name="pageSize">分页大小</param>
        /// <param name="pageNum">第几页</param>
        /// <param name="sort">当前排序字段</param>
        /// <param name="oldsort">上一次排序字段</param>
        /// <param name="pagingcookie">pagingcookie</param>
        /// <param name="impersonateUserId">impersonateUserId</param>
        /// <returns></returns>
        public static EntitySet<T> GetPageRecord<T>(string entityname, string filterstr, int pageSize, int pageNum, string sort, string oldsort = null, string pagingcookie = null, Guid? impersonateUserId = null,string token="")
        {

            //更换排序字段需要空 pagingcookie
            if (!string.IsNullOrEmpty(pagingcookie))
            {
                string orderfiled = sort.Replace("*desc", "").Replace("*asc", "");
                if (!(HttpUtility.UrlDecode(pagingcookie).ToLower().Contains(orderfiled.ToLower())))
                {
                    pagingcookie = null;
                    pageNum = 1;
                }
                else
                {//未更改排序字段
                    if (!string.IsNullOrEmpty(oldsort))
                    {
                        if (sort != oldsort)
                        {//升降序
                            pagingcookie = null;
                            pageNum = 1;
                        }
                    }
                }
            }
            sort = sort.Replace("*", " ");
            if (!string.IsNullOrEmpty(filterstr))
            {//可用数据
                filterstr += " and statecode eq 0";
            }
            else
            {
                filterstr = "&$filter=statecode eq 0";
            }
            string queryUri = string.Format("{0}?$select=*&$orderby=" + sort + "&$count=true{1}", entityname, filterstr);
            //分页cookie
            if (!string.IsNullOrEmpty(pagingcookie))
            {
                string skiptoken = "<cookie pagenumber=\"" + pageNum + "\" pagingcookie=\"" + pagingcookie + "\" istracking=\"False\" />";
                //Infrastructure.Logging.TextLogger.WriteLog("NEOCRM.Unicustview", entityname + "-" + pageNum + "-" + skiptoken);
                skiptoken = System.Web.HttpUtility.UrlEncode(skiptoken);

                queryUri += "&$skiptoken=" + skiptoken;
            }

            //Infrastructure.Logging.TextLogger.WriteLog("NEOCRM.Unicustview", entityname + "-" + pageNum + "-" + queryUri);
            var apiResult = Get<EntitySet<T>>(queryUri,
               (header) => {
                   header.TryAddWithoutValidation("Prefer", ("odata.maxpagesize=" + pageSize));
                   if (impersonateUserId.HasValue)
                   {
                       header.TryAddWithoutValidation("MSCRMCallerID", impersonateUserId.ToString());
                   }
                   else
                   {
                       header.TryAddWithoutValidation("MSCRMCallerID", CommonSettings.IMPersonateUserId);
                   }
                   if (!string.IsNullOrEmpty(token))
                   {
                       header.TryAddWithoutValidation("Authorization", $"Bearer {token}");
                   }
               },token: token);
            //var headers = new Dictionary<string, string>();
            //headers.Add("Prefer", ("odata.maxpagesize=" + pageSize));
            //headers.Add("MSCRMCallerID", impersonateUserId.ToString());
            //var apiResult = CRMApiHelper.Get<EntitySet<T>>(queryUri, headers);

            apiResult.EnsureSuccessful();
            var result = apiResult.data;
            result.pagenum = pageNum;
            if (string.IsNullOrEmpty(result.nextLink) && !string.IsNullOrEmpty(pagingcookie))
            {
                result.nextLink = "$nextLink$" + pagingcookie;
            }
            return result;
        }

        #region 公共方法
        /// <summary>
        /// An upsert operation is exactly like an update. It uses a PATCH request and uses a URI to reference a specific entity. The difference is that if the entity doesn’t exist it will be created. If it already exists, it will be updated. Normally when creating a new entity you will let the system assign a unique identifier. This is a best practice. But if you need to create a record with a specific id value, an upsert operation provides a way to do this. This can be valuable in situation where you are synchronizing data in different systems. However, there are situations where you want to use upsert, but you will want to prevent one of the potential default actions: create or update.
        /// </summary>
        /// <param name="entityId"></param>
        /// <param name="entityCode"></param>
        /// <param name="data"></param>
        /// <param name="impersonateUserId"></param>
        public static ApiResult Upsert(Guid entityId, string entityCode, object data, Guid? impersonateUserId = null)
        {
            string requestUri = string.Format("{0}({1})", entityCode, entityId);
            ApiResult apiResult;
            if (entityId == Guid.Empty)
            {
                //新增 Post
                apiResult = Post(entityCode, data);
                apiResult.EnsureSuccessful();
            }
            else
            {
                //更新
                apiResult = Patch(requestUri, data);
                apiResult.EnsureSuccessful();
            }
            return apiResult;
        }

        
        #endregion
    }

}
