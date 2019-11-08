using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.IO;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging.Console;
using MSLibrary;
using MSLibrary.Thread;
using MSLibrary.Serializer;
using System.Runtime.Serialization;

namespace DCEM.ConsoleApp
{
    class Program
    {
        async static Task  Main(string[] args)
        {
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

}
