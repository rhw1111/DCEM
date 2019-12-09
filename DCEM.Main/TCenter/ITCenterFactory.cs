using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.Main.RemoteService;
using Microsoft.AspNetCore.Http;

namespace DCEM.Main.TCenter
{
    /// <summary>
    /// 通用商品交易中心接口工厂
    /// </summary>
    public interface ITCenterFactory
    {
        Task<ITCenterService> Create();
    }
}
