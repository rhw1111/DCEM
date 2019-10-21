using System;
using System.Configuration;
namespace MSLibrary.Xrm
{
	public class CommonSettings {
		/// <summary>
		/// 获取是否开发调试模式。
		/// </summary>
		public static bool IsDev {
			get {
				bool isDev = false;
				string dev = ConfigurationManager.AppSettings["isdev"];
				return bool.TryParse(dev, out isDev) && isDev;
			}
		}		
		/// <summary>
		/// 域
		/// </summary>
		public static string Domain {
			get { return "subcrmdev"; }
		}

		#region CRM WebAPI Configuration

		/// <summary>
		///  CRM Web地址。
		/// </summary>
		public static string CRMBaseAddress {
			get { return "https://subcrmdev.sokon.com/"; }
		}


		/// <summary>
		/// 获取CRM WebAPI接口地址。
		/// </summary>
		public static string CRMApiBaseAddress {
			get { return "https://subcrmdev.sokon.com/api/data/v8.2/"; }
		}

        public static string IMPersonateUserId
        {
            get { return "6f2cbc9f-69f7-e811-a81f-8be49105c1ad"; }
        }
        #endregion

    }
}
