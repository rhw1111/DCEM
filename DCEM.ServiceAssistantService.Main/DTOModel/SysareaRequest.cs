using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
  public   class SysareaRequest
    {
        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string search { get; set; }
        /// <summary>
        /// 父id
        /// </summary>
        public string pid { get; set; }
        /// <summary>
        /// 行政区域级别  0全球；1国家；2省份；3城市；4地区
        /// </summary>
        public string level { get; set; }

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
