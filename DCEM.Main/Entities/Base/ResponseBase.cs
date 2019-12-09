namespace DCEM.Main.Entities
{
    /// <summary>
    /// 响应DTO实体类的基类
    /// </summary>  
    public class ResponseBase
    {
        public ResponseBase()
        {
            Code = "000";
            Message = "成功响应";
        }

        /// <summary>
        /// 返回编码，200之外的值都表示有错误
        /// </summary>     
        public string Code { get; set; }

        /// <summary>
        /// 返回的消息
        /// </summary>     
        public string Message { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="message"></param>
        public virtual void Error(string message)
        {
            Code = "-1";
            Message = message;
        }
    }
}
