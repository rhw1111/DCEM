//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.ViewModel.Request
{
    using System;
    using System.Collections.Generic;
    using MSLibrary.Xrm;
    using static DCEM.UserCenterService.Main.Common.UserEnum;

    public class ContentListRequest : PageBaseRequestModel
    {
        public ContentType Type { get; set; }
    }

    public class ContentDetailRequest
    {
        public ContentType Type { get; set; }
        public Guid? Id { get; set; }
        /// <summary>
        /// 用于前端内容的唯一码
        /// </summary>
        public string DefCode { get; set; }
    }

    public class ContentPageRequest
    {
        public ContentType Type { get; set; }
        public Guid? Id { get; set; }
    }


    public class CategoryListRequest
    {
        public string  Type { get; set; }

    }
}
