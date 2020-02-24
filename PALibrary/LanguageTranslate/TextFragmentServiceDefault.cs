using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace PALibrary.LanguageTranslate
{
    public class TextFragmentServiceDefault : ITextFragmentService
    {
        public string GetDefaultTextSync(TextFragment fragment)
        {
            List<string> parameters = new List<string>();

            foreach (var item in fragment.ReplaceParameters)
            {
                if (item is TextFragment)
                {
                    parameters.Add(GetDefaultTextSync((TextFragment)item));
                }
                else
                {
                    parameters.Add(item.ToString());
                }
            }

            return string.Format(fragment.DefaultFormatting, parameters.ToArray());
        }

        public string GetLanguageTextSync(int lcid, TextFragment fragment)
        {
            var formatting = StringLanguageTranslate.Translate(fragment.Code, lcid, fragment.DefaultFormatting);
            List<string> parameters = new List<string>();
            foreach (var item in fragment.ReplaceParameters)
            {
                if (item is TextFragment)
                {
                    parameters.Add(GetLanguageTextSync(lcid, (TextFragment)item));
                }
                else
                {
                    parameters.Add(item.ToString());
                }
            }

            return string.Format(formatting, parameters.ToArray());
        }
    }

    public class TextFragmentServiceDefalutFactory : SingletonFactory<ITextFragmentService>
    {
        protected override ITextFragmentService RealCreate()
        {
            TextFragmentServiceDefault textFragmentServiceDefault = new TextFragmentServiceDefault();
            return textFragmentServiceDefault;
        }
    }
}
