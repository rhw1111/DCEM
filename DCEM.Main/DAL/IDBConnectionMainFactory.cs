using System;
using System.Collections.Generic;
using System.Text;
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

namespace DCEM.Main.DAL
{
    public interface IDBConnectionMainFactory: ISystemConfigurationConnectionFactory,ICacheConnectionFactory,IContextConnectionFactory,IEntityConnectionFactory,IEntityMetadataConnectionFactory,
        IFileManagementConnectionFactory,ICommonLogConnectionFactory,IMessageQueueConnectionFactory,IOauthConnectionFactory,IScheduleConnectionFactory,ISerialNumberConnectionFactory,
        ISMSConnectionFactory,ISocketConnectionFactory,ISystemTokenConnectionFactory,IThreadConnectionFactory,IWorkflowConnectionFactory,IXrmConnectionFactory

    {
    }
}
