﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Data.Common;

namespace MSLibrary.Logger.DAL
{
    /// <summary>
    /// 数据存储帮助类
    /// 统一管理查询赋值
    /// </summary>
    public static class StoreHelper
    {
        /// <summary>
        /// 通用日志实体的赋值
        /// </summary>
        /// <param name="log"></param>
        /// <param name="reader"></param>
        /// <param name="prefix"></param>
        public static void SetCommonLogSelectFields(CommonLog log, DbDataReader reader, string prefix)
        {
            log.ID = (Guid)reader[string.Format("{0}id", prefix)];
            log.ParentID= (Guid)reader[string.Format("{0}parentid", prefix)];
            log.PreviousID = (Guid)reader[string.Format("{0}previousid", prefix)];
            log.ContextInfo = reader[string.Format("{0}contextinfo", prefix)].ToString();
            log.ActionName = reader[string.Format("{0}actionname", prefix)].ToString();
            log.ParentActionName = reader[string.Format("{0}parentactionname", prefix)].ToString();
            log.RequestBody= reader[string.Format("{0}requestbody", prefix)].ToString();
            log.RequestUri= reader[string.Format("{0}requesturi", prefix)].ToString();
            log.Root = (bool)reader[string.Format("{0}root", prefix)];
            log.Level = (int)reader[string.Format("{0}level", prefix)];
            log.CreateTime = (DateTime)reader[string.Format("{0}createtime", prefix)];
            log.ModifyTime = (DateTime)reader[string.Format("{0}modifytime", prefix)];
        }

        /// <summary>
        /// 获取通用日志的数据查询的字段字符串
        /// </summary>
        /// <param name="prefix"></param>
        /// <returns></returns>
        public static string GetCommonLogSelectFields(string prefix)
        {
            var strSelect = @"{0}.[id] as [{0}id],{0}.[parentid] as [{0}parentid],{0}.[previousid] as [{0}previousid],{0}.[contextinfo] as [{0}contextinfo],{0}.[actionname] as [{0}actionname],{0}.[parentactionname] as [{0}parentactionname],{0}.[requestbody] as [{0}requestbody],{0}.[requesturi] as [{0}requesturi],{0}.[message] as [{0}message],{0}.[root] as [{0}root],{0}.[level] as [{0}level],{0}.[createtime] as [{0}createtime],{0}.[modifytime] as [{0}modifytime],{0}.[sequence] as [{0}sequence]";
            if (string.IsNullOrEmpty(prefix))
            {
                strSelect = @"[id],[parentid],[previousid],[contextinfo],[actionname],[parentactionname],[requestbody],[requesturi],[message],[root],[level],[createtime],[modifytime],[sequence]";
            }
            return string.Format(strSelect, prefix);
        }



    }
}
