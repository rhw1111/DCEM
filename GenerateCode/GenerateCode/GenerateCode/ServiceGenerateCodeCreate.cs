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
    public class ServiceGenerateCodeCreate : BaseGenerateCode
    {
        private string className = "";
        private string interfaceName = "";
        private string constructorParametTypeName = "";
        private string constructorParametName = "";
        private string PropertyParametName = "";
        private string pathUrl = $@"{basePath}/{baseNamespace}/Application/Services/";
        private string iPathUrl= $@"{basePath}/{baseNamespace}/Application/Services/Contrac/";
        private string appNamespace = $@"{baseNamespace}.Application.Services";
        private string iAppNamespace = $@"{baseNamespace}.Application.Services.Contrac";
        public ServiceGenerateCodeCreate(string moduleName)
        {
            className = $@"{moduleName}Service";
            interfaceName = $@"I{moduleName}Service";
            constructorParametTypeName = $@"I{moduleName}Repository";
            constructorParametName = $@"{moduleName.ToLower()}Repository";
            PropertyParametName = $@"_{moduleName.ToLower()}Repository";
        }
        private List<string> namespaceList = new List<string>() {
             $@"{baseNamespace}.Application.Repository.Contrac",
             $@"{baseNamespace}.Application.Services.Contrac",
             $@"{baseNamespace}.ViewModel.Request",
             $@"{baseNamespace}.ViewModel.Response",
             "System.Threading.Tasks",
             "MSLibrary.Xrm"
        };
        public void Generate()
        {
            var generateService = new GenerateService();
            generateService.Generate(this.className, this.appNamespace, this.namespaceList, this.pathUrl, TypeAttributes.Public | TypeAttributes.Class, true, true,this.interfaceName, constructorParametTypeName, constructorParametName, PropertyParametName);
            generateService.Generate(this.interfaceName, this.iAppNamespace, this.namespaceList, this.iPathUrl, TypeAttributes.Public | TypeAttributes.Interface);
        }
    }
}
