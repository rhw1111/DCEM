//------------------------------------------------------------------------------
// <auto-generated>
//     此代码由工具生成。
//     运行时版本:4.0.30319.42000
//
//     对此文件的更改可能会导致不正确的行为，并且如果
//     重新生成代码，这些更改将会丢失。
// </auto-generated>
//------------------------------------------------------------------------------

namespace DCEM.SalesAssistant.Main.Application.App
{
    using DCEM.SalesAssistant.Main.Application.App.Contrac;
    using DCEM.SalesAssistant.Main.Application.Services.Contrac;
    using DCEM.SalesAssistant.Main.ViewModel.Request;
    using DCEM.SalesAssistant.Main.ViewModel.Response;
    using System.Threading.Tasks;
    using MSLibrary.Xrm;
    
    
    public class AppInvoice : IAppInvoice
    {
        
        public IInvoiceService _invoiceService;
        
        public AppInvoice(IInvoiceService invoiceService)
        {
            _invoiceService=invoiceService;
        }
    }
}
