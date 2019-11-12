using GenerateCode.GenerateCode;
using System;
using System.CodeDom;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace GenerateCode
{
    public class AppGenerateCodeCreate : BaseGenerateCode
    {
        private string className = "";
        private string interfaceName = "";
        private string constructorParametTypeName = "";
        private string constructorParametName = "";
        private string PropertyParametName = "";
        private string appNamespace = $@"{baseNamespace}.Application.App";
        private string iAppNamespace = $@"{baseNamespace}.Application.App.Contrac";
        private string pathUrl = $@"{basePath}/{baseNamespace}/Application/App/";
        private string iPathUrl = $@"{basePath}/{baseNamespace}/Application/App/Contrac/";
        public AppGenerateCodeCreate(string moduleName)
        {
            className = $@"App{moduleName}";
            interfaceName = $@"IApp{moduleName}";
            constructorParametTypeName = $@"I{moduleName}Service";
            constructorParametName = $@"{moduleName.ToLower()}Service";
            PropertyParametName = $@"_{moduleName.ToLower()}Service";
        }

        private List<string> namespaceList = new List<string>() {
             $@"{baseNamespace}.Application.App.Contrac",
             $@"{baseNamespace}.Application.Services.Contrac",
             $@"{baseNamespace}.ViewModel.Request",
             $@"{baseNamespace}.ViewModel.Response",
             "System.Threading.Tasks",
              "MSLibrary.Xrm"
        };


        public void Generate()
        {
            var generateService = new GenerateService();
            generateService.Generate(this.className, this.appNamespace, this.namespaceList, this.pathUrl, TypeAttributes.Public | TypeAttributes.Class, true, false,this.interfaceName, constructorParametTypeName, constructorParametName, PropertyParametName);
            generateService.Generate(this.interfaceName, this.iAppNamespace, this.namespaceList, this.iPathUrl, TypeAttributes.Public | TypeAttributes.Interface);
        }
    }
}
