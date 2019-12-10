namespace DCEM.Main.Entities
{
    /// <summary>
    /// 订单定金支付记录同步返回参数
    /// </summary>
    public class SyncPayedRecordsResponse : ResponseBase
    {
        /// <summary>
        /// 是否成功
        /// </summary>
        public bool IsSuccess { set; get; }
    }
}
