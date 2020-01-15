//------------------------------------------------------------------------------
//     用于config配置值获取
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.Repository.Contrac
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using System.Xml.Linq;

    public interface IConfigRepository
    {
        Task<XDocument> GetConfigFetchXml(string name);
        Task<XDocument> GetVehicleColorXml();
        Task<XDocument> GetVehicleTypeXml();
    }
}
