﻿using DCEM.UserCenterService.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.UserCenterService.Main.Application.Repository.Contrac
{
    public interface ITestDriveRepository
    {
        /// <summary>
        /// 我的试乘试驾预约xml
        /// </summary>
        /// <param name="Request"></param>
        /// <returns></returns>
        string GetDriveRecordList(TestDriveRequest Request);


        /// <summary>
        /// 我的试乘试驾反馈xml
        /// </summary>
        /// <param name="Request"></param>
        /// <returns></returns>
        string GetDriveFeedbackList(TestDriveFeedbackRequest Request);



        /// <summary>
        /// 我的试乘试驾反馈问题项xml
        /// </summary>
        /// <param name="testdrivefeedbackmasterid"></param>
        /// <returns></returns>
        string GetDriveFeedbackItemList(string testdrivefeedbackmasterid);

        /// <summary>
        /// 通过试乘试驾记录获取对应反馈
        /// </summary>
        /// <param name="testdriveid"></param>
        /// <returns></returns>
        Task<XDocument> GetDriveFeedbackByRecordId(string testdriveid);

        /// <summary>
        /// 根据编码查询用户行为
        /// </summary>
        /// <param name="mcs_code"></param>
        /// <returns></returns>
        string GetDriveBehavior(string mcs_code);

    }
}
