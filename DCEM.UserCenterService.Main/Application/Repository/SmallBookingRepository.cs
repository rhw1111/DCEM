//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.Repository
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using System;

    public class SmallBookingRepository : ISmallBookingRepository
    {
        /// <summary>
        /// 查询小订活动关联的选配
        /// </summary>
        /// <param name="filterequitypackageids"></param>
        /// <returns></returns>
        public string QueryEquity(string filterequitypackageids)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// 查询小订活动关联的权益包
        /// </summary>
        /// <param name="samllbookingid"></param>
        /// <returns></returns>
        public string QueryEquityPackage(Guid samllbookingid)
        {
            throw new NotImplementedException();
        }

        public string QueryOptional(Guid samllbookingid)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// 查询小订活动
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public string QuerySmallBooking(SmallBookingListRequest request)
        {
            var filter = string.Empty;
            if (request.mcs_starttime!=null)
            {
                filter += $"<condition attribute='mcs_starttime' operator='ge' value='{request.mcs_starttime}' />";
            }
            if (request.mcs_endtime != null)
            {
                filter += $"<condition attribute='mcs_endtime' operator='le' value='{request.mcs_endtime}' />";
            }
            if (request.mcs_poststatus != null)
            {
                filter += $"<condition attribute='mcs_poststatus' operator='eq' value='{request.mcs_poststatus}' />";
            }
            var fetchString = $@"<fetch version='1.0' count='{request.PageSize}' page='{request.PageIndex}' output-format='xml-platform' mapping='logical' distinct='false'>
                  <entity name='mcs_smallbooking'>
                    <attribute name='mcs_name' />
                    <attribute name='createdon' />
                    <filter type='and'>
                      <condition attribute='statecode' operator='eq' value='0' />
                      {filter}
                    </filter>
                  </entity>
                </fetch>";

            return fetchString;
        }
    }
}
