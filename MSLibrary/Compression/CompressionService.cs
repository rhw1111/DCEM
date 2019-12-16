using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using ICSharpCode.SharpZipLib.Zip;
using ICSharpCode.SharpZipLib.Checksum;

namespace MSLibrary.Compression
{
    [Injection(InterfaceType = typeof(ICompressionService), Scope = InjectionScope.Singleton)]
    public class CompressionService : ICompressionService
    {
        public async Task GetCompressionStream(Func<Stream, Task> action, params CompressionTextItemFileInfo[] items)
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
    }
}
