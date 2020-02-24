using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Activities;

namespace PALibrary.Context
{
    public interface IWorkflowContextService
    {
        IWorkflowContextController Init(CodeActivityContext codeActivityContext);
    }

    public interface IWorkflowContextController : IDisposable
    {

    }
}
