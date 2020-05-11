using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using PALibrary.Initialization;
using PALibrary.Application;

namespace PALibrary.Plugins
{
    public abstract class PluginBase : IPlugin
    {
        private IAppPluginContextService _appPluginContextService = AppPluginContextServiceFactory.Get();
        public void Execute(IServiceProvider serviceProvider)
        {

            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            IOrganizationServiceFactory sFactory =(IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));

            SystemInitialzation.Start(sFactory, context);

            if (!OverrideExecute())
            {
                using (var appResult= _appPluginContextService.Do(serviceProvider))
                {
                 try
                    {
                        InnerExecute(context);
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
                InnerOverrideExecute(context, serviceProvider);

            }
        }



        public abstract void InnerExecute(IPluginExecutionContext context);
        protected virtual void InnerOverrideExecute(IPluginExecutionContext context, IServiceProvider serviceProvider)
        {

        }

        protected virtual bool OverrideExecute()
        {
            return false;
        }

    }
}
