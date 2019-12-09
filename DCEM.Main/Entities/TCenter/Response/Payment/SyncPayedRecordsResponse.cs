/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Response.Payment
*   文件名称    ：SyncPayedRecordsResponse.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/20 14:25:42 
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


namespace DCEM.Main.Entities.Response.Payment
{
    /// <summary>
    /// 订单同步接口返回值
    /// </summary>
    public class SyncPayedRecordsResponse : ResponseBase
    {
        /// <summary>
        /// 业务是否处理成功
        /// </summary>
        public bool IsSuccess { get; set; } = true;

        /// <summary>
        /// 
        /// </summary>
        /// <param name="message"></param>
        public override void Error(string message)
        {
            IsSuccess = false;
            base.Error(message);
        }
    }
}