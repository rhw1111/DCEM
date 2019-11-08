using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace DCEM.SalesAssistant.Main.Application.Repository.Contrac
{
    public interface ICustomerLabelRepository
    {
        Task<XDocument> GetAll();
    }
}
