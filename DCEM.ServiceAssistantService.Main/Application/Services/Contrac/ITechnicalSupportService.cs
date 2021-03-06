﻿using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface ITechnicalSupportService
    {
        /// <summary>
        /// 分页查询技术支持
        /// </summary>
        Task<QueryResult<CrmEntity>> QueryListByPage(int orderstauts=0 , string searchkey="", int pageSize=10, int pageNum=1, string sort="",string token="");
        /// <summary>
        /// 通过Id获取数据
        /// </summary>
        /// <param name="entityId"></param>
        /// <returns></returns>
        Task<CrmEntity> QueryById(Guid entityId);

        Task<TechnicalSupportInfoResponse> QueryInfo(Guid entityId);
        /// <summary>
        /// 创建或编辑
        /// </summary>
        /// <param name="entityId"></param>
        /// <returns></returns>
        Task<Guid> AddOrEditEntity(TechnicalSupportRequest request);

        Task<ValidateResult<CrmEntity>> AddOrUpdate(JObject jo);
    }
}
