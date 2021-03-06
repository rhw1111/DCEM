﻿/**************************************************************************
*   
*   =======================================================================
*   CLR 版本    ：4.0.30319.42000
*   命名空间    ：DCEM.Main.Entities.Response
*   文件名称    ：PublishChannelResponse.cs
*   =======================================================================
*   创 建 者    ：李廷礼
*   创建日期    ：2019/10/15 10:36:20 
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


namespace DCEM.Main.Entities.Response
{
    /// <summary>
    /// 商品发布渠道
    /// </summary>
    public class PublishChannelResponse
    {
        /// <summary>
        /// 渠道编码
        /// </summary>
        public string ChannelCode { get; set; }

        /// <summary>
        /// 渠道编码
        /// </summary>
        public string ChannelName { get; set; }
    }
}