//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.UserCenterService.Main.Application.Services.Contrac
{
    using DCEM.UserCenterService.Main.Application.Repository.Contrac;
    using DCEM.UserCenterService.Main.Application.Services.Contrac;
    using DCEM.UserCenterService.Main.ViewModel.Request;
    using DCEM.UserCenterService.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    using MSLibrary;
    using System.Collections.Generic;
    using System;

    public interface IShippingaddressService
    {

        ValidateResult AddOrUpdate(ShippingaddressAddRequest model);
        Task<ValidateResult<List<CrmEntity>>> GetList(ShippingaddressListRequest request);


        Task<ValidateResult<CrmEntity>> GetDetail(Guid id);
    }
}
