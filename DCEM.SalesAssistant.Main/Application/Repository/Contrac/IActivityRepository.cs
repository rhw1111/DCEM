﻿using DCEM.SalesAssistant.Main.ViewModel.Request;
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
          Task<XDocument> GetListFetchXml(ActivitysRequest request);
        Task<XDocument> GetDetaillFetchXml(Guid id);
         
    }
}
