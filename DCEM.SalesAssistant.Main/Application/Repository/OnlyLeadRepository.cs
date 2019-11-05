using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.ViewModel.Request;

namespace DCEM.SalesAssistant.Main.Application.Repository
{
    public class OnlyLeadRepository : IOnlyLeadRepository
    {
        public string QueryList(OnlyLeadRequest onlyLeadRequest)
        {
            throw new System.NotImplementedException();
        }

        /// <summary>
        /// 唯一线索详情
        /// </summary>
        /// <param name="entityid"></param>
        /// <returns></returns>
        public string GetOnlyLeadDetail(string entityid)
        {
            string strQuery = string.Format($"$select=mcs_appointmentat,_mcs_appointmentconfigid_value,mcs_appointmentsource,mcs_appointmenttype,mcs_canceldes,mcs_cancelreasonnew,mcs_carplate,_mcs_cartype_value,mcs_customeraddr,mcs_customercomment,_mcs_customerid_value,mcs_customername,mcs_customerphone,_mcs_dealerid_value,mcs_name,mcs_nextmaintainat,mcs_nextmaintainmileage,mcs_status,mcs_tag&$expand=mcs_appointmentconfigid($select=mcs_name,mcs_surplusnum),mcs_cartype($select=mcs_name),mcs_dealerid($select=mcs_name),mcs_customerid($select=mcs_name)&$filter=statecode eq 0 and  mcs_appointmentinfoid eq {entityid}");
            return strQuery;
        }
    }

}
