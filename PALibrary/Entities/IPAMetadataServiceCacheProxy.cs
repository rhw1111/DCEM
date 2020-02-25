using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk.Metadata;

namespace PALibrary.Entities
{
    public interface IPAMetadataServiceCacheProxy
    {
        /// <summary>
        /// 获取全局选项集元数据
        /// </summary>
        /// <param name="optionSetName">全局选项集名称</param>
        /// <returns>选项集元数据</returns>
        OptionMetadata[] GetOptionSet(string optionSetName);
        /// <summary>
        /// 获取字段选项集元数据
        /// </summary>
        /// <param name="entityName">该字段所属的实体名称</param>
        /// <param name="fieldName">字段名称</param>
        /// <returns>选项集元数据</returns>
        OptionMetadata[] GetOptionSet(string entityName, string fieldName);
        /// <summary>
        /// 根据实体名称获取实体元数据
        /// </summary>
        /// <param name="entityName">实体名称</param>
        /// <returns>实体元数据</returns>
        EntityMetadata GetEntityMetadata(string entityName);
        /// <summary>
        /// 根据TypeCode获取实体元数据
        /// </summary>
        /// <param name="typeCode">实体的TypeCode</param>
        /// <returns>实体元数据</returns>
        EntityMetadata GetEntityMetadata(int typeCode);
        /// <summary>
        /// 检查实体是否有指定的字段
        /// </summary>
        /// <param name="entityName">实体名称</param>
        /// <param name="attributeName">字段名称</param>
        /// <returns>是否存在</returns>
        bool HasAttribute(string entityName, string attributeName);
        /// <summary>
        /// 检查实体是否有指定的字段
        /// </summary>
        /// <param name="typeCode">实体TypeCode</param>
        /// <param name="attributeName">字段名称</param>
        /// <returns>是否存在</returns>
        bool HasAttribute(int typeCode, string attributeName);
        /// <summary>
        /// 获取指定实体名称的所有属性
        /// </summary>
        /// <param name="entityName">实体名称</param>
        /// <returns>属性列表</returns>
        AttributeMetadata[] GetAttributes(string entityName);
        /// <summary>
        /// 获取指定实体Code的所有属性
        /// </summary>
        /// <param name="typeCode"></param>实体code
        /// <returns>属性列表</returns>
        AttributeMetadata[] GetAttributes(int typeCode);
    }
}
