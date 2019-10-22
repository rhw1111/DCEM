using Microsoft.AspNetCore.Http;
using System;
using System.Diagnostics;
using System.Globalization;
using System.Net.Http;
using Newtonsoft.Json;

namespace MSLibrary.Xrm
{
	public static class CRMClientExtentions {

		public static HttpResponseMessage PostAsJsonAsyncWithLog(this CRMClient client, string requestUri, object data) {
			return SendAsJsonAsyncWithLog(client, HttpMethod.Post, requestUri, data);
		}
		public static HttpResponseMessage PutAsJsonAsyncWithLog(this CRMClient client, string requestUri, object data) {
			return SendAsJsonAsyncWithLog(client, HttpMethod.Put, requestUri, data);
		}
		public static HttpResponseMessage PatchAsJsonAsyncWithLog(this CRMClient client, string requestUri, object data) {
			return SendAsJsonAsyncWithLog(client, HttpMethod.Patch, requestUri, data);
		}

		public static HttpResponseMessage DeleteAsJsonAsyncWithLog(this CRMClient client, string requestUri) {
			return SendAsJsonAsyncWithLog(client, HttpMethod.Delete, requestUri, null);
		}
		public static HttpResponseMessage GetAsJsonAsyncWithLog(this CRMClient client, string requestUri) {
			return SendAsJsonAsyncWithLog(client, HttpMethod.Get, requestUri, null);
		}
		static HttpResponseMessage SendAsJsonAsyncWithLog(CRMClient client, HttpMethod httpMethod, string requestUri, object data) {

			HttpContent content = null;

			if(data != null) {
				content = new StringContent(JsonConvert.SerializeObject(data), System.Text.Encoding.UTF8, "application/json");
			}

			//Infrastructure.Logging.TextLogger.WriteLog("BaseAddress:" + client.BaseAddress + " requestUri:" + requestUri + "  data:" + data.ToJson());
			HttpResponseMessage response = null;
			try {
				switch(httpMethod.Method) {
					case "POST":
						response = client.PostAsync(requestUri, content).Result;
						break;
					case "PUT":
						response = client.PutAsync(requestUri, content).Result;
						break;
					case "PATCH":
						response = client.PatchAsync(requestUri, content).Result;
						break;
					case "DELETE":
						response = client.DeleteAsync(requestUri).Result;
						break;
					case "GET":
						response = client.GetAsync(requestUri).Result;
						break;
					default:
						throw new Exception("Method Not Allowed");
				}
			}
			catch(AggregateException ae) {
				
				foreach(var ex in ae.InnerExceptions) {
					
				}
				throw;
			}
			finally {
			}
			return response;
		}

		static string ReadHttpContentAsString(HttpContent content) {
			string contentString = "";
			try {
				using(var stream = content.ReadAsStreamAsync().Result) {
					stream.Seek(0, System.IO.SeekOrigin.Begin);
					using(var reader = new System.IO.StreamReader(stream)) {
						contentString = reader.ReadToEnd();
					}
				}
			}
			catch { }
			return contentString;
		}

	}
}
