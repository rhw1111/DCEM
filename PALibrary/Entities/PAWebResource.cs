using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Threading.Tasks;
using PALibrary.Serializer;

namespace PALibrary.Entities
{
    public class PAWebResource : PAEntityBase<IPAWebResourceIMP>
    {
        private static IFactory<IPAWebResourceIMP> _paWebResourceIMPFactory=new PAWebResourceIMPFactory();

        public static IFactory<IPAWebResourceIMP> PAWebResourceIMPFactory
        {
            set
            {
                _paWebResourceIMPFactory = value;
            }
        }
        public override IFactory<IPAWebResourceIMP> GetIMPFactory()
        {
            return _paWebResourceIMPFactory;
        }

        public T ConvertFromJson<T>()
        {
            return _imp.ConvertFromJson<T>(this);
        }

        public void GetStream(Action<Stream> action)
        {
             _imp.GetStream(this,action);
        }
    }


    public interface IPAWebResourceIMP
    {
        T ConvertFromJson<T>(PAWebResource resource);
        void GetStream(PAWebResource resource, Action<Stream> action);
    }

    public class PAWebResourceIMP : IPAWebResourceIMP
    {
        public T ConvertFromJson<T>(PAWebResource resource)
        {
            T result = default(T);
            var contentBase64=resource.EntityRecord.GetAttributeValue<string>("content");
            if (!string.IsNullOrEmpty(contentBase64))
            {
                result= JsonSerializerHelper.Deserialize<T>(contentBase64.Base64Decode());
            }
            return result;
        }

        public void GetStream(PAWebResource resource,Action<Stream> action)
        {
            var contentBase64 = resource.EntityRecord.GetAttributeValue<string>("content");

            if (!string.IsNullOrEmpty(contentBase64))
            {
                using (var stream = new MemoryStream(Convert.FromBase64String(contentBase64)))
                {
                    action(stream);
                    stream.Close();
                }
            }

        }
    }

    public class PAWebResourceIMPFactory : IFactory<IPAWebResourceIMP>
    {
        public IPAWebResourceIMP Create()
        {
            return new PAWebResourceIMP(); 
        }
    }
}
