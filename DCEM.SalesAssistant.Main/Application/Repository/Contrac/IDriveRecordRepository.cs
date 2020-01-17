using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
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

        XDocument GetConfigFetchXml(string name);

        XDocument GetUser(string userid);
        /// <summary>
        /// 试乘试驾明细
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<XDocument> GetDriveRecordDetaill(Guid id);
        /// <summary>
        /// 附件列表
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<XDocument> GetAttachmentDetaillFetchXml(Guid id);


        Task<XDocument> GetTestdrivefeedback(Guid id);


        Task<XDocument> GetTestdrivefeedbackDetail(Guid id);
        /// <summary>
        /// 查询试乘试驾各个数量
        /// </summary>
        /// <param name="request"></param>
        /// <param name="status"></param>
        /// <returns></returns>
        string QueryListByCount(DriveRecordRequest request, int status);

        /// <summary>
        /// 试乘试驾预约时段列表查询
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        string QueryReservationList(DriveReservationRequest request);

        /// <summary>
        /// 试乘试驾车辆列表
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        string QueryDriveCarList(TestDriveCarRequest request);

        /// <summary>
        /// 试乘试驾路线
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        string QueryDriveRouteList(DriveRouteRequest request);

        /// <summary>
        /// 查询试乘试驾附件
        /// </summary>
        /// <param name="driverecordid"></param>
        /// <returns></returns>
        string QueryAttachment(string driverecordid);
    }
}
