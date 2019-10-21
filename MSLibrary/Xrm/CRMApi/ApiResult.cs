using System.Net.Http.Headers;
namespace MSLibrary.Xrm
{
	/// <summary>
	/// 定义WebAPI请求响应对象封装。
	/// </summary>
	public class ApiResult {
		/// <summary>
		/// 构造函数。
		/// </summary>
		public ApiResult() { }
		/// <summary>
		/// 标识请求操作是否成功。
		/// </summary>
		/// <remarks>
		/// 当返回为false时，可参照 code（错误代码）、message（错误消息）。
		/// </remarks>
		public bool successed { get; set; }
		/// <summary>
		/// 错误代码。
		/// </summary>
		public string code { get; set; }
		/// <summary>
		/// 错误消息。
		/// </summary>
		public string message { get; set; }
		/// <summary>
		/// 错误堆栈。
		/// </summary>
		public string stackTrace { get; set; }
		/// <summary>
		/// 请求响应头。
		/// </summary>
		public HttpResponseHeaders ResponseHeaders { get; set; }
	}
	/// <summary>
	/// 定义WebAPI请求响应对象封装。
	/// </summary>
	/// <typeparam name="T"></typeparam>
	public class ApiResult<T> : ApiResult {
		/// <summary>
		/// 构造函数。
		/// </summary>
		public ApiResult() : base() { }
		/// <summary>
		/// 响应数据对象。
		/// </summary>
		public T data { get; set; }
	}
}
