﻿/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：MSCRM.Common.Enums
*   文件名称    ：OrderSourceEnum.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/9/10 15:53:26 
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


namespace DCEM.Main
{
    /// <summary>
    /// 订单来源
    /// </summary>
    public enum OrderSourceEnum
    {
        /// <summary>
        /// 其它
        /// </summary>
        Other = 0,

        /// <summary>
        /// 商城
        /// </summary>
        Mall = 1,

        /// <summary>
        /// 商城-PC
        /// </summary>
        Mall_PC = 2,

        /// <summary>
        /// 商城-APP
        /// </summary>
        Mall_APP = 3,

        /// <summary>
        /// 商城-小程序
        /// </summary>
        Mall_SmallProcedures = 4
    }
}