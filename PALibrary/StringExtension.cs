﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Net;

namespace PALibrary
{
    public static class StringExtension
    {
        /// <summary>
        /// String.Format方法中需要将{转义成{{,}转义成}}
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string ToFormat(this string str)
        {
            Regex regex = new Regex(@"\{(?!\d+})");

            str = regex.Replace(str, "{{");

            regex = new Regex(@"(?<!\{\d+)}");

            str = regex.Replace(str, "}}");

            return str;
        }

        /// <summary>
        /// 判断字符串是否都是数字
        /// </summary> 
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool IsAllNumber(this string str)
        {
            Regex regex = new Regex(@"^\d+$");
            return regex.IsMatch(str);
        }

        /// <summary>
        /// 判断字符串是否只包含数字+字母
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static bool IsAllNumberAndLetter(this string str)
        {
            Regex regex = new Regex(@"^[A-Za-z0-9]+$");
            return regex.IsMatch(str);
        }
        /// <summary>
        /// 转换成Base64Url
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string Base64UrlEncode(this string str)
        {
            var strBase64 = str.Base64Encode();
            strBase64 = strBase64.Replace("+", "-").Replace("/", "_");

            Regex re = new Regex("(=)+$");
            strBase64 = re.Replace(strBase64, "");
            return strBase64;
        }

        /// <summary>
        /// 将Base64Url转换成普通字符串
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string Base64UrlDecode(this string str)
        {

            var strBase64 = str.Replace("-", "+").Replace("_", "/");
            var len = strBase64.Length;

            var s = len % 4;
            switch (s)
            {
                case 0:
                    break;
                case 2:
                    strBase64 += "==";
                    break;
                case 3:
                    strBase64 += "=";
                    break;
                default:
                    break;
            }
            return strBase64.Base64Decode();
        }

        /// <summary>
        /// 将字符串转成Base64字符串
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string Base64Encode(this string str)
        {
            var bytes = UTF8Encoding.UTF8.GetBytes(str);
            var strBase64 = Convert.ToBase64String(bytes);
            return strBase64;
        }

        /// <summary>
        /// 将Base64字符串转成普通字符串
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string Base64Decode(this string str)
        {
            var bytes = Convert.FromBase64String(str);
            return UTF8Encoding.UTF8.GetString(bytes);
        }



        private static Dictionary<string, Guid> _guidList = new Dictionary<string, Guid>();
        /// <summary>
        /// 转义XML格式
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string ToXML(this string text)
        {
            return text.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace(@"""", "&quot;");
        }

        /// <summary>
        /// 转义模板中的文本
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string ToTemplate(this string text)
        {
            return text.Replace("}", @"\}").Replace("$", @"\$").Replace(",", @"\,").Replace(@"\", @"\\");
        }


        /// <summary>
        /// 转义CSV格式
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string ToCSV(this string text)
        {
            return text.Replace(@"""", @"""""");
        }
        /// <summary>
        /// 转义HTML格式
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string ToHTML(this string text)
        {
            return text.Replace("&", "&amp;").Replace("<", "&lt;").Replace(">", "&gt;").Replace("'", "&apos;").Replace(@"""", "&quot;").Replace("\r\n", "<br>"); ;
        }
        /// <summary>
        /// 转义JS格式
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string ToJS(this string text)
        {
            return text.Replace("\"", "\\\"");
        }
        /// <summary>
        /// 转义CRM中like格式
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string ToCRMLike(this string text)
        {
            return text.Replace("[", "[[]").Replace("%", "[%]");
        }

        /// <summary>
        /// 将一个字符串唯一映射一个Guid
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static Guid ToGuid(this string text)
        {
            if (!_guidList.TryGetValue(text, out Guid guid))
            {
                lock (_guidList)
                {
                    if (!_guidList.TryGetValue(text, out guid))
                    {
                        guid = Guid.NewGuid();
                        _guidList.Add(text, guid);
                    }
                }
            }

            return guid;
        }
        /// <summary>
        /// 转义Sql格式
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string ToSql(this string text)
        {
            return text.Replace("'", "''");
        }

        /// <summary>
        /// 转义Sql中的like字符串
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public static string ToSqlLike(this string text)
        {
            return text.Replace("[", "[[]").Replace("_", "[_]").Replace("%", "[%]").Replace("^", "[^]");
        }


        public static string ToFileUrl(this string url)
        {
            if (url[url.Length - 1] != '\\' && url[url.Length - 1] != '/')
            {
                url = url + "\\";
            }

            return url;
        }

        /// <summary>
        /// 将字符串中的每个字符转成int后相加
        /// </summary>
        /// <param name="content"></param>
        /// <returns></returns>
        public static int ToInt(this string content)
        {
            int result = 0;
            for (int index = 0; index <= content.Length - 1; index++)
            {
                result += Convert.ToInt32(content[index]);

            }

            return result;
        }


        public static string ToPlural(this string word)
        {
            if (word.Length == 0)
            {
                return word;
            }

            if (word.ToLower()[word.Length - 1] == 'y')
            {
                word = word.Remove(word.Length - 1, 1);
                word = $"{word}ies";
            }
            else if (word.ToLower()[word.Length - 1] == 's')
            {
                word = $"{word}es";
            }
            else
            {
                word = $"{word}s";
            }

            return word;
        }


        public static string ToSingular(this string word)
        {
            if (word.Length == 0)
            {
                return word;
            }

            if (word.Length >= 3 && word.ToLower().Substring(word.Length - 3) == "ies")
            {
                word.Remove(word.Length - 3, 3);
                word = $"{word}y";
            }
            else if (word.Length >= 2 && word.ToLower().Substring(word.Length - 2) == "es")
            {
                word.Remove(word.Length - 2, 2);
                word = $"{word}s";
            }
            else if (word.Length >= 1 && word.ToLower().Substring(word.Length - 1) == "s")
            {
                word.Remove(word.Length - 1, 1);
            }


            return word;
        }

        /// <summary>
        /// Url Encode
        /// </summary>
        /// <param name="url"></param>
        /// <returns></returns>
        public static string ToUrlEncode(this string url)
        {
            return WebUtility.UrlEncode(url);
        }
        /// <summary>
        /// Url Decode
        /// </summary>
        /// <param name="encodeUrl"></param>
        /// <returns></returns>
        public static string ToUrlDecode(this string encodeUrl)
        {
            return WebUtility.UrlDecode(encodeUrl);
        }
    }
}
