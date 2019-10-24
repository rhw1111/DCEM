using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.ServiceAssistantService.Main.DTOModel
{
    public class CustomerQueryListResponse<T>
    {
        public CustomerQueryListResponse()
        {
            Results = new List<T>();
        }

        /// <summary>
        /// 当前页
        /// </summary>
        public int CurrentPage { get; set; }
        /// <summary>
        /// 总记录数
        /// </summary>
        public int ALLTotalCount { get; set; }
        /// <summary>
        /// 保修到期数量
        /// </summary>
        public int WarrantyTotalCount { get; set; }
        /// <summary>
        /// 保修到期数量
        /// </summary>
        public int InsuranceTotalCount { get; set; }
        /// <summary>
        /// 记录集
        /// </summary>
        public List<T> Results { get; set; }
    }
}
