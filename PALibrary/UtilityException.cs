﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using PALibrary.LanguageTranslate;

namespace PALibrary
{
    /// <summary>
    /// 系统错误
    /// 必须使用该类来抛出系统错误
    /// </summary>
    public class UtilityException : Exception
    {
        private Dictionary<string, object> _data = new Dictionary<string, object>();
        private TextFragment _fragment;
        public int Code { get; set; }
        public UtilityException(int code, TextFragment fragment)
            : base(fragment.GetDefaultTextSync())
        {
            Code = code;
            _fragment = fragment;
        }

        public UtilityException(int code, string message)
            : base(message)
        {
            Code = code;
        }

        public TextFragment Fragment
        {
            get
            {
                return _fragment;
            }
        }

        public override IDictionary Data
        {
            get
            {
                return _data;
            }
        }
    }

    public static class UtilityExceptionTypes
    {
        public const string Unauthorized = "Unauthorized";
    }
}
