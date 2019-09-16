using System;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace MSLibrary.Serializer
{
    public static class JsonSerializerHelper
    {
        static JsonSerializerHelper()
        {
            /*JsonConvert.DefaultSettings = () =>
            {
                JsonSerializerSettings jsonSerializerSettings = new JsonSerializerSettings();
                jsonSerializerSettings.TypeNameHandling = TypeNameHandling.Auto;
                return jsonSerializerSettings;
            };*/
        }
        public static string Serializer<T>(T obj, JsonSerializerSettings settings = null)
        {
            return Serializer(obj, null,settings);
        }

        public static string Serializer(object obj, Type type,JsonSerializerSettings settings=null)
        {
            string strInfo = string.Empty;
            if (obj is ModelBase)
            {
                strInfo = JsonConvert.SerializeObject(obj, new ModelBaseJsonConverter(settings));
            }
            else
            {

                strInfo = JsonConvert.SerializeObject(obj, settings);
            }
            return strInfo;
        }



        public static T Deserialize<T>(string strInfo, JsonSerializerSettings settings = null)
        {
            /*T obj = default(T);
            if (string.IsNullOrEmpty(strInfo))
            {
                return obj;
            }
            byte[] byteArray = new UTF8Encoding().GetBytes(strInfo);
            using (MemoryStream stream = new MemoryStream(byteArray))
            {
                DataContractJsonSerializer jsonSerializer = new DataContractJsonSerializer(typeof(T));
                obj = (T)jsonSerializer.ReadObject(stream);
                stream.Close();
            }
            return obj;*/

            return JsonConvert.DeserializeObject<T>(strInfo,settings);
        }

        public static object Deserialize(string strInfo, Type type, JsonSerializerSettings settings = null)
        {
            return JsonConvert.DeserializeObject(strInfo, type,settings);
        }
    }

    /// <summary>
    /// 针对所有继承自ModelBase的类型做特殊化序列化处理
    /// 在序列化时，检查Attributes属性，只有在Attributes中包含的属性才会被序列化到json字符串中
    /// </summary>
    public class ModelBaseJsonConverter : JsonConverter
    {
        private JsonSerializerSettings _settings=null;
        public ModelBaseJsonConverter():base()
        {

        }

        public ModelBaseJsonConverter(JsonSerializerSettings settings) :base()
        {
            _settings = settings;
        }

        public override bool CanConvert(Type objectType)
        {
            return objectType.GetTypeInfo().IsSubclassOf(typeof(ModelBase));

        }


        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            JsonSerializer newSerialzer = new JsonSerializer();
            SetSerializer(serializer, _settings);

            //针对CommonModel做特殊处理

            if (objectType == typeof(CommonModel))
            {
                var jObj = newSerialzer.Deserialize<Dictionary<string, object>>(reader);
                CommonModel model = new CommonModel();
                foreach (var pItem in jObj)
                {
                    model.Attributes[pItem.Key] = pItem.Value;
                }

                return model;
            }
            else
            {
                var obj = newSerialzer.Deserialize(reader, objectType);
                return obj;
            }
        }

        /*public override bool CanWrite
        {
            get
            {
                var canWrite = _canWrite;
                if (canWrite==false)
                {
                    _canWrite = true;
                }
                return canWrite;
            }
        }*/

        private JObject CreateJObject(ModelBase model)
        {
            JObject jObject = new JObject();
            foreach (var attributeItem in model.Attributes)
            {
                if (attributeItem.Value is ModelBase)
                {
                    jObject.Add(attributeItem.Key, CreateJObject((ModelBase)(attributeItem.Value)));
                }
                else
                {
                    if (attributeItem.Value == null)
                    {
                        jObject.Add(attributeItem.Key, null);
                    }
                    else
                    {
                        jObject.Add(attributeItem.Key, JToken.FromObject(attributeItem.Value));
                    }
                }
            }

            return jObject;
        }


        private void SetSerializer(JsonSerializer serializer,JsonSerializerSettings settings)
        {
            if (_settings != null)
            {
                serializer.CheckAdditionalContent = _settings.CheckAdditionalContent;
                serializer.ConstructorHandling = _settings.ConstructorHandling;
                serializer.Context = _settings.Context;
                serializer.ContractResolver = _settings.ContractResolver;        
                serializer.Culture = _settings.Culture;
                serializer.DateFormatHandling = _settings.DateFormatHandling;
                serializer.DateFormatString = _settings.DateFormatString;
                serializer.DateParseHandling = _settings.DateParseHandling;
                serializer.DateTimeZoneHandling = _settings.DateTimeZoneHandling;
                serializer.DefaultValueHandling = _settings.DefaultValueHandling;
                serializer.EqualityComparer = _settings.EqualityComparer;
                serializer.FloatFormatHandling = _settings.FloatFormatHandling;
                serializer.FloatParseHandling = _settings.FloatParseHandling;
                serializer.Formatting = _settings.Formatting;
                serializer.MaxDepth = _settings.MaxDepth;
                serializer.MetadataPropertyHandling = _settings.MetadataPropertyHandling;
                serializer.MissingMemberHandling = _settings.MissingMemberHandling;
                serializer.NullValueHandling = _settings.NullValueHandling;
                serializer.PreserveReferencesHandling = _settings.PreserveReferencesHandling;
                serializer.ReferenceLoopHandling = _settings.ReferenceLoopHandling;
                serializer.SerializationBinder = _settings.SerializationBinder;
                serializer.StringEscapeHandling = _settings.StringEscapeHandling;
                serializer.TraceWriter = _settings.TraceWriter;
                serializer.TypeNameAssemblyFormatHandling = _settings.TypeNameAssemblyFormatHandling;
                serializer.TypeNameHandling = _settings.TypeNameHandling;
            }
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            SetSerializer(serializer, _settings);

            var model = (ModelBase)(value);

            JObject jObject = CreateJObject(model);


            jObject.WriteTo(writer);

            /*string strInfo = string.Empty;
            using (StringWriter stringWriter= new StringWriter())
            {


                _canWrite = false;

                serializer.Serialize(stringWriter,value,value.GetType());
                
                strInfo =stringWriter.ToString();


                stringWriter.Close();
            }


            JObject jObj = JObject.Parse(strInfo);

             foreach (var attributeItem in jObj.Properties().ToList())
             {
                 if (!model.Attributes.ContainsKey(attributeItem.Name))
                 {
                     attributeItem.Remove();
                 }
             }
             jObj.WriteTo(writer);*/


        }
    }
}
