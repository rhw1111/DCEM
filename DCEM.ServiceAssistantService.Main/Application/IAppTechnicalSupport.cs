﻿using DCEM.ServiceAssistantService.Main.DTOModel;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
namespace DCEM.ServiceAssistantService.Main.Application
{
    public interface IAppTechnicalSupport
    {
        /// <summary>
        /// 分页获取技术支持
        /// </summary>
        /// <param name="entityId"></param>
        Task<QueryResult<CrmEntity>> QueryListByPage(int orderstauts = 0, string searchkey = "", int pageSize=10, int pageNum=0, string sort="",string token="");
        /// <summary>
        /// 通过ID获取详情数据
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<CrmEntity> QueryById(Guid id);
        Task<TechnicalSupportInfoResponse> QueryInfo(Guid id);
        
        /// <summary>
        /// 创建或编辑实体
        /// </summary>
        /// <param name="crmEntity"></param>
        /// <returns></returns>
        Task<Guid> AddOrEditEntity(TechnicalSupportRequest request);

        Task<ValidateResult<CrmEntity>> AddOrUpdate(JObject jo);
    }
}
