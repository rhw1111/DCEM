using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class RepairItemTypeRequest
    {
        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string search { get; set; }

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
