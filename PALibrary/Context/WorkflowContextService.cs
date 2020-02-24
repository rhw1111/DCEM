using System;
using System.Activities;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using PALibrary.Entities;
using PALibrary.Serializer;

namespace PALibrary.Context
{
    public class WorkflowContextService : IWorkflowContextService
    {
        private IConfigurationService _configurationService;
        private IPAUserRepository _paUserRepository;

        public WorkflowContextService(IConfigurationService configurationService, IPAUserRepository paUserRepository)
        {
            _configurationService = configurationService;
            _paUserRepository = paUserRepository;
        }


        public IWorkflowContextController Init(CodeActivityContext codeActivityContext)
        {
            bool dictionaryCreate = false;
            bool orgServiceCreate = false;
            bool tracingServiceCreate = false;
            bool currentUserCreate = false;
            bool currentOrganizationCreate = false;
            bool orgServiceFactoryCreate = false;

            IWorkflowContext wfContext = codeActivityContext.GetExtension<IWorkflowContext>();
            IOrganizationServiceFactory sFactory = codeActivityContext.GetExtension<IOrganizationServiceFactory>();
            IWorkflowContext workContext;
            workContext = wfContext;

            while (workContext.ParentContext != null)
            {
                workContext = workContext.ParentContext;
            }


            //获取当前用户
            var currentUser = ContextContainer.GetValue<ICurrentUserInfoContext>(ContextTypes.CurrentUser);
            //获取当前组织编号
            var currentOrganization = ContextContainer.GetValue<Guid>(ContextTypes.CurrentOrganization);
            //获取dictorany
            var dict = ContextContainer.GetValue<Dictionary<string, object>>(ContextTypes.Dictionary);
            //获取orgService
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);
            var isAutoOrgService = ContextContainer.IsAuto<IOrganizationService>(ContextTypes.OrgService.ToString());
            //获取orgServiceFactory
            var orgServiceFactory = ContextContainer.GetValue<IOrganizationServiceFactory>(ContextTypes.OrgServiceFactory);
            //获取tracingService
            var tracingService = ContextContainer.GetValue<ITracingService>(ContextTypes.TracingService);




            //新建所有上下文
            if (currentUser == null || ContextContainer.IsAuto<ICurrentUserInfoContext>(ContextTypes.CurrentUser))
            {
                currentUserCreate = true;
                ContextContainer.SetValue<ICurrentUserInfoContext>(ContextTypes.CurrentUser, CurrentUserInfoContextFactory.Get().Create(workContext.InitiatingUserId));
            }

           
            if (currentOrganization == Guid.Empty || ContextContainer.IsAuto<Guid>(ContextTypes.CurrentOrganization))
            {
                currentOrganizationCreate = true;
                ContextContainer.SetValue<Guid>(ContextTypes.CurrentOrganization, workContext.OrganizationId);
            }

            if (tracingService == null || ContextContainer.IsAuto<ITracingService>(ContextTypes.TracingService))
            {
                tracingServiceCreate = true;
                ContextContainer.SetValue<ITracingService>(ContextTypes.TracingService, codeActivityContext.GetExtension<ITracingService>());
            }


            if (dict == null || ContextContainer.IsAuto<Dictionary<string, object>>(ContextTypes.Dictionary))
            {
                dictionaryCreate = true;
                if (workContext.SharedVariables.Contains("dictionary"))
                {
                    var dictionary = BinarySerializerHelper.Deserialize<Dictionary<string, object>>(workContext.SharedVariables["dictionary"].ToString());

                    ContextContainer.SetValue<Dictionary<string, object>>(ContextTypes.Dictionary, dictionary);

                    dict = dictionary;
                }
                else
                {
                    dict = new Dictionary<string, object>();
                    ContextContainer.SetValue<Dictionary<string, object>>(ContextTypes.Dictionary, dict);
                }



            }


            lock (dict)
            {
                dict[ContextDictionaryKeys.OrgName] = workContext.OrganizationName;
            }

            if (orgService == null || isAutoOrgService)
            {
                orgServiceCreate = true;
                //获取临时OrgService
                var tempOrgService = sFactory.CreateOrganizationService(workContext.InitiatingUserId);
                var tempOrgServiceDiposable = tempOrgService as IDisposable;

                if (tempOrgServiceDiposable != null)
                {
                    using (tempOrgServiceDiposable)
                    {
                        ContextContainer.SetValue<IOrganizationService>(ContextTypes.OrgService, tempOrgService);
                        EntityReference administratorId = _configurationService.GetAdministratorID();
                        orgService = sFactory.CreateOrganizationService(administratorId.Id);

                        ContextContainer.SetValue<IOrganizationService>(ContextTypes.OrgService, orgService);
                    }
                }
                else
                {
                    ContextContainer.SetValue<IOrganizationService>(ContextTypes.OrgService, tempOrgService);
                    EntityReference administratorId = _configurationService.GetAdministratorID();
                    orgService = sFactory.CreateOrganizationService(administratorId.Id);

                    ContextContainer.SetValue<IOrganizationService>(ContextTypes.OrgService, orgService);
                }
            }



            if (orgServiceFactory == null || ContextContainer.IsAuto<IOrganizationServiceFactory>(ContextTypes.OrgServiceFactory))
            {
                orgServiceFactoryCreate = true;
                ContextContainer.SetValue<IOrganizationServiceFactory>(ContextTypes.OrgServiceFactory, sFactory);
            }


            return new WorkflowContextController(workContext, dictionaryCreate, orgServiceCreate, tracingServiceCreate, currentUserCreate, currentOrganizationCreate, orgServiceFactoryCreate);
        }
    }


    public class WorkflowContextController : IWorkflowContextController
    {
        private IWorkflowContext _context;

        private bool _dictionaryCreate = false;
        private bool _orgServiceCreate = false;
        private bool _tracingServiceCreate = false;
        private bool _currentUserCreate = false;
        private bool _currentOrganizationCreate = false;
        private bool _orgServiceFactoryCreate = false;

        public WorkflowContextController(IWorkflowContext context, bool dictionaryCreate, bool orgServiceCreate, bool tracingServiceCreate,
            bool currentUserCreate, bool currentOrganizationCreate, bool orgServiceFactoryCreate
            )
        {
            _context = context;
            _dictionaryCreate = dictionaryCreate;
            _orgServiceCreate = orgServiceCreate;
            _tracingServiceCreate = tracingServiceCreate;
            _currentUserCreate = currentUserCreate;
            _currentOrganizationCreate = currentOrganizationCreate;
            _orgServiceFactoryCreate = orgServiceFactoryCreate;
        }


        public void Dispose()
        {
            if (_orgServiceCreate)
            {
                var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);
                var orgServiceDiposable = orgService as IDisposable;

                if (orgServiceDiposable != null)
                {
                    using (orgServiceDiposable)
                    {
                    }
                }

                ContextContainer.SetValue<IOrganizationService>(ContextTypes.OrgService, null);
            }

            if (_dictionaryCreate)
            {
                var dict = ContextContainer.GetValue<Dictionary<string, object>>(ContextTypes.Dictionary);
                var strDict = BinarySerializerHelper.Serializer<Dictionary<string, object>>(dict);
                _context.SharedVariables["dictionary"] = strDict;

                ContextContainer.SetValue<Dictionary<string, object>>(ContextTypes.Dictionary, null);
            }

            if (_currentUserCreate)
            {
                ContextContainer.SetValue<ICurrentUserInfoContext>(ContextTypes.CurrentUser, null);
            }

            if (_currentOrganizationCreate)
            {
                ContextContainer.SetValue<Guid>(ContextTypes.CurrentOrganization, Guid.Empty);
            }

            if (_orgServiceFactoryCreate)
            {
                ContextContainer.SetValue<IOrganizationServiceFactory>(ContextTypes.OrgServiceFactory, null);
            }

            if (_tracingServiceCreate)
            {
                ContextContainer.SetValue<IConfigurationService>(ContextTypes.TracingService, null);
            }
        }
    }


    public class WorkflowContextServiceFactory : SingletonFactorySelf<IWorkflowContextService, WorkflowContextServiceFactory>
    {
        protected override IWorkflowContextService RealCreate()
        {
            var paUserRepository = PAUserRepositoryFactory.Get();
            var configurationService = ConfigurationServiceFactory.Get();
            WorkflowContextService workflowContextService = new WorkflowContextService(configurationService, paUserRepository);

            return workflowContextService;
        }
    }


}
