using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DCEM.ConfigurationService.Main.DTOModel;

namespace DCEM.ConfigurationService.Main.Application
{
    public interface IAppGetRemoteServiceDescriptionByName
    {
        Task<RemoteServiceDescriptionModel> Do(string name);
    }
}
