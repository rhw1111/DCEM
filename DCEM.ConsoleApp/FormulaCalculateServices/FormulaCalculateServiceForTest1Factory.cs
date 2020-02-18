using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.ExpressionCalculate;

namespace DCEM.ConsoleApp.FormulaCalculateServices
{
    [Injection(InterfaceType = typeof(FormulaCalculateServiceForTest1Factory), Scope = InjectionScope.Singleton)]
    public class FormulaCalculateServiceForTest1Factory : IFactory<IFormulaCalculateService>
    {
        private FormulaCalculateServiceForTest1 _formulaCalculateServiceForTest1;

        public FormulaCalculateServiceForTest1Factory(FormulaCalculateServiceForTest1 formulaCalculateServiceForTest1)
        {
            _formulaCalculateServiceForTest1 = formulaCalculateServiceForTest1;
        }
        public IFormulaCalculateService Create()
        {
            return _formulaCalculateServiceForTest1;
        }
    }
}
