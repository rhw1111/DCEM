using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.DTOModel
{
    public class PageBaseModel
    {
        /// <summary>
        /// 排序
        /// </summary>
        public string sort { get; set; }

        /// <summary>
        /// 每页条数
        /// </summary>
        public int pageSize { get; set; }

        /// <summary>
        /// 页数
        /// </summary>
        public int page { get; set; }
    }
}
