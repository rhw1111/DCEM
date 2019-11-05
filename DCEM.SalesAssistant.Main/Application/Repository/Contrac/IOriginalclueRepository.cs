using DCEM.SalesAssistant.Main.ViewModel.Request;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
   public interface IOriginalclueRepository
    {
        Task<XDocument> GetGetQueryListFetchXml(OriginalclueListRequest originalclueListRequest);
    }
}
