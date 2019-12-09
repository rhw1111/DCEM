/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Request.OrderManager
*   文件名称    ：OrderManagerFinancialRequest.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/10/31 9:52:55 
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


namespace DCEM.Main.Entities.Request.OrderManager
{
    /// <summary>
    /// 订单技能方案信息
    /// </summary>
    public class OrderManagerFinancialRequest
    {
        /// <summary>
        /// 金融方案编码
        /// </summary>
        public string Code { get; set; }

        /// <summary>
        /// 金融方案类型
        /// </summary>
        public FinancialServiceTypeEnum ServiceType { get; set; }

        /// <summary>
        /// 金融方案描述
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// 期限（单位：月）
        /// </summary>
        public int Terms { get; set; }

        /// <summary>
        /// 首付金额
        /// </summary>
        public decimal DownPayment { get; set; }

        /// <summary>
        /// 贷款金额
        /// </summary>
        public decimal LoanAmount { get; set; }

        /// <summary>
        /// 尾付比例
        /// </summary>
        public decimal FinalPayment { get; set; }

        /// <summary>
        /// 月供
        /// </summary>
        public decimal AmountMonthly { get; set; }
    }
}