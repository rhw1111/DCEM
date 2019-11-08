using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DCEM.ServiceAssistantService.Main.Entities
{
    public interface IAdfsEndpointRepository
    {
        Task<AdfsEndpoint> QueryByName(string name);
    }
}
