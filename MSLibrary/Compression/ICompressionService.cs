using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace MSLibrary.Compression
{
    /// <summary>
    /// 压缩服务
    /// </summary>
    public interface ICompressionService
    {
        /// <summary>
        /// 压缩文本数据
        /// </summary>
        /// <param name="action"></param>
        /// <param name="items"></param>
        /// <returns></returns>
        Task GetCompressionStream(Func<Stream, Task> action, params CompressionTextItemFileInfo[] items);
    }

    /// <summary>
    /// 要压缩的文本数据项
    /// </summary>
    public class CompressionTextItemFileInfo
    {
        public string FileName { get; set; }
        public string Text { get; set; }
    }
}
