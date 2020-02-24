using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;

namespace PALibrary
{
    /// <summary>
    /// PAEntity的实体基类
    /// 所有基于PAEntity的实体都必须继承该类
    /// </summary>
    public abstract class PAEntityBase<T> : EntityBase<T>
    {
        /// <summary>
        /// PAEntity对应的记录
        /// </summary>
        public Entity EntityRecord
        {
            get
            {
                return GetAttribute<Entity>("EntityRecord");
            }
            set
            {
                SetAttribute<Entity>("EntityRecord", value);
            }
        }
    }
}
