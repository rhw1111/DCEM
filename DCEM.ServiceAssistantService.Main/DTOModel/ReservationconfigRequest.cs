﻿using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
  public   class ReservationconfigRequest
    {
        /// <summary>
        /// 搜索框参数
        /// </summary>
        public string search { get; set; }

        /// <summary>
        /// 厅店
        /// </summary>
        public string dealerid { get; set; }


        /// <summary>
        /// 基本车型
        /// </summary>
        public string carmodel { get; set; }

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