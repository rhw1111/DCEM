using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Request
{
    public class PageBaseRequestModel: BaseRequest
    {
        private int _pageSize { set; get; }
        private int _page { set; get; }
        public PageBaseRequestModel() {
            this._pageSize = 10;
            this._page = 1;
        }
        /// <summary>
        /// 排序
        /// </summary>
        public string Sort
        {
            set; get;
        }

        /// <summary>
        /// 每页条数
        /// </summary>
        public int PageSize
        {
            get
            {
                return _pageSize;
            }
            set
            {
                _pageSize = value;
            }
        }

        /// <summary>
        /// 页数
        /// </summary>
        public int PageIndex
        {
            get
            {
                return _page;
            }
            set
            {
                _page = value;
            }
        }
    }
}
