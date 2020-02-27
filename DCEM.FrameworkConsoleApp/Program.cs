using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Runtime.Serialization;
using System.Web.Script.Serialization;
using System.Reflection;
using System.Linq.Expressions;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Client;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Sdk.Metadata.Query;
using Microsoft.Xrm.Sdk.Messages;
using System.Runtime.Serialization.Json;
using System.IO;
using System.Collections.ObjectModel;
using System.CodeDom;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;
using PALibrary;
using PALibrary.Serializer;
using System.Security.Policy;

namespace DCEM.FrameworkConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {


            


            var service1=Service1Factory.Get();
            service1.Do();
            var v1=TF1.Get();
            var v2 = TF2.Get();    
             

                ServicePointManager.ServerCertificateValidationCallback = delegate (object s, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors) { return true; };

            var crmServiceUrl = "https://lap4.api.crm5.dynamics.com/XRMServices/2011/Organization.svc";
            var userName = "MTRMBtADM3@mtr.com.hk";
            var password = "p828268#%%";

            var orgServiceManagement = ServiceConfigurationFactory.CreateManagement<IOrganizationService>(new Uri(crmServiceUrl));

            AuthenticationProviderType endpointType = orgServiceManagement.AuthenticationType;

            AuthenticationCredentials credentials = GetCredentials(orgServiceManagement, endpointType, "",userName,password);

            AuthenticationCredentials tokenCredentials = orgServiceManagement.Authenticate(credentials);


            OrganizationServiceProxy proxy = new OrganizationServiceProxy(orgServiceManagement, tokenCredentials.SecurityTokenResponse);


            MetadataFilterExpression EntityFilter = new MetadataFilterExpression(LogicalOperator.And);
            EntityFilter.Conditions.Add(new MetadataConditionExpression("ObjectTypeCode", MetadataConditionOperator.Equals, 9800));

            EntityQueryExpression entityQueryExpression = new EntityQueryExpression();
            entityQueryExpression.Criteria = EntityFilter;
            //entityQueryExpression.AttributeQuery=new AttributeQueryExpression()

             RetrieveMetadataChangesRequest retrieveMetadataChangesRequest = new RetrieveMetadataChangesRequest()
            {
                Query = entityQueryExpression,
               
                //ClientVersionStamp = clientVersionStamp,
                //DeletedMetadataFilters = deletedMetadataFilter
            };

            var response=proxy.Execute(retrieveMetadataChangesRequest);

            var strFetch = string.Format(@"<fetch version=""1.0"" output-format=""xml-platform"" mapping=""logical"" distinct=""false"">
                                <entity name=""webresource"">
                                    <attribute name=""content"" />
                                    <attribute name=""description"" />
                                    <attribute name=""languagecode"" />
                                    <attribute name=""webresourcetype"" />   
                                    <filter type=""and"">
                                        <condition attribute=""name"" operator=""eq"" value=""{0}"" />
                                    </filter>
                                </entity>
                            </fetch>", "ms_testjson");


            var result= proxy.RetrieveMultiple(new FetchExpression(strFetch));

        }

        private static AuthenticationCredentials GetCredentials<TService>(IServiceManagement<TService> service, AuthenticationProviderType endpointType, string domain,string userName,string password)
        {
            AuthenticationCredentials authCredentials = new AuthenticationCredentials();

            switch (endpointType)
            {
                case AuthenticationProviderType.ActiveDirectory:
                    authCredentials.ClientCredentials.Windows.ClientCredential =
                        new System.Net.NetworkCredential(userName,
                            password,
                            domain);
                    break;
                case AuthenticationProviderType.LiveId:
                    authCredentials.ClientCredentials.UserName.UserName = userName;
                    authCredentials.ClientCredentials.UserName.Password = password;
                    authCredentials.SupportingCredentials = new AuthenticationCredentials();
                    authCredentials.SupportingCredentials.ClientCredentials =
                        DeviceIdManager.LoadOrRegisterDevice();
                    break;
                default: // For Federated and OnlineFederated environments.                    
                    authCredentials.ClientCredentials.UserName.UserName = userName;
                    authCredentials.ClientCredentials.UserName.Password = password;
                   
                    // For OnlineFederated single-sign on, you could just use current UserPrincipalName instead of passing user name and password.
                    // authCredentials.UserPrincipalName = UserPrincipal.Current.UserPrincipalName;  // Windows Kerberos

                    // The service is configured for User Id authentication, but the user might provide Microsoft
                    // account credentials. If so, the supporting credentials must contain the device credentials.
                    if (endpointType == AuthenticationProviderType.OnlineFederation)
                    {
                        IdentityProvider provider = service.GetIdentityProvider(authCredentials.ClientCredentials.UserName.UserName);
                        if (provider != null && provider.IdentityProviderType == IdentityProviderType.LiveId)
                        {
                            authCredentials.SupportingCredentials = new AuthenticationCredentials();
                            authCredentials.SupportingCredentials.ClientCredentials =
                                DeviceIdManager.LoadOrRegisterDevice();
                        }
                    }

                    break;
            }

            return authCredentials;
        }
    }


    public interface IService1
    {
        void Do();
    }

    public class Service1 : IService1
    {
        public void Do()
        {
            
        }
    }

    public class Service1Factory : SingletonFactorySelf<IService1, Service1Factory>
    {
        protected override IService1 RealCreate()
        {
            return new Service1();
        }
    }

    public class TF<T>
    {
        private static Func<T> _createFun;
        private static T _value;
        static TF()
        {
            var newExp=Expression.New(typeof(T));
            var createExp=Expression.Lambda<Func<T>>(newExp, null);
            _createFun = createExp.Compile();
            _value = (T)_createFun();
            Console.WriteLine(typeof(T).FullName);
        }

        public static T Get()
        {
            
            return _value;
        }
    }

    public class TF1:TF<int>
    {

    }

    public class TF2 : TF<bool>
    {

    }

    public class ModelBaseDataContractSurrogate : IDataContractSurrogate
    {
        public object GetCustomDataToExport(MemberInfo memberInfo, Type dataContractType)
        {
            return null;
        }

        public object GetCustomDataToExport(Type clrType, Type dataContractType)
        {
            return null;
        }

        public Type GetDataContractType(Type type)
        {
            if (typeof(ModelBase).IsAssignableFrom(type))
            {
                return typeof(Dictionary<string, object>);
            }
            return type;
        }

        public object GetDeserializedObject(object obj, Type targetType)
        {
            ModelBase model;
            if (typeof(ModelBase).IsAssignableFrom(targetType))
            {
                if (obj==null)
                {
                    return null;
                }
                DataContractJsonSerializer dataContractJsonSerializer = new DataContractJsonSerializer(targetType, new DataContractJsonSerializerSettings() { UseSimpleDictionaryFormat = true});                       
                using (var stream = new MemoryStream(UTF8Encoding.UTF8.GetBytes("{}")))
                {
                    stream.Position = 0;
                    model = (ModelBase)dataContractJsonSerializer.ReadObject(stream);
                    model.Attributes = (Dictionary<string, object>)obj;
                    stream.Close();
                }

                return model;
            }
            return obj;
        }

        public void GetKnownCustomDataTypes(Collection<Type> customDataTypes)
        {
            //customDataTypes.Add(typeof(Dictionary<string,object>));
        }

        public object GetObjectToSerialize(object obj, Type targetType)
        {
            if (obj is ModelBase)
            {
                return convertModel(obj);
            }

            return obj;
        }

        private object convertModel(object v)
        {
            object result = v;
            if (v is ModelBase)
            {
                var values = ((ModelBase)v).Attributes;

                var valueList=values.ToList();

                for(var index=0;index<= values.Count-1; index++)
                {
                    values[valueList[index].Key] = convertModel(valueList[index].Value);
                }

                return values;
            }

            return result;
        }

        public Type GetReferencedTypeOnImport(string typeName, string typeNamespace, object customData)
        {
            return null;
        }

        public CodeTypeDeclaration ProcessImportedType(CodeTypeDeclaration typeDeclaration, CodeCompileUnit compileUnit)
        {
            return typeDeclaration;
        }
    }

    public class ModelJavaScriptConverter : JavaScriptConverter
    {
        public override IEnumerable<Type> SupportedTypes => throw new NotImplementedException();

        public override object Deserialize(IDictionary<string, object> dictionary, Type type, JavaScriptSerializer serializer)
        {
            throw new NotImplementedException();
        }

        public override IDictionary<string, object> Serialize(object obj, JavaScriptSerializer serializer)
        {
            throw new NotImplementedException();
        }
    }

    [DataContract]
    public class TestModel:ModelBase
    {
        [DataMember]
        public string Name
        {
            get
            {
                return GetAttribute<string>("Name");
            }
            set
            {
                SetAttribute<string>("Name", value);
            }
        }

        [DataMember]
        public int Value
        {
            get
            {
                return GetAttribute<int>("Value");
            }
            set
            {
                SetAttribute<int>("Value", value);
            }
        }

        [DataMember]
        public TestModel M
        {
            get
            {
                return GetAttribute<TestModel>("M");
            }
            set
            {
                SetAttribute<TestModel>("M", value);
            }
        }
    }

    public class NC
    {
        public static int Max { get; set; } = 100;
        public static int Length { get; set; } = 200;

        public string Value { get; set; } = string.Format(@"{{Max={0},Length={1}}}", Max.ToString(), Length.ToString());
    }
}
