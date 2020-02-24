using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary
{
    /// <summary>
    /// 操作符
    /// </summary>
    public enum Operators
    {
        Equal = 0,
        NotEqual = 1,
        Null = 2,
        NoNull = 3,
        GreaterEqual = 4,
        GreaterThan = 5,
        LessEqual = 6,
        LessThan = 7
    }

    /// <summary>
    /// 逻辑操作
    /// </summary>
    public enum LogicOperators
    {
        And,
        Or
    }

    /// <summary>
    /// 权限类型
    /// </summary>
    [Flags]
    public enum PrivilegeTypes
    {
        Create = 32,
        Read = 1,
        Write = 2,
        Delete = 65536,
        Assign = 5242882,
        Share = 262144,
        Append = 4,
        AppendTo = 16
    }

    /// <summary>
    /// 权限深度
    /// </summary>
    [Flags]
    public enum PrivilegeDepths
    {
        None = 0,
        Basic = 1,
        Local = 2,
        Deep = 4,
        Global = 8
    }
}
