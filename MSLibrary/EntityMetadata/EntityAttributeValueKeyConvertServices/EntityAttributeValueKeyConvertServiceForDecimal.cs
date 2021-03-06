﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.LanguageTranslate;

namespace MSLibrary.EntityMetadata.EntityAttributeValueKeyConvertServices
{
    /// <summary>
    /// 针对高精度浮点型类型的实体属性值转换成关键字字符串服务
    /// </summary>
    [Injection(InterfaceType = typeof(EntityAttributeValueKeyConvertServiceForDecimal), Scope = InjectionScope.Singleton)]
    public class EntityAttributeValueKeyConvertServiceForDecimal : IEntityAttributeValueKeyConvertService
    {
        public async Task<object> ConvertFrom(EntityAttributeInfo attributeInfo, string strKey)
        {
            TextFragment fragment;
            if (strKey == null)
            {
                fragment = new TextFragment()
                {
                    Code = TextCodes.EntityKeyValueRequireNotNull,
                    DefaultFormatting = "实体类型为{0}的实体元数据的属性{1}的值类型{2}要求转换的字符串不为空,发生位置为{3}",
                    ReplaceParameters = new List<object>() { attributeInfo.EntityInfo.EntityType, attributeInfo.Name, attributeInfo.Type, $"{typeof(EntityAttributeValueKeyConvertServiceForDecimal).FullName},ConvertFrom" }
                };

                throw new UtilityException((int)Errors.EntityKeyValueRequireNotNull, fragment);
            }

            if (attributeInfo.Type != EntityAttributeTypes.Decimal)
            {
                fragment = new TextFragment()
                {
                    Code = TextCodes.EntityAttributeMetadataValueTypeNotMatchEntityAttributeValueKeyConvertServiceRequire,
                    DefaultFormatting = "实体类型为{0}的实体元数据的属性{1}的值类型为{2}，但实体属性值转换成关键字字符串服务{3}期待的类型为{4}，两者不匹配,发生位置为{5}",
                    ReplaceParameters = new List<object>() { attributeInfo.EntityInfo.EntityType, attributeInfo.Name, attributeInfo.Type, typeof(EntityAttributeValueKeyConvertServiceForDecimal).FullName, typeof(decimal).FullName, $"{typeof(EntityAttributeValueKeyConvertServiceForDecimal).FullName},ConvertFrom" }
                };

                throw new UtilityException((int)Errors.EntityAttributeMetadataValueTypeNotMatchEntityAttributeValueKeyConvertServiceRequire, fragment);
            }
            if (!Decimal.TryParse(strKey, out decimal result))
            {
                fragment = new TextFragment()
                {
                    Code = TextCodes.EntityKeyValueNotMatchEntityAttributeMetadataValueType,
                    DefaultFormatting = "实体类型为{0}的实体元数据的属性{1}的值类型为{2}，但实体关键字{3}无法转换成该值类型,发生位置为{4}",
                    ReplaceParameters = new List<object>() { attributeInfo.EntityInfo.EntityType, attributeInfo.Name, attributeInfo.Type, strKey, $"{typeof(EntityAttributeValueKeyConvertServiceForDecimal).FullName},ConvertFrom" }
                };

                throw new UtilityException((int)Errors.EntityKeyValueNotMatchEntityAttributeMetadataValueType, fragment);
            }

            return await Task.FromResult(result);

        }

        public async Task<string> ConvertTo(EntityAttributeInfo attributeInfo, object value)
        {
            TextFragment fragment;
            if (value == null)
            {
                await Task.FromResult(string.Empty);
            }
            if (!(value is decimal))
            {
                fragment = new TextFragment()
                {
                    Code = TextCodes.EntityAttributeMetadataValueTypeNotMatchEntityAttributeValueKeyConvertService,
                    DefaultFormatting = "实体类型为{0}的实体元数据的属性{1}的值的实际类型为{2}，但实体属性值转换成关键字字符串服务{3}期待的类型为{4}，两者不匹配，发生位置为{5}",
                    ReplaceParameters = new List<object>() { attributeInfo.EntityInfo.EntityType, attributeInfo.Name, value.GetType().FullName, typeof(EntityAttributeValueKeyConvertServiceForDecimal).FullName, typeof(decimal).FullName, $"{typeof(EntityAttributeValueKeyConvertServiceForDecimal).FullName},ConvertTo" }
                };

                throw new UtilityException((int)Errors.EntityAttributeMetadataValueTypeNotMatchEntityAttributeValueKeyConvertService, fragment);
            }

            if (attributeInfo.Type != EntityAttributeTypes.Decimal)
            {
                fragment = new TextFragment()
                {
                    Code = TextCodes.EntityAttributeMetadataValueTypeNotMatchActual,
                    DefaultFormatting = "实体类型为{0}的实体元数据的属性{1}的值类型为{2}，但实际值类型为{3}，两者不匹配，发生位置为{4}",
                    ReplaceParameters = new List<object>() { attributeInfo.EntityInfo.EntityType, attributeInfo.Name, attributeInfo.Type, value.GetType().FullName, $"{typeof(EntityAttributeValueKeyConvertServiceForDecimal).FullName},ConvertTo" }
                };

                throw new UtilityException((int)Errors.EntityAttributeMetadataValueTypeNotMatchActual, fragment);
            }

            return await Task.FromResult(((decimal)value).ToString());
        }
    }
}
