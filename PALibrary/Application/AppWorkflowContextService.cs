using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PALibrary.Context;
using Microsoft.Xrm.Sdk.Workflow;

namespace PALibrary.Application
{
    public class AppWorkflowContextService : IAppWorkflowContextService
    {
        private IWorkflowContextService _workflowContextService;

        public AppWorkflowContextService(IWorkflowContextService workflowContextService)
        {
            _workflowContextService = workflowContextService;
        }

        public IWorkflowContextController Init(CodeActivityContext codeActivityContext)
        {
            return _workflowContextService.Init(codeActivityContext);
        }
    }

    public class AppWorkflowContextServiceFactory : SingletonFactorySelf<IAppWorkflowContextService, AppWorkflowContextServiceFactory>
    {
        protected override IAppWorkflowContextService RealCreate()
        {
            var workflowContextService = WorkflowContextServiceFactory.Get();
            AppWorkflowContextService appWorkflowContextService = new AppWorkflowContextService(workflowContextService);
            return appWorkflowContextService;
        }
    }
}
