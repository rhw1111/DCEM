using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace GenerateCode.GenerateCode
{
    public class ModelGenerateCodeCreate: BaseGenerateCode
    {
        private string requestClassName = "";
        private string responseClassName = "";
        private string baseRequestClassName = "PageBaseRequestModel";
        private string baseResponseClassName = "PageBaseResponseModel";
 
        private string requestPathUrl = $@"{basePath}/{baseNamespace}/ViewModel/Request/";
        private string responsePathUrl = $@"{basePath}/{baseNamespace}/ViewModel/Response/";
        private string appRequestNamespace = $@"{baseNamespace}.ViewModel.Request";
        private string appResponseNamespace = $@"{baseNamespace}.ViewModel.Response";
        public ModelGenerateCodeCreate(string moduleName)
        {
            requestClassName = $@"{moduleName}ListRequest";
            responseClassName = $@"{moduleName}ListResponse"; 
        }
       
        private List<string> namespaceList = new List<string>() {
             "System.Collections.Generic",
             "MSLibrary.Xrm" 
        }; 
        public void Generate()
        {
            var generateService = new GenerateService();
            generateService.Generate(this.requestClassName, this.appRequestNamespace, this.namespaceList, this.requestPathUrl, TypeAttributes.Public | TypeAttributes.Class, false, false,this.baseRequestClassName);
            generateService.Generate(this.responseClassName, this.appResponseNamespace, this.namespaceList, this.responsePathUrl, TypeAttributes.Public | TypeAttributes.Class,false,false,this.baseResponseClassName);
        }
    }
}
