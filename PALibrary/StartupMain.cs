using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using PALibrary.Entities;
using PALibrary.Entities.PADomainEntityConvertServices;
using PALibrary.PAEntityExtensions;

namespace PALibrary
{
    [SystemInitial(Order =0)]
    public static class StartupMain
    {
        public static void Start()
        {
    
            ContextContainer.Current.Register<IOrganizationService>(ContextTypes.OrgService, new ContextOrgService());
            ContextContainer.Current.Register<IOrganizationServiceFactory>(ContextTypes.OrgServiceFactory, new ContextOrgServiceFactory());
            ContextContainer.Current.Register<Guid>(ContextTypes.CurrentOrganization, new ContextCurrentOrganization());
            ContextContainer.Current.Register<ICurrentUserInfoContext>(ContextTypes.CurrentUser, new ContextCurrentUser());
            ContextContainer.Current.Register<Dictionary<string,object>>(ContextTypes.Dictionary, new ContextDictionary());
            ContextContainer.Current.Register<ITracingService>(ContextTypes.TracingService, new ContextTracingService());




            PAEntityExtension.PADomainEntityConvertServiceFactories[typeof(PAUser)] = PADomainEntityConvertServiceForPAUserFactory.GetFactory();
            PAEntityExtension.PADomainEntityConvertServiceFactories[typeof(PAUserSetting)] = PADomainEntityConvertServiceForPAUserSettingFactory.GetFactory();
            PAEntityExtension.PADomainEntityConvertServiceFactories[typeof(PAEntity)] = PADomainEntityConvertServiceForPAEntityFactory.GetFactory();

        }
    }
}
