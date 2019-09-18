using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MSLibrary.Logger
{
    /// <summary>
    /// 表示通用日志
    /// </summary>
    public class CommonLog : EntityBase<ICommonLogIMP>
    {
        private static IFactory<ICommonLogIMP> _commonLogIMPFactory;

        public static IFactory<ICommonLogIMP> CommonLogIMPFactory
        {
            set
            {
                _commonLogIMPFactory = value;
            }
        }


        public override IFactory<ICommonLogIMP> GetIMPFactory()
        {
            return _commonLogIMPFactory;
        }


        /// <summary>
        /// Id
        /// </summary>
        public Guid ID
        {
            get
            {

                return GetAttribute<Guid>("ID");
            }
            set
            {
                SetAttribute<Guid>("ID", value);
            }
        }

        /// <summary>
        /// 父记录ID
        /// </summary>
        public Guid ParentID
        {
            get
            {

                return GetAttribute<Guid>("ParentID");
            }
            set
            {
                SetAttribute<Guid>("ParentID", value);
            }
        }

        /// <summary>
        /// 上下文信息
        /// </summary>
        public string ContextInfo
        {
            get
            {
                return GetAttribute<string>("ContextInfo");
            }
            set
            {
                SetAttribute<string>("ContextInfo", value);
            }
        }

        /// <summary>
        /// 动作名称
        /// </summary>
        public string ActionName
        {
            get
            {
                return GetAttribute<string>("ActionName");
            }
            set
            {
                SetAttribute<string>("ActionName", value);
            }
        }

        /// <summary>
        /// 父动作名称
        /// </summary>
        public string ParentActionName
        {
            get
            {
                return GetAttribute<string>("ParentActionName");
            }
            set
            {
                SetAttribute<string>("ParentActionName", value);
            }
        }


        /// <summary>
        /// 请求内容
        /// </summary>
        public string RequestBody
        {
            get
            {
                return GetAttribute<string>("RequestBody");
            }
            set
            {
                SetAttribute<string>("RequestBody", value);
            }
        }

        /// <summary>
        /// 请求路径
        /// </summary>
        public string RequestUri
        {
            get
            {
                return GetAttribute<string>("RequestUri");
            }
            set
            {
                SetAttribute<string>("RequestUri", value);
            }
        }


        /// <summary>
        /// 内容
        /// </summary>
        public string Message
        {
            get
            {
                return GetAttribute<string>("Message");
            }
            set
            {
                SetAttribute<string>("Message", value);
            }
        }

        /// <summary>
        /// 是否是根日志
        /// </summary>
        public bool Root
        {
            get
            {
                return GetAttribute<bool>("Root");
            }
            set
            {
                SetAttribute<bool>("Root", value);
            }
        }
        /// <summary>
        /// 日志级别
        //Trace = 0,
        //Debug = 1,
        //Information = 2,
        //Warning = 3,
        //Error = 4,
        //Critical = 5,
        //None = 6
        /// </summary>
        public int Level
        {
            get
            {
               
                return GetAttribute<int>("Level");
            }
            set
            {
                SetAttribute<int>("Level", value);
            }
        }


        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateTime
        {
            get
            {
                return GetAttribute<DateTime>("CreateTime");
            }
            set
            {
                SetAttribute<DateTime>("CreateTime", value);
            }
        }

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime ModifyTime
        {
            get
            {
                return GetAttribute<DateTime>("ModifyTime");
            }
            set
            {
                SetAttribute<DateTime>("ModifyTime", value);
            }
        }
    }

    public interface ICommonLogIMP
    {
        Task Add(CommonLog log);
    }
}
