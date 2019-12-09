using System.Collections.Generic;

namespace DCEM.Main.Entities
{
    /// <summary>
    /// 执行处理结果返回参数
    /// </summary>   
    public class ExcuteResutResponse : ResponseBase
    {
        /// <summary>
        /// 是否成功
        /// </summary>
        public bool IsSuccess { set; get; }

        /// <summary>
        /// 设置错误信息
        /// </summary>
        /// <param name="message"></param>
        public void Error(string message)
        {
            Code = "-1";
            IsSuccess = false;
            Message = message;
        }

        /// <summary>
        /// 
        /// </summary>
        public void OK()
        {
            Code = "000";
            IsSuccess = true;
            Message = "操作成功";
        }
    }

    /// <summary>
    /// 
    /// </summary>
    public class ProductResutResponse : ResponseBase
    {
        public List<SkuStock> Data { get; set; }
    }
}