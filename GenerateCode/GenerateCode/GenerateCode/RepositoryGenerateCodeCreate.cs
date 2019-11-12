using GenerateCode.GenerateCode;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace GenerateCode
{
   public class RepositoryGenerateCodeCreate: BaseGenerateCode
    {
        private string className = "";
        private string interfaceName = "";
        private string pathUrl = $@"{basePath}/{baseNamespace}/Application/Repository/";
        private string iPathUrl = $@"{basePath}/{baseNamespace}/Application/Repository/Contrac/";
        private string appNamespace = $@"{baseNamespace}.Application.Repository";
        private string iAppNamespace = $@"{baseNamespace}.Application.Repository.Contrac";
        public RepositoryGenerateCodeCreate(string moduleName)
        {
            className = $@"{moduleName}Repository";
            interfaceName = $@"I{moduleName}Repository"; 
        }
       
        private List<string> namespaceList = new List<string>() {
             $@"{baseNamespace}.Application.Repository.Contrac",
             $@"{baseNamespace}.ViewModel.Request",
             $@"{baseNamespace}.ViewModel.Response",
             "System.Threading.Tasks",
             "MSLibrary.Xrm"
        };  
        public void Generate()
        {
            var generateService = new GenerateService();
            generateService.Generate(this.className, this.appNamespace, this.namespaceList, this.pathUrl, TypeAttributes.Public | TypeAttributes.Class, false,false,this.interfaceName);
            generateService.Generate(this.interfaceName, this.iAppNamespace, this.namespaceList, this.iPathUrl, TypeAttributes.Public | TypeAttributes.Interface);
        }
    }
}
