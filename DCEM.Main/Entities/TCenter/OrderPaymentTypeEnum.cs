/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：MSCRM.Common.Enums
*   文件名称    ：OrderPaymentTypeEnum.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/10/12 16:42:17 
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


using System;
using System.ComponentModel;
using System.Reflection;

namespace DCEM.Main
{
    /// <summary>
    /// 
    /// </summary>
    public enum OrderPaymentTypeEnum
    {
        /// <summary>
        /// 现金支付
        /// </summary>
        [Description("现金支付")]
        CashPayment = 1,

        /// <summary>
        /// 积分支付
        /// </summary>
        [Description("积分支付")]
        IntegralPayment = 2,

        /// <summary>
        /// 权益项抵扣
        /// </summary>
        [Description("权益项抵扣")]
        EquityDeduction = 3
    }

    /// <summary>
    /// 枚举扩展
    /// </summary>
    public static class EnumExtensions
    {
        /// <summary>
        /// 获取错误消息类型对应的描述信息
        /// </summary>
        /// <param name="messageType">错误消息类型定义枚举</param>
        /// <returns></returns>
        public static string GetDescriptionText(this Enum messageType)
        {
            string text = string.Empty;
            try
            {
                FieldInfo field = messageType.GetType().GetField(messageType.ToString());
                text = (field.GetCustomAttributes(typeof(DescriptionAttribute), true)[0] is DescriptionAttribute descriptionAttribute) ? descriptionAttribute.Description : "";
            }
            catch (Exception)
            {

            }
            return text;
        }
    }
}