using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using PALibrary.Context;

namespace PALibrary.Application
{
    public interface IAppWorkflowContextService
    {
        IWorkflowContextController Init(CodeActivityContext codeActivityContext);
    }
}
