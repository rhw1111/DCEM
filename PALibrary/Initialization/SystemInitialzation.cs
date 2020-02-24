using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Reflection;
using Microsoft.Xrm.Sdk;

namespace PALibrary.Initialization
{
    /// <summary>
    /// 系统初始化入口点
    /// </summary>
    public static class SystemInitialzation
    {
        private static bool _initial = false;
        private static object _lock = new object();

        public static void Start(IOrganizationServiceFactory orgServiceFactory,IExecutionContext context)
        {
            if (!_initial)
            {
                lock (_lock)
                {
                    if (!_initial)
                    {
                        //从自身的程序集中查找具有SystemInitialAttribute属性标识的类
                        //找到后按Order排序，依次执行Start静态方法
                        MethodInfo method = null;
                        var assembly = typeof(SystemInitialzation).Assembly;


                        var typeList = assembly.GetTypes();
                        var initialMethods = new List<dynamic>();

                        foreach (var typeItem in typeList)
                        {
                            var att = typeItem.GetCustomAttribute<SystemInitialAttribute>();

                            if (att != null)
                            {
                                method = typeItem.GetMethod("Start");
                                if (method != null)
                                {
                                    initialMethods.Add(new { Order = att.Order, Method = method });
                                }

                            }

                        }

                        initialMethods = initialMethods.OrderBy((item) => item.Order).ToList();

                        foreach (var item in initialMethods)
                        {
                            item.Method.Invoke(orgServiceFactory, context);
                        }

                        _initial = true;
                    }
                }
            }
        }
    }
}
