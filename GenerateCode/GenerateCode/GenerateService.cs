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
    public class GenerateService
    {
        public void Generate(string className, string namespacestr, List<string> namespaceList, string pathStr, TypeAttributes typeAttributes, bool needConstructor = true,bool needcrmService=false,string interfaceName = null, string constructorParametTypeName = null, string constructorParametName = null, string PropertyParametName = null)
        {
            string outputFile = "";
            try
            {
                CodeCompileUnit unit = new CodeCompileUnit();
                CodeNamespace sampleNamespace = new CodeNamespace(namespacestr);
                //导入命名空间 
                for (int i = 0; i < namespaceList.Count; i++)
                {
                    sampleNamespace.Imports.Add(new CodeNamespaceImport(namespaceList[i]));
                }
                CodeTypeDeclaration Customerclass = new CodeTypeDeclaration(className);
                Customerclass.TypeAttributes = typeAttributes;
                if (typeAttributes.HasFlag(TypeAttributes.Class))
                {
                    if (needConstructor)
                    {
                        if (needcrmService)
                        {
                            CodeMemberField crmfield = new CodeMemberField("ICrmService", "_crmService");
                            crmfield.Attributes = MemberAttributes.Private;
                            Customerclass.Members.Add(crmfield);
                        }
                        //添加字段
                        CodeMemberField field = new CodeMemberField(constructorParametTypeName, PropertyParametName);
                        field.Attributes = MemberAttributes.Public;
                        Customerclass.Members.Add(field);
                        //添加构造
                        CodeConstructor constructor = new CodeConstructor();
                        if (needcrmService)
                        {
                            constructor.Parameters.Add(new CodeParameterDeclarationExpression("ICrmService", "crmService"));
                            constructor.Statements.Add(new CodeSnippetExpression($@" _crmService = crmService;
                     {PropertyParametName}={constructorParametName}"));
                        }
                        else
                        {
                            constructor.Statements.Add(new CodeSnippetExpression($@"{PropertyParametName}={constructorParametName}"));
                        }
                       
                        constructor.Attributes = MemberAttributes.Public;
                        constructor.Parameters.Add(new CodeParameterDeclarationExpression(constructorParametTypeName, constructorParametName));
                       
                        Customerclass.Members.Add(constructor);
                    }
                    //继承接口
                    if (!string.IsNullOrEmpty(interfaceName))
                    {
                        Customerclass.BaseTypes.Add(new CodeTypeReference(interfaceName));
                    }
                }
                sampleNamespace.Types.Add(Customerclass);
                unit.Namespaces.Add(sampleNamespace);
                outputFile = pathStr + className + ".cs";
                CodeDomProvider provider = CodeDomProvider.CreateProvider("CSharp");
                CodeGeneratorOptions options = new CodeGeneratorOptions();
                options.BracingStyle = "C";
                options.BlankLinesBetweenMembers = true;
                using (System.IO.StreamWriter sw = new System.IO.StreamWriter(outputFile))
                {
                    provider.GenerateCodeFromCompileUnit(unit, sw, options);
                }
            }
            catch (Exception ex)
            {
                var pathstr = outputFile;
                throw ex;
            }
        }
        public void Generate(string className, string namespacestr, List<string> namespaceList, string pathStr, TypeAttributes typeAttributes, string constructorStr, string interfaceName, string returnType)
        {
            try
            {
                CodeCompileUnit unit = new CodeCompileUnit();
                CodeNamespace sampleNamespace = new CodeNamespace(namespacestr);
                //导入命名空间 
                for (int i = 0; i < namespaceList.Count; i++)
                {
                    sampleNamespace.Imports.Add(new CodeNamespaceImport(namespaceList[i]));
                }
                CodeTypeDeclaration Customerclass = new CodeTypeDeclaration(className);
                Customerclass.TypeAttributes = typeAttributes;
                if (typeAttributes.HasFlag(TypeAttributes.Class))
                {
                    //添加构造
                    CodeMemberMethod method = new CodeMemberMethod();
                    method.Name = "Create";
                    method.Attributes = MemberAttributes.Public;
                    method.ReturnType = new CodeTypeReference(returnType);
                    method.Statements.Add(new CodeSnippetExpression(constructorStr));
                    Customerclass.Members.Add(method);

                    //继承接口
                    if (!string.IsNullOrEmpty(interfaceName))
                    {
                        Customerclass.BaseTypes.Add(new CodeTypeReference(interfaceName));
                    }
                }
                sampleNamespace.Types.Add(Customerclass);
                unit.Namespaces.Add(sampleNamespace);
                string outputFile = pathStr + className + ".cs";
                CodeDomProvider provider = CodeDomProvider.CreateProvider("CSharp");
                CodeGeneratorOptions options
                = new CodeGeneratorOptions();
                options.BracingStyle = "C";
                options.BlankLinesBetweenMembers = true;
                using (System.IO.StreamWriter sw = new System.IO.StreamWriter(outputFile))
                {
                    provider.GenerateCodeFromCompileUnit(unit, sw, options);
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
