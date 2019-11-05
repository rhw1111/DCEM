using System;
using System.Collections.Generic;
using System.Text;

namespace DCEM.SalesAssistant.Main.ViewModel.Response
{
    public class ResultResponse<T>
    {
        public List<T> Data { get; set; }
        public bool Success { get; set; }
        public string Mssage { get; set; }
    }
}
