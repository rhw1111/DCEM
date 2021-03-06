﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using System.Transactions;
using Microsoft.Azure.ServiceBus;
using MSLibrary.DI;
using MSLibrary.Logger;
using MSLibrary.Serializer;
using MSLibrary.LanguageTranslate;
using MSLibrary.CommonQueue.MessageConvertServices.AzureServiceBus.From;
using MSLibrary.CommonQueue.MessageConvertServices.AzureServiceBus.To;
using Microsoft.Extensions.Primitives;

namespace MSLibrary.CommonQueue.QueueRealExecuteServices
{
    /// <summary>
    /// 针对Azure服务总线的队列处理服务
    /// </summary>
    [Injection(InterfaceType = typeof(QueueRealExecuteServiceForAzureServiceBus), Scope = InjectionScope.Singleton)]
    public class QueueRealExecuteServiceForAzureServiceBus : IQueueRealExecuteService
    {
        private static Dictionary<string, Dictionary<int, TopicClient>> _productClients = new Dictionary<string, Dictionary<int, TopicClient>>();

        private static Dictionary<string, IFactory<IAzureServiceBusMessageConvertFrom>> _convertFromServiceFactories = new Dictionary<string, IFactory<IAzureServiceBusMessageConvertFrom>>();
        private static Dictionary<string, IFactory<IAzureServiceBusMessageConvertTo>> _convertToServiceFactories = new Dictionary<string, IFactory<IAzureServiceBusMessageConvertTo>>();

        public static Dictionary<string, IFactory<IAzureServiceBusMessageConvertFrom>> ConvertFromServiceFactories
        {
            get
            {
                return _convertFromServiceFactories;
            }
        }

        public static Dictionary<string, IFactory<IAzureServiceBusMessageConvertTo>> ConvertToServiceFactories
        {
            get
            {
                return _convertToServiceFactories;
            }
        }

        public static string ConsumeErrorLoggerCategoryName { get; set; }

        public async Task<ICommonQueueEndpointConsumeController> Consume(CommonQueueConsumeEndpoint endpoint, string configuration, Func<CommonMessage, Task> messageHandle)
        {
            var consumeConfiguration = JsonSerializerHelper.Deserialize<ConsumeQueueRealExecuteServiceForAzureServiceBusConfiguration>(configuration);

            List<SubscriptionClient> clients = new List<SubscriptionClient>();

            Dictionary<string, DateTime> loggerDatetimes = new Dictionary<string, DateTime>();

            foreach (var item in consumeConfiguration.Items)
            {
                var newClient = new SubscriptionClient(consumeConfiguration.ConnectionString, item.Topic, consumeConfiguration.Subscription);
                var tempItem = item;
                loggerDatetimes[item.Topic] = DateTime.UtcNow;
                var messageHandlerOptions = new MessageHandlerOptions(async (args) =>
                {
                    if ((DateTime.UtcNow - loggerDatetimes[tempItem.Topic]).TotalSeconds > 300)
                    {
                        loggerDatetimes[tempItem.Topic] = DateTime.UtcNow;
                        LoggerHelper.LogError(ConsumeErrorLoggerCategoryName, $"Message:{args.Exception.Message},stack:{args.Exception.StackTrace},Endpoint: {args.ExceptionReceivedContext.Endpoint},Entity Path: {args.ExceptionReceivedContext.EntityPath},Executing Action: {args.ExceptionReceivedContext.Action}");
                    }

                })
                {
                    MaxConcurrentCalls = 1,
                    MaxAutoRenewDuration = new TimeSpan(2, 0, 0),
                    AutoComplete = false
                };

                newClient.RegisterMessageHandler(async (azureMessage, cancellation) =>
                {
                    bool isError = false;
                    var fromService = getAzureServiceBusMessageConvertFromService(tempItem.ConvertFromServiceName);
                    var message = await fromService.From(azureMessage);
                    if (message != null)
                    {
                        int retry = 0;
                        while(true)
                        {
                            try
                            {
                                await messageHandle(message);
                            }
                            catch (Exception ex)
                            {
                                if (ex is UtilityException || retry >= consumeConfiguration.MaxRetry)
                                {
                                    StringBuilder strError = new StringBuilder($"message:{ex.Message},stack:{ex.StackTrace}");
                                    var innerEx = ex.InnerException;

                                    while (innerEx!=null && innerEx.InnerException!=null)
                                    {
                                        innerEx = innerEx.InnerException;
                                    }
                                    if (innerEx != null)
                                    {
                                        strError.Append($",innermessage:{innerEx.Message},innerstack:{innerEx.StackTrace}");
                                    }


                                    if (strError.Length > 5000)
                                    {
                                        strError = strError.Remove(4999, strError.Length - 5000);
                                    }

                                    var newAzureMessage = new Message(azureMessage.Body);
                                    newAzureMessage.UserProperties["Exception"] = strError.ToString();
                                    newAzureMessage.UserProperties["ExceptionRetry"] = true;
                                    newAzureMessage.ScheduledEnqueueTimeUtc = DateTime.UtcNow.AddSeconds(60);

                                    isError = true;

                                    var topicClient = new TopicClient(newClient.ServiceBusConnection, tempItem.Topic, null);


                                    using (var ts = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                                    {
                                        await newClient.CompleteAsync(azureMessage.SystemProperties.LockToken);
                                        await topicClient.SendAsync(newAzureMessage).ConfigureAwait(false);

                                        ts.Complete();
                                    }

                                    break;
                                }
                                else
                                {
                                    retry++;
                                    await Task.Delay(100);
                                }


                            }
                        }


                    }

                    if (!isError)
                    {
                        await newClient.CompleteAsync(azureMessage.SystemProperties.LockToken);
                    }

                },messageHandlerOptions);
                clients.Add(newClient);
            }

            CommonQueueEndpointConsumeControllerForServiceBus controller = new CommonQueueEndpointConsumeControllerForServiceBus(clients);

            return controller;
        }

        public async Task Product(CommonQueueProductEndpoint endpint, string configuration, CommonMessage message)
        {
            var productConfiguration = JsonSerializerHelper.Deserialize<ProductQueueRealExecuteServiceForAzureServiceBusConfiguration>(configuration);
            if (!_productClients.TryGetValue(endpint.Name,out Dictionary<int, TopicClient> clients))
            {
                lock(_productClients)
                {
                    if (!_productClients.TryGetValue(endpint.Name, out clients))
                    {
                        clients = new Dictionary<int, TopicClient>();
                        foreach (var item in productConfiguration.Items)
                        {
                            foreach (var topicItem in item.Value)
                            {
                                clients.Add(topicItem.Code, new TopicClient(item.Key, topicItem.TopicItem));
                            }
                        }
                        _productClients[endpint.Name] = clients;
                    }
                }
            }

            var mod = message.Key.ToInt() % clients.Count;
            var client= clients[mod];
           

            var toService=getAzureServiceBusMessageConvertToService(productConfiguration.ConvertToServiceName);

            var azureMessage=await toService.To(message);
            await client.SendAsync(azureMessage);
        }


        private IAzureServiceBusMessageConvertTo getAzureServiceBusMessageConvertToService(string name)
        {
            if (!_convertToServiceFactories.TryGetValue(name,out IFactory<IAzureServiceBusMessageConvertTo> serviceFactory))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundAzureServiceBusMessageConvertToServiceByName,
                    DefaultFormatting = "找不到名称为{0}的Azure服务总线From转换服务，发生位置为{1}",
                    ReplaceParameters = new List<object>() { name,$"{this.GetType().FullName}.ConvertToServiceFactories" }
                };

                throw new UtilityException((int)Errors.NotFoundAzureServiceBusMessageConvertToServiceByName, fragment);
            }
            return serviceFactory.Create();
        }
               
        private IAzureServiceBusMessageConvertFrom getAzureServiceBusMessageConvertFromService(string name)
        {
                                                                             
            if (!_convertFromServiceFactories.TryGetValue(name, out IFactory<IAzureServiceBusMessageConvertFrom> serviceFactory))
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundAzureServiceBusMessageConvertFromServiceByName,
                    DefaultFormatting = "找不到名称为{0}的Azure服务总线From转换服务，发生位置为{1}",
                    ReplaceParameters = new List<object>() { name, $"{this.GetType().FullName}.ConvertFromServiceFactories" }
                };

                throw new UtilityException((int)Errors.NotFoundAzureServiceBusMessageConvertFromServiceByName, fragment);
            }
            return serviceFactory.Create();
        }

    }

    [DataContract]
    public class ConsumeQueueRealExecuteServiceForAzureServiceBusConfiguration
    {
        /// <summary>
        /// 连接字符串
        /// </summary>
        [DataMember]
        public string ConnectionString { get; set; }
        /// <summary>
        /// 订阅
        /// </summary>
        [DataMember]
        public string Subscription { get; set; }
        /// <summary>
        /// 当发生未知异常时的最大重试次数
        /// </summary>
        public int MaxRetry { get; set; } = 1;
        /// <summary>
        /// 配置项列表
        /// </summary>
        [DataMember]
        public List<ConsumeQueueRealExecuteServiceForAzureServiceBusConfigurationItem> Items { get; set; }
    }

    [DataContract]
    public class ConsumeQueueRealExecuteServiceForAzureServiceBusConfigurationItem
    {
        /// <summary>
        /// 从原始消息转换为通用消息的服务名称，对应QueueRealExecuteServiceForAzureServiceBus.ConvertFromServiceFactories的键
        /// </summary>
        [DataMember]
        public string ConvertFromServiceName { get; set; }
        /// <summary>
        /// 队列主题
        /// </summary>
        [DataMember]
        public string Topic { get; set; }
    }


    [DataContract]
    public class ProductQueueRealExecuteServiceForAzureServiceBusConfiguration 
    {
        [DataMember]
        public string ConvertToServiceName { get; set; }
        [DataMember]
        public Dictionary<string, List<ProductQueueRealExecuteServiceForAzureServiceBusConfigurationItem>> Items { get; set; } 
    }


    public class ProductQueueRealExecuteServiceForAzureServiceBusConfigurationItem
    {
        [DataMember]
        public int Code { get; set; }
        [DataMember]
        public string TopicItem { get; set; }
    }


    public class CommonQueueEndpointConsumeControllerForServiceBus : ICommonQueueEndpointConsumeController
    {
        private List<SubscriptionClient> _clients;

        public CommonQueueEndpointConsumeControllerForServiceBus(List<SubscriptionClient> clients)
        {
            _clients = clients;
        }

        public async Task Stop()
        {
            List<Task> tasks = new List<Task>();

            foreach(var item in _clients)
            {
                tasks.Add(item.CloseAsync());
            }

            foreach(var item in tasks)
            {
                await item;
            }
        }
    }
}
