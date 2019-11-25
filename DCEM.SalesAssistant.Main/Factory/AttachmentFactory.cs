
//功能描述：整车订单工程类
using DCEM.SalesAssistant.Main.Application.App;
using DCEM.SalesAssistant.Main.Application.App.Contrac;
using DCEM.SalesAssistant.Main.Application.Repository;
using DCEM.SalesAssistant.Main.Application.Repository.Contrac;
using DCEM.SalesAssistant.Main.Application.Services;
using DCEM.SalesAssistant.Main.Application.Services.Contrac;
using MSLibrary;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.SalesAssistant.Main.Factory
{
    public class AttachmentFactory : IFactory<Task<IAppAttachment>>
    {
        public async Task<IAppAttachment> Create()
        {
            try
            {
                var crmService = StartupHelper.CreateCrmService(); 
                IAttachmentService AttachmentService = new AttachmentService(crmService);
                IAppAttachment app = new AppAttachment(AttachmentService);

                return app;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
