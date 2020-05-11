using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.RegularExpressions;
using System.IO;
using System.Linq;
using System.Xml.Linq;
using System.Runtime;
using System.Runtime.Serialization;
using System.Diagnostics;
using System.Security;
using System.IO.Compression;
using Microsoft.AspNetCore.Authorization;
using System.Buffers;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging.Console;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using MSLibrary;
using MSLibrary.Thread;
using MSLibrary.Serializer;
using MSLibrary.Configuration;
using MSLibrary.DI;
using MSLibrary.Security.Jwt;
using MSLibrary.Security.Jwt.DAL;
using MSLibrary.Security.Jwt.JwtGenerateCreateSignKeyServices;
using MSLibrary.Security.Jwt.JwtGenerateValidateSignKeyServices;
using MSLibrary.CommonQueue;
using MSLibrary.CommonQueue.DAL;
using MSLibrary.CommonQueue.QueueRealExecuteServices;
using MSLibrary.ExpressionCalculate;
using DCEM.Main;
using DCEM.ServiceAssistantService.Main.Entities;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.Extensions.Configuration;
using System.Diagnostics.Contracts;
using MSLibrary.Oauth.ADFS;
using ICSharpCode.SharpZipLib.Zip;
using ICSharpCode.SharpZipLib.Checksum;
using DCEM.ConsoleApp.FormulaCalculateServices;
using System.IdentityModel.Tokens.Jwt;
using MSLibrary.SystemToken;
using MSLibrary.SystemToken.TokenControllerServices;
using Azure.Identity;
using Azure.Core;
using MSLibrary.Collections;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System.Globalization;
using IdentityServer4.Models;

namespace DCEM.ConsoleApp
{
    using MainStartupHelper = DCEM.Main.StartupHelper;
    class Program
    {

        private static string _baseUrl;

        static void consoleChar(int offset1,int offset2,string str,string strInner,string strStar)
        {
            StringBuilder strBuilder = new StringBuilder();

            for(var index=0;index<=offset1-1;index++)
            {
                strBuilder.Append(" ");
            }
            
            strBuilder.Append(str);

            if (offset1 != 0)
            {
                for (var index = 0; index <= offset2 - offset1 - 2; index++)
                {
              
                    strBuilder.Append(strInner);
                }
            }
            else
            {
                for (var index = 0; index <= offset2 - offset1 - 2; index++)
                {
                    if (index == (offset2 - offset1 - 2) / 2)
                    {

                        strBuilder.Append(strStar);
                    }
                    else
                    {
                      
                        strBuilder.Append(strInner);
                    }
                }
            }

            if (offset1 != offset2)
            {
          
                strBuilder.Append(str);
            }

            foreach(var item in strBuilder.ToString())
            {
                setRanColor();
                Console.Write(item);
            }
            
        }

        private static ConsoleColor[] _colors = new ConsoleColor[]
        {
             ConsoleColor.Red,
              ConsoleColor.Green,
               ConsoleColor.Yellow,
                ConsoleColor.Blue,
                 ConsoleColor.Cyan,
                  ConsoleColor.White
        };

        private static Random _r = new Random(DateTime.Now.Millisecond);
        static void setRanColor()
        {
           
            Console.ForegroundColor=_colors[_r.Next(0, _colors.Count())];
        }

   static async Task InitContext()
        {
            //await Task.Delay(10);
            ContextContainer.SetValue(ContextTypes.CurrentUserLcid, 100);
        }

        static async Task CheckContext()
        {
            await Task.Delay(10);
            var v= ContextContainer.GetValue<int>(ContextTypes.CurrentUserLcid);
        }

        private class ServiceD:IDisposable
        {
            public void Dispose()
            {
                var dd = 1;
            }

            public string Do()
            {
                return "1";
            }
        }

        private class DisposeClass : IAsyncDisposable
        {
            public  ValueTask DisposeAsync()
            {
                var aa = 1;
                return new ValueTask();
            }
        }

        static void SetSpan()
        {
            int[] intArray = new int[] { 1, 2 };

            var intSpan = intArray.AsSpan();
            intSpan[0] = 5;
            var newArray=intSpan.ToArray();
            intSpan[0] = 9;
        }

        static void LongRun(CancellationToken token)
        {
            while(true)
            {
                if (token.IsCancellationRequested)
                {
                    break;
                }
                Console.WriteLine(DateTime.Now);
                Thread.Sleep(300);
            }
        }


        class OrderByC
        {
            public bool V { get; set; }
        }
        async static Task Main(string[] args)
        {

            List<OrderByC> listC = new List<OrderByC>()
            {
                new OrderByC{ V=true },
                new OrderByC{ V=true },
                new OrderByC{ V=false },
            };

            listC = listC.OrderBy((c) => c.V).ToList();

            ApiResource apiResource = new ApiResource("Api1", "Api1", new string[]{ "aa","bb"});


            var aa = typeof(MSLibrary.ContextDictionary).Assembly.Location;
            string str11 = null;
            var len = str11!.Length;


         

            ClaimsIdentity identity = new ClaimsIdentity("User");
            identity.AddClaim(new Claim("A", "A"));

            ClaimsPrincipal principal = new ClaimsPrincipal(identity);

            string strBase;
            await using (var st=new MemoryStream())
            {
                await using (BinaryWriter w = new BinaryWriter(st))
                {
                    principal.WriteTo(w);
                     strBase=Convert.ToBase64String(st.ToArray());
                }
            }

            await using (var st = new MemoryStream(Convert.FromBase64String(strBase)))
            {
               using (BinaryReader w = new BinaryReader(st))
                {
                    var newPrincipal = new ClaimsPrincipal(w);
                }
            }



            CspParameters cspParams = new CspParameters();

            RSAParameters parameters;
           

            using (var key = new RSACryptoServiceProvider(2048))
            {

                parameters=key.ExportParameters(true);
            }

            var strRSAParameters= JsonSerializerHelper.Serializer(parameters);


            using (var key = new RSACryptoServiceProvider(2048))
            {

                key.ImportParameters(JsonSerializerHelper.Deserialize<RSAParameters>(strRSAParameters));
            }


            var current=CultureInfo.CurrentCulture;
            CultureInfo.CurrentCulture = CultureInfo.InvariantCulture;

            ThreadPool.QueueUserWorkItem((aa) =>
            {
                current = CultureInfo.CurrentCulture;
            },1,true);

            Regex regex = new Regex(@"(?<!\\)\{(\S+?)}");
            var matchs = regex.Matches("sda{sd{dd},{33}dff");
            foreach (Match item in matchs)
            {
                //item.Value
            }



            SetSpan();

            using (CancellationTokenSource tokenSource = new CancellationTokenSource())
            {

                var t = Task.Run(() =>
                  {
                      LongRun(tokenSource.Token);
                  });

                await Task.Delay(5000);

                tokenSource.Cancel();
            }

            Console.ReadKey();
           

            AuthenticationParameters authenticationParameters = await AuthenticationParameters.CreateFromUrlAsync(new Uri(new Uri("https://lap4.crm5.dynamics.com/"),"api/data/"));
    

            ClientCredential clientcred = new ClientCredential("32cf6de9-8823-446b-a0d6-4cef5497807f", "dROZ06SOIaBoA7SHblrm0bhWfe246HhM8quFtn8wxk0=");
            AuthenticationContext authContext = new AuthenticationContext(authenticationParameters.Authority.Replace("/oauth2/authorize",string.Empty));
            var authResult= await authContext.AcquireTokenAsync("https://lap4.crm5.dynamics.com", clientcred);




            MemoryList<int> mList = new MemoryList<int>();
            List<int> cList = new List<int>();

            Stopwatch watch = new Stopwatch();
            watch.Start();

            for (int index = 0; index < 100000; index++)
            {
                mList.Add(new Memory<int>(new int[] { 1, 2, 3,4,5 }));
                //cList.AddRange(new int[] { 1, 2, 3, 4, 5 });
            }

            watch.Stop();


            for (int index = 0; index < 1000; index++)
            {
                 mList.Slice(102,100);
                //cList.GetRange(102, 10000);
            }




            Console.WriteLine(watch.ElapsedMilliseconds);
            Console.ReadKey();



            ServiceCollection newServiceCollection = new ServiceCollection();
            newServiceCollection.AddScoped<ServiceD,ServiceD>();
            ServiceD dObj;
            using (var provider = newServiceCollection.BuildServiceProvider())
            {
                using (dObj = (ServiceD)provider.GetService<ServiceD>())
                {

                }
            }

            var s = dObj.Do();

                Regex regHttpInfo = new Regex("http/1.1 +([0-9\\.]+) +", RegexOptions.IgnoreCase);
            var httpInfoMatch = regHttpInfo.Match("HTTP/1.1 204 No Content");
            var strStatusCode = httpInfoMatch.Groups[1].Value.Trim();


            /*Regex reg = new Regex(@"\{(?<!\\)\$((?!(\{(?<!\\)\$[A-Za-z0-9][A-Za-z0-9_]+\(.*\)(?<!\\)\})).)+?(?<!\\)\}");
            Regex reg1 = new Regex(@"\{(?<!\\)\$[A-Za-z0-9]((?!(\{(?<!\\)\$[A-Za-z0-9][A-Za-z0-9_]+\(.*\)(?<!\\)\})).)+?(?<!\\)\}");
            var str1 = "{$Tes1(1,{$Test1(1)},3)}";
            var matchs = reg1.Matches(str1);

            var count = matchs.Count;*/
            /* while (true)
             {
                 Console.Clear();

                 int start = 20;
                 int offset = 10;
                 int x = start + offset;
                 int y = start + offset;

                 consoleChar(x, y, "X", "@", "*");
                 Console.Write("\r\n");
                 int interVal = 1;
                 while (true)
                 {
                     //setRanColor();
                     x = x - interVal;
                     y = y + interVal;
                     if (x == start)
                     {
                         interVal = -interVal;
                     }

                     consoleChar(x, y, "X", "@", "*");
                     Console.Write("\r\n");
                     if (x == y)
                     {
                         break;
                     }
                 }

                 await Task.Delay(1000);
             }
             */






            //设置编码，解决中文问题
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            //设置应用程序工作基目录
            var baseUrl = Path.GetDirectoryName(typeof(Program).Assembly.Location);
            Environment.CurrentDirectory = baseUrl ?? Environment.CurrentDirectory;

            //获取运行环境名称
            var environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_APPLICATIONNAME");
            if (environmentName == null)
            {
                environmentName = string.Empty;
            }
            //初始化配置容器
            MainStartupHelper.InitConfigurationContainer(environmentName, baseUrl);

            //初始化上下文容器
            MainStartupHelper.InitContext();

            await CreateHostBuilder(args).Build().RunAsync();





            /*XNamespace xmlns = XNamespace.Get("http://schemas.microsoft.com/dynamics/2015/01/DataManagement");
            XNamespace i = XNamespace.Get("http://www.w3.org/2001/XMLSchema-instance");
            XDocument doc = new XDocument(
                new XElement(xmlns+"DataManagementPackageManifest",
                    new XAttribute(XNamespace.Xmlns + "i",i)
                )          
                );
            doc.Root.Name = "AA";

            var newElement = new XElement(xmlns+"DefinitionGroupName");
          
            newElement.Value = "Import";
            doc.Root.Add(newElement);
           



            newElement = new XElement("DD");
            newElement.SetAttributeValue(i + "nil", "true");
            doc.Root.Add(newElement);

















            await GetZipStream(async (stream) =>
                {
                    int buffSize = 1000;
                    FileInfo file = new FileInfo(@"d:\ttt.zip");
                    using (var fileStream = file.Open(FileMode.Create))
                    {
                        byte[] buff = new byte[buffSize];

                        while (true)
                        {
                            var resultCount = await stream.ReadAsync(buff, 0, buffSize);
                            if (resultCount != 0)
                            {
                                await fileStream.WriteAsync(buff, 0, resultCount);
                            }

                            if (resultCount < buffSize)
                            {
                                break;
                            }
                        }
                    }

                },
                new ZipTextItemFileInfo() { FileName = "A.txt", Text = "AAA" }, new ZipTextItemFileInfo() { FileName = "B.txt", Text = "BBB" });

            ServiceCollection serviceCollection = new ServiceCollection();
            serviceCollection.AddHttpClient();

            var serviceProvider=serviceCollection.BuildServiceProvider();
            var httpClientFactory=serviceProvider.GetService<IHttpClientFactory>();
            
            AdfsHelper.HttpClientFactory = httpClientFactory;



            var refreshResult=await AdfsHelper.RefreshToken("https://subcrmadfs.sokon.com/", "rFa7zTr1mmK7Sma5hzCaJozA0UaTNsZZ1ZlMXkMh1lsAAQAAu380Q1vL2XHVnkwnQsyBeHhOWDX0spMppw565EoQo4s8Wldp_BwAy_fbj7dOaFfZ-RJEKVAqstrAQ8-qIz1glKepxX-binlSt0HVuu4XwV7FamHWXIYpBNuH1xIgqGGqzBjX9x0ZZmWsvYwLAmUpbVYJN6BIG7SC_8lrTWhDe26XgR8Sj6nrOR6FQ1CwFmn481SS8Znll2xQZ9IXhes7-eD8idgYvdc6MYyoH1byS_c1QqCf2do1dTel9g5cw8o4Vyi8g3oZ7Iw1ZalcrPqiIqKbPW6I5GHZZ9w9AYtbSYqZSB8h0XpsSYdc3V1xFmePCehP-9Pteta8zE9naRa5qnAFAADU1WF73Qv7IBwzr2iJWXoWUWYOZCo1n1q4jv_QFUQaYHqMP9dkzSzVsBWhrqAG-RPKdCEIAxO3pvviWbvJDisqMPQ9QtYbaBWE9O7BA6hWcbprTAq9nnlxNcznzET-Jx29UNfcCOJcyuqTemhGz-LQGCFnp5OtezI3JmyHBc5EfXaZJC1NUjQhtUq1NuhO6MUw3Yg7eu4XCQQcO73207Ioxg2MgzmGOxxXEn9QXco6yIocX8fgclhBRjRpmW97SEPrGQ6l3wr3oP-4ZX4501gQenKmtq0j_FwOshjAQZ0-KVmvhWJHZel96OQ5TUEYb0xVG7y7D_qgMhKbitocsmemFLhacTIF14ApEOJXvxbwm3PAszOFczKX2oqBsJ-vasYReTtWTzkLXt8FmBAMU7VJghhPssDLXjQJfUInoDzNiW7INegCP4eUVzxfVnoCBxxB_UtqDlO-df-Y7xbdsOX29aiXt4ewIMYCKk7fHJFSr4MQMNXYe4LKjbMhIKj3oCcbpvep5jomdiFZiNLWWhYfn4Es-VHR5TnkZjAs2ugwLY5dSaaHRomB_cusnYo988RrvDY0mfOo2YyiY1oM0p0anKYaKzZ6QT96XkxCn4qAYccbXyrP0R4E9Tl9P2K6KE4sSArIZwlAeU-GjqIJbIapciRARKdLeo0tkvTm8RSpHycMMSj7kiVnRpRhsBEK04ej_bl7FfG2R7eATDHFuvics7zjmECwy3_JzsVEjFJBKkzoo9ANt_muVQIjCCR42IcxV2pc_XGrWdwctCb4jZgKiD5PBxZky8MVKhf3HCKyt0fBUtpdx1JdJxDHI-jApt5ONTTg3Rlhg5yY3a5F87iEY23zITlvWMLz8Zq_KxuPE8F84h9unwhPsTrEBrKkNRYNQOVPZqqtP79up6OdyMEAmvsb0WI6Onl3txRvPX37F_e-Cjnco12Qd0rPOillKt4oQvUc4C2goS8DAixTCIbHRZjK_Uonej-NcO9cQdu4X6lI5mYeVRXpaylS76wrcHYubVSwN0qeidt6XuApiO8HR7YCzugcYm9Q6cSZVFYOc68bEwJgP4xowevPeKXahOYulixXEc4GJyOlfapjYGOtuqlXLRqBVhdG5e7kq1ELjZ_FySstl5LA3743kIAtbgbh9iEv7H8uDB1iC2g-O4-sBfG5NR7c5MFUo9lKTOWo8gk6nM_GxJIGN3is38uzGjsmjtO_i-vQVujnVJa7kuSVxzjfmxOcG2vy1LZKkb3D_ocgJEKRZ3JNzTWVr6K_BnyC7RYoKKj9i3MAnzIZgDpAATOqrTGLE_jrapm8-hlzuWb8os3pwaMd89f4UPDjJT-Gg-B65k7ewY_Dk3_2Jcf2Qm6AL0ywdtnxuUGGlYadU20X3sVqAd_5QtaLvlHon6NFSeX0cLk6nzMANoR33hpV3XSvpo20yMiAiJ3zdmv-tXI-buGH_M-ZJcgLbyyfEH9MT_Yv_v8CqVZ4EqrZhGRqM5rYUP_sWN1ryRElYSXYBp51brKOdii-YlQaP041NTKENLS9YTDn6_8JYZ2avItmM8BjkuoS8YDf325rVWlZb3QIz5DudAhVAFMNb6LH346tc1EmX-sJJVt4taF9n5iD_ldcVm-XhceSReJAsSf");



            JsonSerializerSettings jsonSerializerSettings = new JsonSerializerSettings()
            {
                TypeNameHandling = TypeNameHandling.All,
                TypeNameAssemblyFormatHandling = TypeNameAssemblyFormatHandling.Full,
                
            };

            Dictionary<string, object> objDict = new Dictionary<string, object>()
            {
                { "aa",new User(){ ID=Guid.NewGuid(), Age=11, Comment="11", Name="L" } }
            };

            var strObjDict = JsonSerializerHelper.Serializer(objDict);

            var dictA=JsonSerializerHelper.Deserialize<Dictionary<string, object>>(@"{""$type"":""System.Collections.Generic.Dictionary`2[[System.String, System.Private.CoreLib],[System.Object, System.Private.CoreLib]], System.Private.CoreLib"",""ID"":""875e175c-2136-4a26-98ae-c2408ddac525"",""Type"":""Test"",""Body"":""xxx"",""Status"":0,""CreateTime"":""2019-12-07T10:44:33.2796697Z"",""ModifyTime"":""2019-12-07T10:44:33.2797729Z"",""UniqueInfo"":""20191207104433279669-875e175c21364a2698aec2408ddac525""}");


            object vv = new List<int> { 1};
            SObj sObj = new SObj()
            {
                Value = vv
            };

            JsonSerializerSettings settings = new JsonSerializerSettings()
            {
                 TypeNameHandling= TypeNameHandling.All
            };
            var strSObj=JsonConvert.SerializeObject(sObj, settings);

            sObj=JsonConvert.DeserializeObject<SObj>(strSObj, settings);


            var h = new HttpClientHandler() { Credentials = new NetworkCredential("crm9admin", "@Msc.com@", "Msc.com") };
            
           

            HttpClient client = new HttpClient(h);

            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Get, "http://106.15.138.75/crm9/api/data/v9.0");

            var r=await client.SendAsync(request);

            var authHeader=r.RequestMessage.Headers.Authorization;

            request = new HttpRequestMessage(HttpMethod.Get, "http://106.15.138.75/crm9/api/data/v9.0");
            request.Headers.Authorization = authHeader;
            HttpClient newClient = new HttpClient();
            var newR = await newClient.SendAsync(request);


            X509Store store = new X509Store(StoreName.Root, StoreLocation.LocalMachine);
            store.Open(OpenFlags.ReadOnly);
            var cs=store.Certificates;

            string strCntent = @"{
    ""entries"": [
        {
            ""locale"": ""zh-hk"",
            ""ACL"": {},
            ""_version"": 108,
            ""accept_cash_coupon"": false,
            ""business_hours"": """",
            ""close_date"": null,
            ""code"": ""SHT-SHT K1-Daniel Wellington  /Olivia Burton / Klasse 14"",
            ""contact_no"": """",
            ""created_at"": ""2019-08-06T18:05:41.412Z"",
            ""created_by"": ""bltfa46cce158845754"",
            ""description"": ""- 售賣手錶與首飾"",
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""is_closed"": false,
            ""is_new"": false,
            ""location_code"": ""SHT K1"",
            ""name"": ""Daniel Wellington  /Olivia Burton / Klasse 14"",
            ""name_sorting"": ""daniel wellington  /olivia burton / klasse 14"",
            ""nearest_mtr_exit"": ""非入閘區大堂"",
            ""open_date"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/sht.pdf""
            },
            ""rail_line"": [
                ""blte93806e9da86c4e3""
            ],
            ""station"": [
                ""blt1cc18de43f4f0715""
            ],
            ""station_shop_category"": [
                ""blt8dace69f8fb2383d""
            ],
            ""tags"": [
                ""daniel wellington /olivia burton / klasse 14""
            ],
            ""thumbnail_photo"": null,
            ""title"": ""沙田-SHT K1-Daniel Wellington  /Olivia Burton / Klasse 14"",
            ""uid"": ""blt0e89b6e1c4b20321"",
            ""updated_at"": ""2019-11-20T17:27:15.560Z"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""url"": {
                ""title"": """",
                ""href"": """"
            },
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-11-20T17:27:16.993Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt233f523b4d5c4811"",
            ""title"": ""香港-HOK APM 4-名仕快相"",
            ""code"": ""HOK-HOK APM 4-Max Sight Photo-Me"",
            ""shop"": [
                ""bltf78b8c695021f26d""
            ],
            ""name"": ""名仕快相"",
            ""name_sorting"": ""名仕快相"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 自助即影即有証件照片"",
            ""url"": {
                ""title"": """",
                ""href"": """"
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""B 出口"",
            ""location_code"": ""HOK APM 4"",
            ""accept_cash_coupon"": false,
            ""is_closed"": false,
            ""open_date"": ""2002-01-01"",
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": ""0600-0100"",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""blt5c4e94e735c09b0f""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""max sight photo-me""
            ],
            ""_version"": 4,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:24:12.165Z"",
            ""updated_at"": ""2019-09-10T17:22:14.104Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:22:15.505Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt77843f57c12dfbfd"",
            ""title"": ""香港-HOK 13c-鯉魚門紹香園"",
            ""code"": ""HOK-HOK 13c-Shiu Heung Yuen Bakery"",
            ""shop"": [
                ""bltfd862605983b3387""
            ],
            ""name"": ""鯉魚門紹香園"",
            ""name_sorting"": ""鯉魚門紹香園"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 售賣中式零食"",
            ""url"": {
                ""title"": """",
                ""href"": """"
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""1/F"",
            ""location_code"": ""HOK 13c"",
            ""accept_cash_coupon"": true,
            ""is_closed"": false,
            ""open_date"": null,
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": """",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""blt3c06743b811e8b7f""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""shiu heung yuen bakery""
            ],
            ""_version"": 3,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:30:42.668Z"",
            ""updated_at"": ""2019-09-10T17:22:00.694Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:22:02.196Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""bltc4930f4c1984194f"",
            ""title"": ""香港-HOK 83-七.十一便利店"",
            ""code"": ""HOK-HOK 83-7-Eleven"",
            ""shop"": [
                ""blt49a96f661778d32e""
            ],
            ""name"": ""七.十一便利店"",
            ""name_sorting"": ""七.十一便利店"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 售賣飲品、報紙雜誌、潮流產品及服務。"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.7-eleven.com.hk""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""市區預辦登機大堂"",
            ""location_code"": ""HOK 83"",
            ""accept_cash_coupon"": true,
            ""is_closed"": false,
            ""open_date"": null,
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": """",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""blt3c06743b811e8b7f""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""7-eleven""
            ],
            ""_version"": 4,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:19:54.509Z"",
            ""updated_at"": ""2019-09-10T17:21:52.592Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:21:54.095Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""bltb0a419264a9183b7"",
            ""title"": ""香港-HOK 53-大家樂"",
            ""code"": ""HOK-HOK 53-Cafe de Coral"",
            ""shop"": [
                ""blte35484de722a088e""
            ],
            ""name"": ""大家樂"",
            ""name_sorting"": ""大家樂"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 供應外賣特式食品及飲品"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.cafedecoralfastfood.com""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""市區預辦登機大堂"",
            ""location_code"": ""HOK 53"",
            ""accept_cash_coupon"": true,
            ""is_closed"": false,
            ""open_date"": null,
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": """",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""bltb0fd687568cd047d""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""cafe de coral""
            ],
            ""_version"": 3,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:19:16.832Z"",
            ""updated_at"": ""2019-09-10T17:21:47.206Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:21:49.639Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blta95b9947ab311542"",
            ""title"": ""香港-HOK ATM 10-恒生銀行自動櫃員機"",
            ""code"": ""HOK-HOK ATM 10-Hang Seng Bank ATM"",
            ""shop"": [
                ""blta361578697d731ff""
            ],
            ""name"": ""恒生銀行自動櫃員機"",
            ""name_sorting"": ""恒生銀行自動櫃員機"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 提供戶口提款, 結餘查詢, 轉賬及繳費等自助銀行服務"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.hangseng.com""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""市區預辦登機大堂"",
            ""location_code"": ""HOK ATM 10"",
            ""accept_cash_coupon"": false,
            ""is_closed"": false,
            ""open_date"": ""2002-01-01"",
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": ""0600-0030"",
            ""contact_no"": ""2822-0228"",
            ""station_shop_category"": [
                ""blt4d420b0061b7b273""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""hang seng bank atm""
            ],
            ""_version"": 3,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:18:41.346Z"",
            ""updated_at"": ""2019-09-10T17:21:42.801Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:21:44.410Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt1394dae2af126b75"",
            ""title"": ""香港-HOK 4-行李寄存"",
            ""code"": ""HOK-HOK 4-Left Baggage"",
            ""shop"": [
                ""bltdfff823525530771""
            ],
            ""name"": ""行李寄存"",
            ""name_sorting"": ""行李寄存"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 提供行李寄存服務"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.guardforce.com.hk""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""市區預辦登機大堂"",
            ""location_code"": ""HOK 4"",
            ""accept_cash_coupon"": false,
            ""is_closed"": false,
            ""open_date"": ""2002-01-01"",
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": ""0600-0100"",
            ""contact_no"": ""2868-3190"",
            ""station_shop_category"": [
                ""blt5c4e94e735c09b0f""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""left baggage""
            ],
            ""_version"": 3,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:17:18.674Z"",
            ""updated_at"": ""2019-09-10T17:21:38.203Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:21:39.706Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt6a27d75e5b1c1648"",
            ""title"": ""香港-HOK 63-Hallmark"",
            ""code"": ""HOK-HOK 63-Hallmark"",
            ""shop"": [
                ""blt8974856405e7d558""
            ],
            ""name"": ""Hallmark"",
            ""name_sorting"": ""hallmark"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""-  售賣賀咭、精品擺設及文具"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.hallmark.com""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""近港島綫月台"",
            ""location_code"": ""HOK 63"",
            ""accept_cash_coupon"": true,
            ""is_closed"": false,
            ""open_date"": ""2010-04-17"",
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": ""1100-2130 (Mon-Fri)\n1100-2100 (Sat, Sun & PH)"",
            ""contact_no"": ""2537-0312"",
            ""station_shop_category"": [
                ""blte2835a671a6eb3d2""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""hallmark""
            ],
            ""_version"": 2,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:24:47.363Z"",
            ""updated_at"": ""2019-09-09T17:41:45.416Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-09T17:41:46.834Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt75452a362708d4b9"",
            ""title"": ""香港-HOK 55-Can.teen"",
            ""code"": ""HOK-HOK 55-Can.teen"",
            ""shop"": [
                ""blt7204e12bec34bd52""
            ],
            ""name"": ""Can.teen"",
            ""name_sorting"": ""can.teen"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 供應外賣特式食品及飲品"",
            ""url"": {
                ""title"": """",
                ""href"": ""www.maxims.com.hk""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""市區預辦登機大堂"",
            ""location_code"": ""HOK 55"",
            ""accept_cash_coupon"": false,
            ""is_closed"": false,
            ""open_date"": null,
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": """",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""bltb0fd687568cd047d""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""can.teen""
            ],
            ""_version"": 2,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:25:32.644Z"",
            ""updated_at"": ""2019-09-09T17:41:40.736Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-09T17:41:42.176Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt21efe86ebf68dbfe"",
            ""title"": ""香港-HOK 34B-Wanko"",
            ""code"": ""HOK-HOK 34B-Wanko"",
            ""shop"": [
                ""blt405bbc9ebdf84f4c""
            ],
            ""name"": ""Wanko"",
            ""name_sorting"": ""wanko"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 售賣時裝及飾物"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.veeko.com.hk/""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""入閘區大堂"",
            ""location_code"": ""HOK 34B"",
            ""accept_cash_coupon"": false,
            ""is_closed"": false,
            ""open_date"": null,
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": """",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""blt8dace69f8fb2383d""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""wanko""
            ],
            ""_version"": 2,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:26:17.152Z"",
            ""updated_at"": ""2019-09-09T17:41:34.873Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-09T17:41:36.442Z"",
                ""user"": ""bltfa46cce158845754""
            }
        }
    ]
}";


            var stationShops = JsonConvert.DeserializeObject<StationShop>(strCntent);


            //设置编码，解决中文问题
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            //设置应用程序工作基目录
            _baseUrl = Path.GetDirectoryName(typeof(Program).Assembly.Location);
            Environment.CurrentDirectory = _baseUrl ?? Environment.CurrentDirectory;

            //获取运行环境名称
            //var environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_APPLICATIONNAME");
            if (environmentName == null)
            {
                environmentName = string.Empty;
            }
            //初始化配置容器
            MainStartupHelper.InitConfigurationContainer(environmentName, _baseUrl);

            //初始化上下文容器
            MainStartupHelper.InitContext();

            //获取核心配置
            var coreConfiguration = ConfigurationContainer.Get<CoreConfiguration>(ConfigurationNames.Application);

            ServiceCollection services = new ServiceCollection();

            //初始化DI容器
            MainStartupHelper.InitDI(services, coreConfiguration.DISetting);

            DbContextOptions<EntityContext> option = new DbContextOptions<EntityContext>();
            DbContextOptionsBuilder<EntityContext> optionBuilder = new DbContextOptionsBuilder<EntityContext>(option);

            EntityContext entityContext = new EntityContext(optionBuilder.UseSqlServer("Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=Library;Data Source=.").Options);

            var user =await (from item in entityContext.Users
                        select item).FirstOrDefaultAsync();



            string strPrivateKey = @"<RSAKeyValue><Modulus>oK8pjjdhHlvSwhbHFJrq4PRkRTsEcdV1/P8cZa6bt5ZWRBt7wN628a0Ztrf96Rtp5R+s17PQHFlcKC1/bqZIzpNwyeGbXiNK9WCiOcxVufX9Utu0UN37VLJ6UjzZruau24PxQUkO8ZPAfxT4Hqm0l9O4OVROtQg6I+401dF3TEEVDjsm1fNttES6rZlPOjHlqvYgu91DV/bDwd1zEPduzhV9VyG813G9uAfe55DVJgBWYM3A6M0y6Y0HYt4fBFmFTSBp2g1FrS622zGmMIxiCyofuIb4TpTNGjnrS6xX4A+qrWE4mKF372t9mWpQmJueUa+a4EBfOcGfFyDPXzQOPQ==</Modulus><Exponent>AQAB</Exponent><P>yJANjoQyIxQoiVUvO3DpCZ0hbc+pdKkZF3Os4ITyqc4RAjzMwXsJaSA14puz+S3sqxXSwJhjLh7Cy0jab+f7Q5nKO60cv9zeGA95p+GLFm+uiltPC+D9hOMpJokZ/hoQhBNbyV3iamLzhoKa/nCKgC3OvllEc2KcTTFrBy9pUDs=</P><Q>zRlISRQN28UUnVEeUSsytrfAPKH1u3v65VkD3vBDaIXGZeBB9mF9GhRduhHzlwtMRnZtlkAW5ANYouknI6r6EwDufPJk3anpVkB4QZ5v3P6Z7P5wNuEohmbpFHsFpUMLiKgkoP9OIVU+hosomB26Pmra4k6W+iRK3sh2OlGsa+c=</Q><DP>MczbIOUgUeeCfT9CoB7ULofusgabTBVk3pbheUpputIpFQYlzXEQkCLoXmFNGfVWS9D6aMot7ljDA5kObDUNBecc+R5uAhIEr7LAAXiWgbavfzlW8lsmeCWzpRbr9lVgfnsUEncWblYto9uwQreNHHDDYi5mOcRljSFVMw6Jtts=</DP><DQ>EvSYOrDQyxP+4L9DhwrwB/UZnkD1vhsqSBIfCna4NCvQ909vqT6/Wi6xruXD1pzjsst1O2K2+uHYSk40INbHgAQhBok8i0QN3bvdoWrsOceKIF4vrtLGdQ2D0zG/htOYeEvZ/ss5xFjli3fHC7ALq4MisbHDwGCkTszGKIOt5Nc=</DQ><InverseQ>ftIDKAb8AQWFs7cJ8yTUwOp2OYGTtmzQp3HJ+kD6b5C/ClnxQStSENksK78fJtW6P7lPX5o9i7bhMHd4rK8yOxBDwobhwpWh6KHTb5pVNTY1VWtp8LIl0M/r45KSo1SBC817tGNAJ/ezIcYxDoO1lv+pEAEGHr9xAKhpV5dlA5s=</InverseQ><D>BR3u3deHoTbdXE7rYg2Y4zcFJms9tf5NNpRNLDPGQ69m6d5SL48oFkQj6HyteknkMmay01+nhe+WjrT8NOLYuLNbSSKFFxdaoLvGDr8iD7z0pznV4Slggo74dDv51qcD9HucKC8SacEBxUo+qINQ+/DDEhhMNVmguFoyloiIGwZ+oRDoWBeptRHlteHEvdIIuFgIeE7Hv7wXB+G3ioM61a26cVH/u5nYEC2Ymk2CY2PqIxapxQFQrulALp0nV6IQFqBUtX+TCD4LwltyP9Exy48oFHSZpHI2e9F3vJ+PdAgcBILbLmtnKk8K9XeGvyOLFlJJaJhWVhK8zbajZupiRQ==</D></RSAKeyValue>";
            string strPublickey = @"<RSAKeyValue><Modulus>oK8pjjdhHlvSwhbHFJrq4PRkRTsEcdV1/P8cZa6bt5ZWRBt7wN628a0Ztrf96Rtp5R+s17PQHFlcKC1/bqZIzpNwyeGbXiNK9WCiOcxVufX9Utu0UN37VLJ6UjzZruau24PxQUkO8ZPAfxT4Hqm0l9O4OVROtQg6I+401dF3TEEVDjsm1fNttES6rZlPOjHlqvYgu91DV/bDwd1zEPduzhV9VyG813G9uAfe55DVJgBWYM3A6M0y6Y0HYt4fBFmFTSBp2g1FrS622zGmMIxiCyofuIb4TpTNGjnrS6xX4A+qrWE4mKF372t9mWpQmJueUa+a4EBfOcGfFyDPXzQOPQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>";

            JwtGenerateCreateSignKeyMainService.JwtGenerateCreateSignKeyServiceFactories.Add("RsaPrivate", DIContainerContainer.Get<JwtGenerateCreateSignKeyServiceForRsaPrivateFactory>());

            JwtGenerateValidateSignKeyMainService.JwtGenerateValidateSignKeyServiceFactories.Add("RsaPublic", DIContainerContainer.Get<JwtGenerateValidateSignKeyServiceForRsaPublicFactory>());
            JwtGenerateValidateSignKeyMainService.JwtGenerateValidateSignKeyServiceFactories.Add("MetadataService", DIContainerContainer.Get<JwtGenerateValidateSignKeyServiceForMetadataServiceFactory>());


            JwtEnpoint jwtEndpoint = new JwtEnpoint()
            {
                ID = Guid.NewGuid(),
                CreateTime = DateTime.UtcNow,
                ModifyTime = DateTime.UtcNow,
                Name = "A",
                CreateSignKeyType = "RsaPrivate",
                CreateSignKeyConfiguration = $@"{{""Key"":""{strPrivateKey}"",""Alg"":""{SecurityAlgorithms.RsaSha256Signature}""}}",
                ValidateSignKeyType = "MetadataService",
                ValidateSignKeyConfiguration = $@"{{""Uri"":""https://subcrmadfs.sokon.com/adfs/.well-known/openid-configuration"",""Cache"":true,""Timeout"":-1}}"
               

            };

            List<Claim> claims = new List<Claim>()
            {
                new Claim("A1","A1"),
                new Claim("A2","A2")
            };
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims);


            var strToken=await jwtEndpoint.CreateJwt("ASD", "BSD", claimsIdentity, null, null, null);

            var dClaims = await jwtEndpoint.ValidateJwt("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkU2M29sLVNHbmhhQkE0VWItY0RSb1pqZnNqZyJ9.eyJhdWQiOiJodHRwczovL3N1YmNybWRldjIuc29rb24uY29tL2FwaS9kYXRhL3Y4LjIiLCJpc3MiOiJodHRwOi8vc3ViY3JtYWRmcy5zb2tvbi5jb20vYWRmcy9zZXJ2aWNlcy90cnVzdCIsImlhdCI6MTU3MzIxNjk4MSwiZXhwIjoxNTczMjIwNTgxLCJwcmltYXJ5c2lkIjoiUy0xLTUtMjEtNDIyMjk0OTIwMC0yMDY1Njc0Mjk5LTIwNDgyNjQ5OTItMTEwNSIsInVwbiI6InN1YmRldmNybWFkbWluQHNmbW90b3JzLmNvbSIsInVuaXF1ZV9uYW1lIjoiU0ZNT1RPUlNcXHN1YmRldmNybWFkbWluIiwiYXBwdHlwZSI6IkNvbmZpZGVudGlhbCIsImFwcGlkIjoiZTMwNTM2ODItOTM1ZC00MWRmLWJjYzMtZjdmYzRkZTM3MDQwIiwiYXV0aG1ldGhvZCI6InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0IiwiYXV0aF90aW1lIjoiMjAxOS0xMS0wOFQxMjo0MzowMS4wMzFaIiwidmVyIjoiMS4wIn0.bZh4Zeu60MC9XJOzHHYr5R9lpcUoBIh5DGzfAFkKL18nmzmSxVNtZVih0leoGsUbJDN3UJVozsxJtP04q-0YFGLQQSUavZfd2H7JV1LYdx56L-AgFeOAyVI_0pXxzY4tSeVvmNnq7Zn-DNCUL5Ibe_3HAY61dOq68rRp2KlxmjHkxwIeN7ts3O_yyKJPWLDzkQw1SMwoG7wDGmEcdlP3ocsrdxQqp9GRthK608AphzKbrVZzdtGuWZiP7297-4uPwEtw8TwdRfyWhhyVZMd0jjIHWGamYRlFOlxh7oxGj7W7iUhV1vxbjw16B98K6QAVh3_zHmKdlEXDanW2J22UPQ", new List<JwtValidateParameter>());


            var helper=DIContainerContainer.Get<AdfsEndpointRepositoryHelper>();
            var endpoint=await helper.QueryByName("Main");

            var claimsP = await endpoint.ValidateJWT("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkU2M29sLVNHbmhhQkE0VWItY0RSb1pqZnNqZyJ9.eyJhdWQiOiJodHRwczovL3N1YmNybWRldjIuc29rb24uY29tL2FwaS9kYXRhL3Y4LjIiLCJpc3MiOiJodHRwOi8vc3ViY3JtYWRmcy5zb2tvbi5jb20vYWRmcy9zZXJ2aWNlcy90cnVzdCIsImlhdCI6MTU3MzIxNjk4MSwiZXhwIjoxNTczMjIwNTgxLCJwcmltYXJ5c2lkIjoiUy0xLTUtMjEtNDIyMjk0OTIwMC0yMDY1Njc0Mjk5LTIwNDgyNjQ5OTItMTEwNSIsInVwbiI6InN1YmRldmNybWFkbWluQHNmbW90b3JzLmNvbSIsInVuaXF1ZV9uYW1lIjoiU0ZNT1RPUlNcXHN1YmRldmNybWFkbWluIiwiYXBwdHlwZSI6IkNvbmZpZGVudGlhbCIsImFwcGlkIjoiZTMwNTM2ODItOTM1ZC00MWRmLWJjYzMtZjdmYzRkZTM3MDQwIiwiYXV0aG1ldGhvZCI6InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0IiwiYXV0aF90aW1lIjoiMjAxOS0xMS0wOFQxMjo0MzowMS4wMzFaIiwidmVyIjoiMS4wIn0.bZh4Zeu60MC9XJOzHHYr5R9lpcUoBIh5DGzfAFkKL18nmzmSxVNtZVih0leoGsUbJDN3UJVozsxJtP04q-0YFGLQQSUavZfd2H7JV1LYdx56L-AgFeOAyVI_0pXxzY4tSeVvmNnq7Zn-DNCUL5Ibe_3HAY61dOq68rRp2KlxmjHkxwIeN7ts3O_yyKJPWLDzkQw1SMwoG7wDGmEcdlP3ocsrdxQqp9GRthK608AphzKbrVZzdtGuWZiP7297-4uPwEtw8TwdRfyWhhyVZMd0jjIHWGamYRlFOlxh7oxGj7W7iUhV1vxbjw16B98K6QAVh3_zHmKdlEXDanW2J22UPQ", new string[] { "https://subcrmdev2.sokon.com/api/data/v8.2" });
            var userName= claimsP.FindFirst(System.Security.Claims.ClaimTypes.Name).Value;



            SerializerObj ssObj = new SerializerObj()
            {
                 Name="A"
            };

            HY.Do(ssObj);

            DateTime dt1970 = new DateTime(1970, 1, 1, 0, 0, 0, 0);
            var mill= (DateTime.UtcNow.Ticks - dt1970.Ticks) / 10000;
            var strT = $"dev10011 {mill.ToString()}";
            //var strT = $"dev10001";

            var encryptionService=EncryptionService.Create("d91n88jjaD/nxRLGtvYmZDa/uc/w7kaf491bdWZnuR8=");
            var strEncrypt=encryptionService.Encrypt(strT);

            var ab= BitConverter.ToInt64(Guid.NewGuid().ToByteArray(), 0).ToString()+BitConverter.ToInt64(Guid.NewGuid().ToByteArray(), 0).ToString().Substring(0,13);

            List<string> strList = new List<string>() { "aaa" };
            var strDisplay=await strList.ToDisplayString(
                async(item)=>
                {
                    return await Task.FromResult(item);
                },
                async()=>
                {
                    return await Task.FromResult(";_+");
                }
                );
            var strDate= DateTime.UtcNow.ToString("r");

            HttpClient httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("aa", new List<string> { "vv","bb"});
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/json");
            await httpClient.GetAsync("http://www.163.com");


            MemoryCache cache = new MemoryCache(new MemoryCacheOptions()
            {
                SizeLimit = 1
            });

            cache.Set(1, new CacheItem() { Number=1 }, new MemoryCacheEntryOptions()
            {
                AbsoluteExpirationRelativeToNow = new TimeSpan(0, 0, 100),
                 Size=1
                 
            });


            cache.Set("1", new CacheItem() { Number = 2 }, new MemoryCacheEntryOptions()
            {
                AbsoluteExpirationRelativeToNow = new TimeSpan(0, 0, 100),
                Size=1

            });


           var citem= cache.Get<CacheItem>(1);
         citem = cache.Get<CacheItem>("1");
            ParallelHelper parallelHelper = new ParallelHelper(40);

            ConcurrentDictionary<int, int> dict = new ConcurrentDictionary<int, int>(); 


            await parallelHelper.RunForward<int>(
                async(item)=>
                {
                    Random r = new Random(DateTime.Now.Millisecond);
             
                    await Task.Delay(r.Next(3000, 4000));
                    dict.TryAdd(item, item);
                },
                async(index)=>
                {

                    Random r = new Random(DateTime.Now.Millisecond);

                    await Task.Delay(r.Next(1000, 2000));

                    List<int> list = new List<int>();

                    for(var i=index*10;i< (index+1) * 10;i++)
                    {
                        list.Add(i);
                    }

                    if (index>=10)
                    {
                        return await Task.FromResult( (list, false));
                    }
                    else
                    {
                        return await Task.FromResult((list, true));
                    }
                }
                );
                */
            Console.Read();
        }


        public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host
    .CreateDefaultBuilder(args)
    .ConfigureServices((services)=>
    {
        //获取核心配置
        var coreConfiguration = ConfigurationContainer.Get<CoreConfiguration>(ConfigurationNames.Application);
        //初始化DI容器
        MainStartupHelper.InitDI(services, coreConfiguration.DISetting);
        MainStartupHelper.InitStaticInfo();

        CommonMessageHandleServiceMain.MessageHandleServiceFactories["T1"]= DIContainerContainer.Get<CommonMessageHandleForT1Factory>();

        ExpressionCalculatorIMP.FormulaCalculateServiceFactories["T1"] = new Dictionary<string, IFactory<IFormulaCalculateService>>();
        ExpressionCalculatorIMP.FormulaCalculateServiceFactories["T1"]["Test1"] = DIContainerContainer.Get<FormulaCalculateServiceForTest1Factory>();


        TokenControllerRepository.Controllers["Client"] = new TokenController()
        {
            ID = Guid.NewGuid(),
            Type = "JWT",
            Name = "Client",
            Configuration = @"
                    {
                        ""Issuer"":""MSCRM.ClientService"",
                        ""Audience"":""MSCRM.ClientService"",
                        ""ExpireSeconds"":600,
                        ""SignKey"":""1223112345672346""                  
                    }"
        };



        services.AddHostedService<HostedService>();
    })

    .ConfigureHostConfiguration(configHost =>
    {
    })
    .ConfigureAppConfiguration((buildContext, builder) =>
    {

    })
    .ConfigureLogging((bulider) =>
    {
        MainStartupHelper.InitLogger(bulider);
    });

        private static async Task GetZipStream(Func<Stream, Task> action, params ZipTextItemFileInfo[] items)
        {
            using (MemoryStream ms = new MemoryStream())
            {
                using (ZipOutputStream outStream = new ZipOutputStream(ms))
                {
                    Crc32 crc = new Crc32();


                    foreach (var item in items)
                    {
                        using (MemoryStream fileStream = new MemoryStream())
                        {
                            var fileBytes = UTF8Encoding.UTF8.GetBytes(item.Text);
                            await fileStream.WriteAsync(fileBytes, 0, fileBytes.Length);
                            ZipEntry entry = new ZipEntry(item.FileName);
                            entry.DateTime = DateTime.Now;
                            entry.Size = fileBytes.Length;

                            crc.Reset();
                            crc.Update(fileBytes);

                            entry.Crc = crc.Value;

                            outStream.PutNextEntry(entry);
                            ///将缓存区对象数据写入流中
                            outStream.Write(fileBytes, 0, fileBytes.Length);
                            ///注意：一定要关闭当前条目，否则压缩包数据会丢失
                            outStream.CloseEntry();

                        }

                    }

                    outStream.Finish();
                    ms.Position = 0;
                    await action(ms);
                }
          
            }
        }


        private static Dictionary<string,string> generateEntityAttributesJsonFromXML(string xmlFile)
        {
            Dictionary<string, List<string>> attributesDict = new Dictionary<string, List<string>>();

            XNamespace xmlns = "http://schemas.microsoft.com/dynamics/2015/01/DataManagement";

            var doc = XDocument.Load(xmlFile);
            var entityElements = doc.Root.Element(xmlns + "PackageEntityList").Elements(xmlns + "DataManagementPackageEntityData");
            foreach (var item in entityElements)
            {
                var atts = new List<string>();
                attributesDict[item.Element(xmlns + "EntityName").Value] = atts;
                var maps = item.Element(xmlns + "EntityMapList").Elements(xmlns + "EntityMap");
                foreach (var mapItem in maps)
                {
                    atts.Add(mapItem.Element(xmlns + "EntityField").Value);
                }
            }

            Dictionary<string, string> attsResult = new Dictionary<string, string>();

            foreach (var item in attributesDict)
            {
                attsResult[item.Key] = JsonSerializerHelper.Serializer(item.Value);
            }

            return attsResult;
        }
    }


    public class AInfo
    {
        public string Name { get; }
    }

    public class BInfo : AInfo
    {
        public string Name { get; set; }
    }
    public class ZipTextItemFileInfo
    {
        public string FileName { get; set; }
        public string Text { get; set; } 
    }

    [DataContract]
    public class SObj
    {
        [DataMember]
        public object Value { get; set; }
    }
    public class CacheItem
    {
        public int Number { get; set; }
    }

    public enum E
    {
        A=0,
        B=1
    }





    public sealed class EncryptionService 
    {
        public const int BlockSizeInBits = 128;
        public const int BlockSizeInBytes = BlockSizeInBits / 8;

        public static readonly Encoding DefaultEncoding = new UTF8Encoding(
            encoderShouldEmitUTF8Identifier: false,
            throwOnInvalidBytes: true);

        private readonly byte[] _key;

        public static EncryptionService Create(string key)
        {
            if (key is null) throw new ArgumentNullException(
                paramName: nameof(key),
                message: "Encryption key cannot be null.");

            byte[] bytes;

            try { bytes = Convert.FromBase64String(key); }
            catch (FormatException formatException)
            {
                throw new ArgumentException(
                    paramName: nameof(key),
                    message: "Invalid encryption key format. Encryption key must be in Base64 encoding.",
                    innerException: formatException);
            }

            return new EncryptionService(bytes);
        }

        public EncryptionService(byte[] key)
        {
            if (key is null) throw new ArgumentNullException(
                paramName: nameof(key),
                message: "Encryption key cannot be null.");
            if (key.Length != 256 / 8 && key.Length != 192 / 8 && key.Length != 128 / 8) throw new ArgumentException(
                 paramName: nameof(key),
                 message: "Incorrect encryption key length. AES key length must be 256, 192, or 128 bits (32, 24, or 16 bytes).");

            _key = key;
        }

        public byte[] Encrypt(byte[] plain)
        {
            if (plain is null) throw new ArgumentNullException(nameof(plain));

            using (Aes aes = Aes.Create())
            {
                aes.Key = _key;
                // IV is automatically generated.
                // Defaults to CBC mode.

                using (ICryptoTransform encryptor = aes.CreateEncryptor())
                using (var resultMemoryStream = new MemoryStream())
                {
                    resultMemoryStream.Write(aes.IV);

                    using (var cryptoStream = new CryptoStream(
                        stream: resultMemoryStream,
                        transform: encryptor,
                        mode: CryptoStreamMode.Write,
                        leaveOpen: true))
                    {
                        cryptoStream.Write(plain);
                    }

                    return resultMemoryStream.ToArray();
                }
            }
        }

        public string Encrypt(string plain) =>
            plain is null ? throw new ArgumentNullException(
                paramName: nameof(plain),
                message: "Plaintext cannot be null.") :
            Convert.ToBase64String(Encrypt(DefaultEncoding.GetBytes(plain)));

        public byte[] Decrypt(byte[] encrypted)
        {
            if (encrypted is null) throw new ArgumentNullException(nameof(encrypted));
            if (encrypted.Length == 0) throw new Exception();

            using (Aes aes = Aes.Create())
            {
                aes.Key = _key;
                // encrypted.AsSpan(start: 0, length: BlockSizeInBytes).CopyTo(aes.IV);
                //if (encrypted.AsSpan(start: 0, length: BlockSizeInBytes).SequenceEqual(aes.IV) == false) throw new Exception("Not copied.");
                aes.IV = encrypted.AsSpan(start: 0, length: BlockSizeInBytes).ToArray();


                using (ICryptoTransform decryptor = aes.CreateDecryptor())
                using (var resultMemoryStream = new MemoryStream())
                {
                    try
                    {
                        using (var cryptoStream = new CryptoStream(
                            stream: resultMemoryStream,
                            transform: decryptor,
                            mode: CryptoStreamMode.Write,
                            leaveOpen: true))
                        {
                            cryptoStream.Write(encrypted.AsSpan(start: BlockSizeInBytes));
                        }
                    }
                    catch (CryptographicException)
                    {
                        throw new Exception();
                    }

                    return resultMemoryStream.ToArray();
                }
            }
        }

        public string Decrypt(string encrypted)
        {
            if (encrypted is null) throw new ArgumentNullException(nameof(encrypted));

            byte[] encryptedytes;

            try { encryptedytes = Convert.FromBase64String(encrypted); }
            catch (FormatException) { throw new Exception(); }

            byte[] decryptedBytes = Decrypt(encryptedytes);

            try { return DefaultEncoding.GetString(decryptedBytes); }
            catch (ArgumentException) { throw new Exception(); }
        }
    }


    public static class HY
    {
        public static void Do<T>(T obj)
        {
            string str= JsonSerializerHelper.Serializer(obj);
        }

        public static void Do(SerializerObj obj)
        {
            var i = 1;
        }
    }

    [DataContract]
    public class SerializerObj
    {
        [DataMember]
        public string Name { get; set; }
    }

    [Injection(InterfaceType = typeof(IJwtConnectionFactory), Scope = InjectionScope.Singleton)]
    public class JwtConnectionFactory : IJwtConnectionFactory
    {
        public string CreateAllForJwt()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForJwt()
        {
            throw new NotImplementedException();
        }
    }

    [Injection(InterfaceType = typeof(ICommonQueueConnectionFactory), Scope = InjectionScope.Singleton)]
    public class CommonQueueConnectionFactory : ICommonQueueConnectionFactory
    {
        public string CreateAllForCommonQueue()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForCommonQueue()
        {
            throw new NotImplementedException();
        }
    }
    public class EntityContext : DbContext
    {
        public EntityContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilde)
        {

            ValueConverter userCommentConverter = new ValueConverter<string, string>(v => v, v => "N");

            modelBuilde.Entity<User>().ToTable("User").HasKey((entity) => entity.ID);
            modelBuilde.Entity<User>().Property((entity) => entity.Name).IsRequired().HasMaxLength(50);
            modelBuilde.Entity<User>().Property((entity) => entity.Comment).HasMaxLength(500)
                .HasConversion(userCommentConverter);

        }
    }

    [DataContract]
    public class User
    {
        [DataMember]
        public Guid ID
        {
            get;set;
        }
        [DataMember]
        public int Age
        {
            get;set;
        }
        [DataMember]
        public string Name
        {
            get;set;
        }
        [DataMember]
        public string Comment
        {
            get;set;
        }
    }




    public sealed class Entries
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Uid { get; set; }
        [JsonProperty(PropertyName = "station_shop_category")]
        public string[] StationShopCategoryUid { get; set; }
        [JsonProperty(PropertyName = "station")]
        public string[] StationUid { get; set; }
        [JsonProperty(PropertyName = "rail_line")]
        public string[] RailLineUid { get; set; }
        [JsonProperty(PropertyName = "disable_point_earn")]
        public bool DisablePointEarn { get; set; }
        [JsonProperty(PropertyName = "disable_self_earn")]
        public bool DisableSelfEarn { get; set; }
        [JsonProperty(PropertyName = "location_code")]
        public string LocationCode { get; set; }
        [JsonProperty(PropertyName = "open_date")]
        public DateTime? OpenDate { get; set; }
        [JsonProperty(PropertyName = "close_date")]
        public DateTime? CloseDate { get; set; }
    }

    public sealed class StationShop
    {
        [JsonProperty(PropertyName = "entries")]
        public List<Entries> Entries { get; set; }
    }


    public class HostedService : IHostedService
    {
        private ITokenControllerRepository _tokenControllerRepository;


        public HostedService(ITokenControllerRepository tokenControllerRepository)
        {
            _tokenControllerRepository = tokenControllerRepository;
        }
        public async Task StartAsync(CancellationToken cancellationToken)
        {

           var controller=await  _tokenControllerRepository.QueryByName("Client");

           var strToken=await controller.Generate(new List<Claim>() { new Claim("A","A") , new Claim("B", "B") });

           var principal= await controller.Validate(strToken);

    /*        CommonQueueProductEndpoint productEndpoint = new CommonQueueProductEndpoint()
            {
                ID = Guid.Parse("7CD820A6-C7AE-46DF-901F-DCC9002E96F2"),
                Name = "First",
                QueueType = "AzureServiceBus",
                QueueConfiguration = @"
                    {
                        ""ConvertToServiceName"":""Default"",
                        ""Items"":
                            {
                                ""Endpoint=sb://rhcndd.servicebus.chinacloudapi.cn/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=Rgzu8APH+4jzcGybxgk1mltj69XoFgSCyie1A0zTmGg="":
                                [
                                    {
                                        ""Code"":0,
                                        ""TopicItem"":""main""
                                    }
                                ]
                            }
                    }",
                CreateTime = DateTime.UtcNow,
                ModifyTime = DateTime.UtcNow

            };

            for (var index = 0; index <= 0; index++)
            {
                CommonMessage commonMessage = new CommonMessage()
                {
                    Data = $"AAA-{index.ToString()}",
                    CreateTime = DateTime.UtcNow,
                    Key = "SD",
                    Type = "T1"
                };
                await productEndpoint.Product(commonMessage);
            }
            
            */


            /* CommonQueueConsumeEndpoint consumeEndpoint = new CommonQueueConsumeEndpoint()
             {
                 ID = Guid.Parse("FEC2C05C-5D3F-4217-9D8C-D617CA796BEF"),
                 Name = "First",
                 QueueType = "AzureServiceBus",
                 QueueConfiguration = @"
                     {
                         ""ConnectionString"":""Endpoint=sb://rhcndd.servicebus.chinacloudapi.cn/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=Rgzu8APH+4jzcGybxgk1mltj69XoFgSCyie1A0zTmGg="",
                         ""Subscription"":""sub1"",
                         ""Items"":
                             [
                                 {
                                     ""ConvertFromServiceName"":""Default"",
                                     ""Topic"":""main""
                                 }
                             ]
                     }",
                 CreateTime = DateTime.UtcNow,
                 ModifyTime = DateTime.UtcNow

             };

             _consumeController = await consumeEndpoint.Consume(_commonMessageHandleService.Handle);
             */

            //await consumeController.Stop();
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {
 
        }
    }




    [Injection(InterfaceType = typeof(CommonMessageHandleForT1), Scope = InjectionScope.Singleton)]
    public class CommonMessageHandleForT1 : ICommonMessageHandleService
    {
        public async Task Handle(CommonMessage message)
        {
            throw new Exception("Error");
            Console.WriteLine(message.Data);
            await Task.CompletedTask;
        }
    }

    [Injection(InterfaceType = typeof(CommonMessageHandleForT1Factory), Scope = InjectionScope.Singleton)]
    public class CommonMessageHandleForT1Factory : IFactory<ICommonMessageHandleService>
    {
        private CommonMessageHandleForT1 _commonMessageHandleForT1;

        public CommonMessageHandleForT1Factory(CommonMessageHandleForT1 commonMessageHandleForT1)
        {
            _commonMessageHandleForT1 = commonMessageHandleForT1;
        }
        public ICommonMessageHandleService Create()
        {
            return _commonMessageHandleForT1;
        }
    }
}
