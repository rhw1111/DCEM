using MSLibrary.Xrm;
using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.DTOModel
{
    public class DeliveryListDtoModel
    {
        public List<CrmEntity> vinEntitys { get; set; }
        public List<CrmEntity> roEntitys { get; set; }
    }
}
