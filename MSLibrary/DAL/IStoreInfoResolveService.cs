using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;

namespace MSLibrary.DAL
{
    /// <summary>
    /// 存储信息解析服务
    /// 负责将一个含有存储信息的字符串解析为格式化数据
    /// </summary>
    public interface IStoreInfoResolveService
    {
        /// <summary>
        /// 解析成结果
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>
        Task<StoreInfo> Execute(string info);
        /// <summary>
        /// 解析结果（同步）
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>
        StoreInfo ExecuteSync(string info);

    }

    /// <summary>
    /// 存储信息
    /// </summary>
    [DataContract]
    public class StoreInfo
    {
        /// <summary>
        /// 数据库连接信息
        /// </summary>
        [DataMember]
        public DBConnectionNames DBConnectionNames { get; set; }
        /// <summary>
        /// 数据库表名称键值对
        /// 键为实体名称
        /// </summary>
        [DataMember]
        public Dictionary<string, string> TableNames { get; set; }
    }

    /// <summary>
    /// 数据库连接名称
    /// </summary>
    [DataContract]
    public class DBConnectionNames
    {
        /// <summary>
        /// 读写库的连接名称
        /// </summary>
        [DataMember]
        public string ReadAndWrite { get; set; }
        /// <summary>
        /// 只读库的连接名称
        /// </summary>
        [DataMember]
        public string Read { get; set; }
    }
}
