///**************************************************************************
//*   
//*   =======================================================================
//*   CLR 版本    ：4.0.30319.42000
//*   命名空间    ：MSCRM.Common.MktCloud
//*   文件名称    ：MktCloudHttpClient.cs
//*   =======================================================================
//*   创 建 者    ：李廷礼
//*   创建日期    ：2019/11/7 9:40:02 
//*   邮    箱    ：litingxian@live.cn
//*   个人主站    ：https://github.com/tingli1991
//*   功能描述    ：
//*   使用说明    ：
//*   ========================================================================
//*   修改者      ：
//*   修改日期    ：
//*   修改内容    ：
//*   ========================================================================
//*  
//***************************************************************************/


//using ExcelDataReader.Log;
//using Newtonsoft.Json;
//using Newtonsoft.Json.Converters;
//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Linq;
//using System.Net;
//using System.Text;

//namespace DCEM.Main.Entities.TCenter.MktCloud
//{
//    /// <summary>
//    /// 
//    /// </summary>
//    public class MktCloudHttpClient
//    {
//        /// <summary>
//        /// 日志记录器
//        /// </summary>
//        private static readonly ILog _log = LogManager.Log(typeof(MktCloudHttpClient));

//        /// <summary>
//        /// Post请求
//        /// </summary>
//        /// <typeparam name="T"></typeparam>
//        /// <param name="url"></param>
//        /// <param name="param"></param>
//        /// <param name="headers"></param>
//        /// <returns></returns>
//        public static T Post<T>(string url, object param, Dictionary<string, string> headers = null)
//        {
//            T result = default(T);
//            try
//            {
//                Encoding encoding = Encoding.UTF8;
//                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
//                request.Method = "post";
//                request.ContentType = "application/json";
//                if (headers != null && headers.Any())
//                {
//                    foreach (var header in headers)
//                    {
//                        request.Headers.Add(header.Key, header.Value);
//                    }
//                }

//                IsoDateTimeConverter timeConverter = new IsoDateTimeConverter { DateTimeFormat = "yyyy-MM-dd HH:mm:ss" };
//                string jsonValue = JsonConvert.SerializeObject(param, Formatting.Indented, timeConverter);
//                byte[] buffer = encoding.GetBytes(jsonValue);
//                request.ContentLength = buffer.Length;
//                request.GetRequestStream().Write(buffer, 0, buffer.Length);
//                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
//                using (StreamReader reader = new StreamReader(response.GetResponseStream(), encoding))
//                {
//                    //读取全部
//                    var responseJsonValue = reader.ReadToEnd();
//                    if (!string.IsNullOrEmpty(responseJsonValue))
//                    {
//                        //返回结果反序列化
//                        result = JsonConvert.DeserializeObject<T>(responseJsonValue);
//                    }
//                }
//            }
//            catch (Exception ex)
//            {
//                _log.Error($"【营销云接口调用】发生未经处理的异常：{ex}");
//            }
//            return result;
//        }
//    }
//}