﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.LanguageTranslate;

namespace MSLibrary.Security.ConditionController.ElementConditionServices.EntityAttributeValueValidateServices
{
    /// <summary>
    /// 针对不相等运算符的实体属性值检查服务
    /// </summary>
    [Injection(InterfaceType = typeof(EntityAttributeValueValidateServiceForNotEqual), Scope = InjectionScope.Singleton)]
    public class EntityAttributeValueValidateServiceForNotEqual : IEntityAttributeValueValidateService
    {
        public async Task<EntityAttributeValueValidateServiceResult> Validate(string entityType, string entityKey, string attributeName, object attributeValue, string valueType, string checkValue)
        {

            string correctText = string.Format(StringLanguageTranslate.Translate(TextCodes.EntityAttributeValueValidateOperatorEqualErrorText, "实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值不等于{3}"), entityType, entityKey, attributeName, checkValue);
            string errorText = string.Format(StringLanguageTranslate.Translate(TextCodes.EntityAttributeValueValidateOperatorEqualCorrectText, "实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值等于{3}"), entityType, entityKey, attributeName, checkValue);

            //如果属性值为null，直接返回false
            if (attributeValue == null)
            {
                return new EntityAttributeValueValidateServiceResult(correctText, errorText, false);
            }

            EntityAttributeValueValidateServiceResult result = null;
            TextFragment fragment;
            switch (valueType)
            {

                case EntityAttributeValueTypes.String:
                    if (!(attributeValue is string))
                    {
                        fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeValueTypeNotMatch,
                            DefaultFormatting = "实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值类型与配置的valuetype不匹配，valuetype设置的类型为{3}，实际的值类型为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, attributeValue.GetType().FullName }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeValueTypeNotMatch,fragment);
                    }
                    if ((string)attributeValue != checkValue)
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, true);
                    }
                    else
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, false);
                    }
                    break;
                case EntityAttributeValueTypes.Bool:
                    if (!(attributeValue is bool))
                    {
                         fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeValueTypeNotMatch,
                            DefaultFormatting = "实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值类型与配置的valuetype不匹配，valuetype设置的类型为{3}，实际的值类型为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, attributeValue.GetType().FullName }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeValueTypeNotMatch, fragment);
                    }
                    if (!Boolean.TryParse(checkValue, out bool boolCheckValue))
                    {
                         fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeCheckValueTypeNotMatch,
                            DefaultFormatting = "要和实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值相比较的配置值与配置的valuetype不匹配，valuetype设置的类型为{3}，配置值为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, checkValue }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeCheckValueTypeNotMatch, fragment);
                    }
                    if ((bool)attributeValue != boolCheckValue)
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, true);
                    }
                    else
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, false);
                    }
                    break;
                case EntityAttributeValueTypes.Int:
                    if (!(attributeValue is int))
                    {
                         fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeValueTypeNotMatch,
                            DefaultFormatting = "实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值类型与配置的valuetype不匹配，valuetype设置的类型为{3}，实际的值类型为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, attributeValue.GetType().FullName }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeValueTypeNotMatch, fragment);
                    }
                    if (!int.TryParse(checkValue, out int intCheckValue))
                    {
                         fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeCheckValueTypeNotMatch,
                            DefaultFormatting = "要和实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值相比较的配置值与配置的valuetype不匹配，valuetype设置的类型为{3}，配置值为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, checkValue }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeCheckValueTypeNotMatch,fragment);
                    }
                    if ((int)attributeValue != intCheckValue)
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, true);
                    }
                    else
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, false);
                    }
                    break;
                case EntityAttributeValueTypes.Long:
                    if (!(attributeValue is long))
                    {
                         fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeValueTypeNotMatch,
                            DefaultFormatting = "实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值类型与配置的valuetype不匹配，valuetype设置的类型为{3}，实际的值类型为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, attributeValue.GetType().FullName }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeValueTypeNotMatch, fragment);
                    }
                    if (!long.TryParse(checkValue, out long longCheckValue))
                    {
                         fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeCheckValueTypeNotMatch,
                            DefaultFormatting = "要和实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值相比较的配置值与配置的valuetype不匹配，valuetype设置的类型为{3}，配置值为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, checkValue }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeCheckValueTypeNotMatch, fragment);
                    }
                    if ((long)attributeValue != longCheckValue)
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, true);
                    }
                    else
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, false);
                    }
                    break;
                case EntityAttributeValueTypes.Decimal:
                    if (!(attributeValue is decimal))
                    {
                         fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeValueTypeNotMatch,
                            DefaultFormatting = "实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值类型与配置的valuetype不匹配，valuetype设置的类型为{3}，实际的值类型为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, attributeValue.GetType().FullName }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeValueTypeNotMatch, fragment);
                    }
                    if (!decimal.TryParse(checkValue, out decimal decimalCheckValue))
                    {
                         fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeCheckValueTypeNotMatch,
                            DefaultFormatting = "要和实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值相比较的配置值与配置的valuetype不匹配，valuetype设置的类型为{3}，配置值为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, checkValue }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeCheckValueTypeNotMatch,fragment);
                    }
                    if ((decimal)attributeValue != decimalCheckValue)
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, true);
                    }
                    else
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, false);
                    }
                    break;
                case EntityAttributeValueTypes.DateTime:
                    if (!(attributeValue is DateTime))
                    {
                         fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeValueTypeNotMatch,
                            DefaultFormatting = "实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值类型与配置的valuetype不匹配，valuetype设置的类型为{3}，实际的值类型为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, attributeValue.GetType().FullName }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeValueTypeNotMatch, fragment);
                    }
                    if (!DateTime.TryParse(checkValue, out DateTime dateTimeCheckValue))
                    {
                         fragment = new TextFragment()
                        {
                            Code = TextCodes.EntityAttributeCheckValueTypeNotMatch,
                            DefaultFormatting = "要和实体类型为{0}、实体关键字为{1}的实体记录的属性{2}的值相比较的配置值与配置的valuetype不匹配，valuetype设置的类型为{3}，配置值为{4}",
                            ReplaceParameters = new List<object>() { entityType, entityKey, attributeName, valueType, checkValue }
                        };

                        throw new UtilityException((int)Errors.EntityAttributeCheckValueTypeNotMatch, fragment);
                    }
                    if ((DateTime)attributeValue != dateTimeCheckValue)
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, true);
                    }
                    else
                    {
                        result = new EntityAttributeValueValidateServiceResult(correctText, errorText, false);
                    }
                    break;
                default:

                     fragment = new TextFragment()
                    {
                        Code = TextCodes.NotFoundEntityAttributeValueType,
                        DefaultFormatting = "值类型{0}未定义，必须在MSLibrary.EntityAttributeValueTypes中定义",
                        ReplaceParameters = new List<object>() { valueType }
                    };

                    throw new UtilityException((int)Errors.NotFoundEntityAttributeValueType, fragment);

            }

            return await Task.FromResult(result);
        }
    }
}
