using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.IO;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging.Console;
using System.Runtime.Serialization;
using System.Security;
using MSLibrary;
using MSLibrary.Thread;
using MSLibrary.Serializer;
using MSLibrary.Configuration;
using MSLibrary.DI;
using MSLibrary.Security.Jwt;
using MSLibrary.Security.Jwt.DAL;
using MSLibrary.Security.Jwt.JwtGenerateCreateSignKeyServices;
using MSLibrary.Security.Jwt.JwtGenerateValidateSignKeyServices;
using DCEM.Main;
using DCEM.ServiceAssistantService.Main.Entities;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace DCEM.ConsoleApp
{
    using MainStartupHelper = DCEM.Main.StartupHelper;
    class Program
    {

        private static string _baseUrl;

        async static Task  Main(string[] args)
        {


            //设置编码，解决中文问题
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            //设置应用程序工作基目录
            _baseUrl = Path.GetDirectoryName(typeof(Program).Assembly.Location);
            Environment.CurrentDirectory = _baseUrl ?? Environment.CurrentDirectory;

            //获取运行环境名称
            var environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_APPLICATIONNAME");
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



            SerializerObj sObj = new SerializerObj()
            {
                 Name="A"
            };

            HY.Do(sObj);

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

            Console.Read();
        }
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
}
