using System;
using System.Collections.Generic;
using System.Text;
using MSLibrary.DAL;
using MSLibrary.DI;
using MSLibrary.Configuration.DAL;
using MSLibrary.Cache.DAL;
using MSLibrary.Context;
using MSLibrary.Context.DAL;
using MSLibrary.Entity.DAL;
using MSLibrary.EntityMetadata.DAL;
using MSLibrary.FileManagement.DAL;
using MSLibrary.Logger.DAL;
using MSLibrary.MessageQueue.DAL;
using MSLibrary.Oauth.DAL;
using MSLibrary.Schedule.DAL;
using MSLibrary.SerialNumber.DAL;
using MSLibrary.SMS.DAL;
using MSLibrary.SocketManagement.DAL;
using MSLibrary.SystemToken.DAL;
using MSLibrary.Thread.DAL;
using MSLibrary.Workflow.DAL;
using MSLibrary.Xrm.DAL;
using MSLibrary.Configuration;
using DCEM.Main.Configuration;

namespace DCEM.Main.DAL
{



    [Injection(InterfaceType = typeof(IDBConnectionMainFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(ISystemConfigurationConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(ICacheConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IContextConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IEntityConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IEntityMetadataConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IFileManagementConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(ICommonLogConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IMessageQueueConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IOauthConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IScheduleConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(ISerialNumberConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(ISMSConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(ISocketConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(ISystemTokenConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IThreadConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IWorkflowConnectionFactory), Scope = InjectionScope.Singleton)]
    [Injection(InterfaceType = typeof(IXrmConnectionFactory), Scope = InjectionScope.Singleton)]
    public class DBConnectionMainFactory : IDBConnectionMainFactory
    {
        public string CreateAllForApplicationLock(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForApplicationLock(string lockName)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForApplicationLock(MSLibrary.DAL.DBConnectionNames connNames, string lockName)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForCache()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForContext()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForEntity()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForEntityMetadata()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForLocalCommonLog()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForMessageQueue(int storeType, string serverName)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForMessageQueueMain()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForSchedule()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForSerialNumber()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForSerialNumberRecord(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForSMessageHistory(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForSMessageHistoryListenerDetail(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForSocket()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForSystemConfiguration()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForSystemToken()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForTcpLog(string listenerName)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForThirdPartySystemToken(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForUploadFile(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForUploadFileHandle()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForWorkflow(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateAllForWorkflow()
        {
            throw new NotImplementedException();
        }

        public string CreateAllForXrm()
        {
            throw new NotImplementedException();
        }

        public string CreateOauthDBALL()
        {
            throw new NotImplementedException();
        }

        public string CreateOauthDBRead()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForCache()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForContext()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForEntity()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForEntityMetadata()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForLocalCommonLog()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForMessageQueue(int storeType, string serverName)
        {
            throw new NotImplementedException();
        }

        public string CreateReadForMessageQueueMain()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForSchedule()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForSerialNumber()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForSerialNumberRecord(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateReadForSMessageHistory(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateReadForSMessageHistoryListenerDetail(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateReadForSocket()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForSystemConfiguration()
        {
            var coreConfiguration = ConfigurationContainer.Get<BaseConfiguration>(ConfigurationNames.Application);

            if (coreConfiguration.Connections != null)
            {
                return coreConfiguration.Connections[DBConnectionNames.MainDBRead];
            }
            else {
                return "";
            }
        }

        public string CreateReadForSystemToken()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForTcpLog(string listenerName)
        {
            throw new NotImplementedException();
        }

        public string CreateReadForThirdPartySystemToken(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateReadForUploadFile(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateReadForUploadFileHandle()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForWorkflow(MSLibrary.DAL.DBConnectionNames connectionNames)
        {
            throw new NotImplementedException();
        }

        public string CreateReadForWorkflow()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForXrm()
        {
            throw new NotImplementedException();
        }

        public string CreateSMSManagementAllForSMS()
        {
            throw new NotImplementedException();
        }

        public string CreateSMSManagementReadForSMS()
        {
            throw new NotImplementedException();
        }

        public string CreateSMSRecordAllForSMS()
        {
            throw new NotImplementedException();
        }

        public string CreateSMSRecordReadForSMS()
        {
            throw new NotImplementedException();
        }
    }
}
