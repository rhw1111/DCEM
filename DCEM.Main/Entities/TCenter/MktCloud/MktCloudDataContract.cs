/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：MSCRM.Common.MktCloud
*   文件名称    ：MktCloudDataContract.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/10/15 18:08:18 
*   邮    箱    ：litingxian@live.cn
*   个人主站    ：https://github.com/tingli1991
*   功能描述    ：
*   使用说明    ：
*   ========================================================================
*   修改者      ：
*   修改日期    ：
*   修改内容    ：
*   ========================================================================
*  
***************************************************************************/


using Newtonsoft.Json;
using System.Collections.Generic;

namespace DCEM.Main.Entities.TCenter.MktCloud
{
    /// <summary>
    /// 营销云接口返回基础参数
    /// </summary>
    public class MktCloudDataContract
    {
        /// <summary>
        /// true或者false
        /// </summary>
        [JsonProperty("success")]
        public string Success { get; set; }

        /// <summary>
        /// 数据总条数
        /// </summary>
        [JsonProperty("total")]
        public int Total { get; set; }

        /// <summary>
        /// 处理状态：
        /// SUCCESS: 订单状态更新成功
        /// FAIL: 订单状态更新失败
        /// </summary>
        [JsonProperty("msgCode")]
        public string MsgCode { get; set; }

        /// <summary>
        /// 处理消息
        /// </summary>
        [JsonProperty("msg")]
        public string Message { get; set; }

        /// <summary>
        /// 设置错误信息
        /// </summary>
        /// <param name="message"></param>
        public void Error(string message)
        {
            MsgCode = "-1";
            Success = "false";
            Message = message;
        }

        /// <summary>
        /// 
        /// </summary>
        public void OK()
        {
            MsgCode = "000";
            Success = "true";
            Message = "操作成功";
        }
    }

    /// <summary>
    /// 营销云接口返回基础参数
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class MktCloudDataContract<T> : MktCloudDataContract
    {
        /// <summary>
        /// 接口返回值
        /// </summary>
        [JsonProperty("resp")]
        public List<T> Data { get; set; }
    }
}