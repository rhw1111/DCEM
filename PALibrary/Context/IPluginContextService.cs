using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;

namespace PALibrary.Context
{
    public interface IPluginContextService
    {
        IPluginContextController Init(IServiceProvider serviceProvider);
    }

    public interface IPluginContextController:IDisposable
    {

    }


}
