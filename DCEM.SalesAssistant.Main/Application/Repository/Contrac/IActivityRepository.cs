using DCEM.SalesAssistant.Main.ViewModel.Request;
using MSLibrary;
using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
   public interface IActivityRepository
    {
          Task<XDocument> GetListFetchXml(ActivityRequest request);
        Task<XDocument> GetDetaillFetchXml(Guid id);

        Task<XDocument> GetAccountFetchXml(Guid id);
        Task<XDocument> GetContactFetchXml(Guid id);
        Task<XDocument> GetOnlyleadFetchXml(Guid id); 
    }
}
