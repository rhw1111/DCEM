using Microsoft.AspNetCore.Http;
using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace MSLibrary.Xrm
{
	/// <summary>
	/// used to consume dynamics crm webapi.
	/// </summary>
	public class CRMClient : HttpClient {
		static readonly TimeSpan DefaultTimeout = TimeSpan.FromMinutes(5);
		public CRMClient()
			: this(DefaultTimeout) {
		}
		public CRMClient(TimeSpan? timeout, string token = "")
			: this(new HttpClientHandler() {
				Credentials = CredentialCache.DefaultNetworkCredentials
			}, true, timeout, token) {
		}

		public CRMClient(HttpMessageHandler handler, bool disposeHandler, TimeSpan? timeout = null,string token="")
			: base(handler, disposeHandler) {
			BaseAddress = new Uri(CommonSettings.CRMApiBaseAddress);
			Timeout = timeout ?? DefaultTimeout;
			DefaultRequestHeaders.Clear();
            DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
			DefaultRequestHeaders.TryAddWithoutValidation("OData-MaxVersion", "4.0");
			DefaultRequestHeaders.TryAddWithoutValidation("OData-Version", "4.0");
            if (!string.IsNullOrEmpty(token))
            {
                //DefaultRequestHeaders.Add("Authorization", $"Bearer {token}");
                //DefaultRequestHeaders.Add("token", token);
                //DefaultRequestHeaders.Add("token_type", "bearer");
            }
        }



		//#region PATCH Method

		//public Task<HttpResponseMessage> PatchAsync(Uri requestUri, HttpContent content) {
		//	return SendAsync(new HttpRequestMessage(HttpMethods.IsTrace, requestUri) { Content = content });
		//}

		//public Task<HttpResponseMessage> PatchAsync(Uri requestUri, HttpContent content, CancellationToken cancellationToken) {
		//	return SendAsync(new HttpRequestMessage(HttpMethods.Patch, requestUri) { Content = content }, cancellationToken);
		//}

		//public Task<HttpResponseMessage> PatchAsync(string requestUri, HttpContent content) {
		//	return SendAsync(new HttpRequestMessage(HttpMethods.Patch, requestUri) { Content = content });
		//}

		//public Task<HttpResponseMessage> PatchAsync(string requestUri, HttpContent content, CancellationToken cancellationToken) {
		//	return SendAsync(new HttpRequestMessage(HttpMethods.Patch, requestUri) { Content = content }, cancellationToken);
		//}

		//#endregion
	}
}
