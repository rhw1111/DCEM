using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace GenerateCode.GenerateCode
{
    public class FactoryGenerateCodeCreate: BaseGenerateCode
    {
        private string className = "";
        private string interfaceName = "";
        private string returnType = "";
        private string  appClassName ="";
        private string appinterfaceName = "";
        private string serviceClassName = "";
        private string serviceinterfaceName = "";
        private string repositoryClassName = "";
        private string repositoryinterfaceName = "";
        private string appNamespace = $@"{baseNamespace}.Factory";
        private string pathUrl = $@"{basePath}/{baseNamespace}/Factory/"; 
        public FactoryGenerateCodeCreate(string moduleName)
        {
            className = $@"{moduleName}Factory";
            interfaceName = $@"IFactory<Task<IApp{moduleName}>>"; 
            returnType = $@"Task<IApp{moduleName}>";
            appClassName = $@"App{moduleName}";
            appinterfaceName = $@"IApp{moduleName}";
            serviceClassName = $@"{moduleName}Service";
            serviceinterfaceName = $@"I{moduleName}Service";
            repositoryClassName = $@"{moduleName}Repository";
            repositoryinterfaceName = $@"I{moduleName}Repository";
        } 
        private List<string> namespaceList = new List<string>() {
              $@"{baseNamespace}.Application.App",
              $@"{baseNamespace}.Application.App.Contrac",
              $@"{baseNamespace}.Application.Repository",
              $@"{baseNamespace}.Application.Repository.Contrac",
              $@"{baseNamespace}.Application.Services",
              $@"{baseNamespace}.Application.Services.Contrac",
             "System.Threading.Tasks",
             "MSLibrary.Xrm",
             "MSLibrary",
             "System"
        };
        

        public void Generate()
        {
            var constructorStr = $@"var crmService = StartupHelper.CreateCrmService();
                {repositoryinterfaceName} {repositoryClassName.ToLower()} = new {repositoryClassName}();
                {serviceinterfaceName} {serviceClassName.ToLower()} = new {serviceClassName}(crmService, {repositoryClassName.ToLower()});
                {appinterfaceName} app = new {appClassName}({serviceClassName.ToLower()}); 
                return Task.FromResult(app);";
            var generateService = new GenerateService();
            generateService.Generate(this.className, this.appNamespace, this.namespaceList, this.pathUrl, TypeAttributes.Public | TypeAttributes.Class, constructorStr, this.interfaceName,this.returnType);
        }
    }
}
