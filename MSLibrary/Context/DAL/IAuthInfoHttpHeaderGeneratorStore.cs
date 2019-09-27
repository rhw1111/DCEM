using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MSLibrary.Context.DAL
{
    /// <summary>
    /// 认证信息Http头生成器数据操作
    /// </summary>
    public interface IAuthInfoHttpHeaderGeneratorStore
    {
        Task Add(AuthInfoHttpHeaderGenerator generator);
        Task Update(AuthInfoHttpHeaderGenerator generator);
        Task Delete(Guid id);

        Task<AuthInfoHttpHeaderGenerator> QueryByName(string name);
        Task<AuthInfoHttpHeaderGenerator> QueryByID(Guid id);

        Task<QueryResult<AuthInfoHttpHeaderGenerator>> QueryByPage(string name, int page, int pageSize);

    }
}
