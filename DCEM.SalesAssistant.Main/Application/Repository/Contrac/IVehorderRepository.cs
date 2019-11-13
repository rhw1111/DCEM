using System;
using System.Collections.Generic;
using System.Text;
using DCEM.SalesAssistant.Main.ViewModel.Request;
namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
    public  interface IVehorderRepository
    {
        /// <summary>
        /// 整车订单列表查询xml
        /// </summary>
        /// <param name="vehorderRequest"></param>
        /// <returns></returns>
        string GetVehorderList(VehorderRequest vehorderRequest);


        /// <summary>
        /// 订单透明化状态跟踪查询xml
        /// </summary>
        /// <param name="mcs_vehorderid"></param>
        /// <returns></returns>
        string GetVehordertrackList(string mcs_vehorderid);

        /// <summary>
        /// 权益项查询xml
        /// </summary>
        /// <param name="mcs_vehorderid"></param>
        /// <returns></returns>
        string GetRightitemuseList(string mcs_vehorderid);

    }
}
