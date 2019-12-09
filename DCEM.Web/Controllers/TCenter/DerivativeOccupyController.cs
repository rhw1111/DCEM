//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Cors;
//using DCEM.UserCenterService.Main.Application.App.Contrac;
//using System.Threading.Tasks;
//using MSLibrary.Xrm;
//using DCEM.UserCenterService.Main.Factory;
//using MSLibrary;
//using DCEM.UserCenterService.Main.ViewModel.Request;

//namespace DCEM.Web.Controllers
//{
//    /// <summary>
//    /// 衍生品冻结库存接口
//    /// </summary>
//    [Route("api/DerivativeOccupy")]
//    public class DerivativeOccupyController : ApiController
//    {
//        [Route("do")]
//        [HttpPost]
//        public async Task<ResponseBase> Do(DerivativeOccupyRequest orderokrequestList)
//        {
//            ResponseBase actionResult = new ResponseBase();
//            if (orderokrequestList == null || orderokrequestList.ProductDetiles.Count <= 0)
//            {
//                actionResult.Code = MSCRM.TC.Utility.Enums.EnumsHelper.GetDescription(MSCRM.Common.Core.Enums.ApiStatus.MissingParameters);
//                actionResult.Message = "缺少参数";
//            }
//            else {

//               actionResult = await new DerivativeOccupyLogic().InsertOrderOkAsync(orderokrequestList);
//            }
          
//            return await Task.FromResult(actionResult);
//        }
//    }
//}
