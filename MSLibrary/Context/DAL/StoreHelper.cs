using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.Common;
using Microsoft.Data.Sql;
using Microsoft.Data.SqlClient;

namespace MSLibrary.Context.DAL
{
    /// <summary>
    /// 数据操作帮助类
    /// 帮助每个实体统一查询
    /// </summary>
    public static class StoreHelper
    {
        /// <summary>
        /// 获取序列号记录的数据查询的字段字符串
        /// </summary>
        /// <param name="prefix"></param>
        /// <returns></returns>
        public static string GetHttpClaimGeneratorSelectFields(string prefix)
        {
           
            var strSelect = @"{0}.[id] as [{0}id],{0}.[prefix] as [{0}prefix],{0}.[createtime] as [{0}createtime],{0}.[modifytime] as [{0}modifytime],{0}.[sequence] as [{0}sequence]";
            if (string.IsNullOrEmpty(prefix))
            {
                strSelect = @"[id],[prefix],[createtime],[modifytime],[sequence]";
            }
            return string.Format(strSelect, prefix);
        }

        /// <summary>
        /// 为序列号记录从DbDataReader中赋值
        /// </summary>
        /// <param name="record"></param>
        /// <param name="reader"></param>
        /// <param name="prefix"></param>
        public static void SetHttpClaimGeneratorSelectFields(HttpClaimGenerator generator, DbDataReader reader, string prefix)
        {
            /*record.ID = (Guid)reader[string.Format("{0}id", prefix)];

            if (reader[string.Format("{0}prefix", prefix)] != DBNull.Value)
            {
                record.Prefix = reader[string.Format("{0}prefix", prefix)].ToString();
            }

            if (reader[string.Format("{0}createtime", prefix)] != DBNull.Value)
            {
                record.CreateTime = (DateTime)reader[string.Format("{0}createtime", prefix)];
            }

            if (reader[string.Format("{0}modifytime", prefix)] != DBNull.Value)
            {
                record.ModifyTime = (DateTime)reader[string.Format("{0}modifytime", prefix)];
            }*/
        }

    }
}
