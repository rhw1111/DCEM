using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MSCRM.TC.Entity.CenterCoreDB
{

    public class CategoryEntity
    {
        /// <summary>
        /// 类目id 
        /// </summary>
        public string ProductCategoryId { get; set; }
        /// <summary>
        /// 父级类目。默认值0表示根节点（暂无）
        /// </summary>
        public int ParentId { get; set; }
        /// <summary>
        /// 类目名称 
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 类目显示名称
        /// </summary>
        public string DisplayName
        {
            get
            {
                return Name;
            }
        }
        /// <summary>
        /// 类目显示Tip
        /// </summary>
        public string DisplayTip { get; set; }
        /// <summary>
        /// 类目显示排序
        /// </summary>
        public int SortNumber { get; set; }
        /// <summary>
        /// 预留广告链接（暂无）
        /// </summary>
        [Obsolete]
        public string adurl { get; set; }
        /// <summary>
        /// 类目编码
        /// </summary>
        public Guid rowguid { get; set; }

    }
}
