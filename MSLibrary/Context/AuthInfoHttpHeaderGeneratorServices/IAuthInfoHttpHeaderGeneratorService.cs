using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MSLibrary.Context.AuthInfoHttpHeaderGeneratorServices
{
    /// <summary>
    /// Http头身份信息生成器服务
    /// </summary>
    public interface IAuthInfoHttpHeaderGeneratorService
    {
        /// <summary>
        /// 生成身份信息键值对
        /// </summary>
        /// <returns></returns>
        Task<Dictionary<string, string>> Generate();
    }
}
