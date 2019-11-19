using System;
using System.Collections.Generic;
using System.Text;
using DCEM.SalesAssistant.Main.ViewModel.Request;

namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
    public interface IDriveRecordRepository
    {
        /// <summary>
        /// 试乘试驾列表查询接口
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        string QueryList(DriveRecordRequest request);

        /// <summary>
        /// 查询试乘试驾各个数量
        /// </summary>
        /// <param name="request"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        string QueryListByCount(DriveRecordRequest request, int status);
    }
}
