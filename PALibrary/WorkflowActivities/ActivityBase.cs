using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Activities;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using PALibrary.Application;
using PALibrary.Initialization;

namespace PALibrary.WorkflowActivities
{
    public abstract class ActivityBase: CodeActivity
    {
        private IAppWorkflowContextService _appWorkflowContextService = AppWorkflowContextServiceFactory.Get();

        protected override void Execute(CodeActivityContext context)
        {

            IWorkflowContext wfContext = context.GetExtension<IWorkflowContext>();
            IOrganizationServiceFactory sFactory = (IOrganizationServiceFactory)context.GetExtension<IOrganizationServiceFactory>();


            SystemInitialzation.Start(sFactory, wfContext);

            if (!OverrideExecute())
            {
                using (var appResult = _appWorkflowContextService.Init(context))
                {
                    try
                    {
                        InnerExecute(context,wfContext);
                    }
                    catch (Exception ex)
                    {

                        if (ex is UtilityException)
                        {
                            throw new InvalidPluginExecutionException(ex.GetCurrentLcidMessageSync());
                        }
                        else
                        {
                            throw new InvalidPluginExecutionException(ex.ToString() + ex.StackTrace);
                        }
                    }
                }
            }
            else
            {
                InnerOverrideExecute(context, wfContext);

            }
        }

        public abstract void InnerExecute(CodeActivityContext context, IWorkflowContext wfContext);
        protected virtual void InnerOverrideExecute(CodeActivityContext context, IWorkflowContext wfContext)
        {

        }

        protected virtual bool OverrideExecute()
        {
            return false;
        }


    }



}
