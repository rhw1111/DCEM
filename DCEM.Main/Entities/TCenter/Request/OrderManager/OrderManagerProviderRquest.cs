/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Request.OrderManager
*   文件名称    ：OrderManagerProviderRquest.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/10 11:26:20 
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
    /// 订单管理-创建订单-产品列表-订单履约属性信息
    /// </summary>
    public class OrderManagerProviderRquest
    {
        ///<summary>
        ///	履约实例编号	
        ///</summary> 
        public string ProviderInstanceCode { get; set; }

        ///<summary>
        ///	履约参数编号
        ///</summary> 
        public string ProviderCode { get; set; }

        ///<summary>
        ///	履约参数值
        ///</summary> 
        public string ProviderValue { get; set; }
    }
}