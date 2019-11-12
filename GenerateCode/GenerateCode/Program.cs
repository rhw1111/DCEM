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
    class Program
    {
        public string appNamespace = "DCEM.SalesAssistant.Main.Application.App";
        public string iAppNamespace = "DCEM.SalesAssistant.Main.Application.App.Contrac";
        public string serviceNamespace = "DCEM.SalesAssistant.Main.Application.Services";
        public string iServiceNamespace = "DCEM.SalesAssistant.Main.Application.Services.Contrac";
        public string repositoryNamespace = "DCEM.SalesAssistant.Main.Application.Repository";
        public string iRepositoryNamespace = "DCEM.SalesAssistant.Main.Application.Repository.Contrac";
        public string factoryNamespace = "DCEM.SalesAssistant.Main.Factory";
        static void Main(string[] args)
        {
            //需求生成必须的cs文件
            //1.App{ModuleName}.cs
            //2.IApp{ModuleName}.cs
            //3.{ModuleName}Service.cs
            //4.I{ModuleName}Service.cs
            //5.{ModuleName}Repository.cs
            //6.I{ModuleName}Repository.cs
            //7.{ModuleName}Factory.cs
            //准备一个代码编译器单元
            try
            {
                Console.WriteLine("请输入模块名称(注意首字母大写):");
                var moduleName = Console.ReadLine();
                Console.WriteLine("是否需要生成Model文件（只包含列表对象）Y/N?");
                 var needModel = Console.ReadLine().ToUpper();
                while (needModel != "Y" && needModel != "N")
                {
                    Console.WriteLine("输入错误，请重新输入!");
                    needModel = Console.ReadLine().ToUpper();
                } 
                var appGenerateCodeCreate = new AppGenerateCodeCreate(moduleName);
                appGenerateCodeCreate.Generate();
                Console.WriteLine($@"{moduleName}：App代码生成成功！");
                var serviceGenerateCodeCreate = new ServiceGenerateCodeCreate(moduleName);
                serviceGenerateCodeCreate.Generate();
                Console.WriteLine($@"{moduleName}：Service代码生成成功！"); 
                var repositoryGenerateCodeCreate = new RepositoryGenerateCodeCreate(moduleName);
                repositoryGenerateCodeCreate.Generate();
                Console.WriteLine($@"{moduleName}：Repository代码生成成功！");
                if (needModel == "Y")
                {
                    var modelGenerateCodeCreate = new ModelGenerateCodeCreate(moduleName);
                    modelGenerateCodeCreate.Generate();
                    Console.WriteLine($@"{moduleName}：Model代码生成成功！");
                }
                var factoryGenerateCodeCreate = new FactoryGenerateCodeCreate(moduleName);
                factoryGenerateCodeCreate.Generate();
                Console.WriteLine($@"{moduleName}：Factory代码生成成功！");
                Console.WriteLine($@"{moduleName}：文件已经生成完成,点击显示全部包含进项目,重新编译项目查看是否生成有误！");
                Console.ReadKey();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
