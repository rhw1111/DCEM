using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;
using MSLibrary.ExpressionCalculate;

namespace DCEM.ConsoleApp.FormulaCalculateServices
{
    [Injection(InterfaceType = typeof(FormulaCalculateServiceForTest1), Scope = InjectionScope.Singleton)]
    public class FormulaCalculateServiceForTest1 : IFormulaCalculateService
    {
        public async Task<object> Calculate(IList<object> parameters, object executeContext)
        {
            StringBuilder result = new StringBuilder();
            foreach(var item in parameters)
            {
                result.Append(item);
            }
            return await Task.FromResult(result);
        }


        public async Task<bool> IsIndividual()
        {
            return await Task.FromResult(false);
        }

        public async Task<object> ParameterConvert(int index, string value)
        {
            return await Task.FromResult(value);
        }
    }
}
