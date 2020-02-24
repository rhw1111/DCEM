using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using PALibrary.Context;

namespace PALibrary.Application
{
    public interface IAppPluginContextService
    {
        IPluginContextController Do(IServiceProvider serviceProvider);
    }
}
