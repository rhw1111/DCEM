using System;

namespace MSLibrary.Xrm
{
	public static class ApiResultExtentions {
		/// <summary>
		/// 确保 ApiResult.successed 返回True，否则抛出。
		/// </summary>
		/// <param name="apiResult"></param>
		public static void EnsureSuccessful(this ApiResult apiResult) {
			if(apiResult == null) {
				throw new ArgumentNullException("apiResult");
			}
			if(!apiResult.successed) {
				throw new Exception(apiResult.message);
			}
		}
	}
}
