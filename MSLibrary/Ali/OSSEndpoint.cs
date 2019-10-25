using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.WebUtilities;
using Newtonsoft.Json.Linq;
using Aliyun.OSS;
using Aliyun.OSS.Common;
using Aliyun.OSS.Util;
using Aliyun.Acs.Sts;
using Aliyun.Acs.Core;
using Aliyun.Acs.Core.Http;
using Aliyun.Acs.Core.Profile;
using Aliyun.Acs.Core.Exceptions;
using Aliyun.Acs.Sts.Model.V20150401;
using MSLibrary.Storge;
using MSLibrary.LanguageTranslate;
using MSLibrary.Serializer;
using MSLibrary.Security;
using log4net.Appender;

namespace MSLibrary.Ali
{
    /// <summary>
    /// 阿里oss服务终结点
    /// </summary>
    public class OSSEndpoint : EntityBase<IOSSEndpointIMP>
    {

        private static IFactory<IOSSEndpointIMP> _ossEndpointIMPFactory;
        public static IFactory<IOSSEndpointIMP> OssEndpointIMPFactory
        {
            set
            {
                _ossEndpointIMPFactory = value;
            }
        }
        public override IFactory<IOSSEndpointIMP> GetIMPFactory()
        {
            return _ossEndpointIMPFactory;
        }

        /// <summary>
        /// Id
        /// </summary>
        public Guid ID
        {
            get
            {

                return GetAttribute<Guid>("ID");
            }
            set
            {
                SetAttribute<Guid>("ID", value);
            }
        }

        /// <summary>
        /// 终结点名称
        /// </summary>
        public string Name
        {
            get
            {
                return GetAttribute<string>("Name");
            }
            set
            {
                SetAttribute<string>("Name", value);
            }
        }

        /// <summary>
        /// 所处区域名称
        /// </summary>
        public string Region
        {
            get
            {
                return GetAttribute<string>("Region");
            }
            set
            {
                SetAttribute<string>("Region", value);
            }
        }
        

        /// <summary>
        /// 终结点类型
        /// 0:使用区域地址
        /// 1:使用CNAME
        /// </summary>
        public int Type
        {
            get
            {
                return GetAttribute<int>("Type");
            }
            set
            {
                SetAttribute<int>("Type", value);
            }
        }

        /// <summary>
        /// 区域地址
        /// 当Type为0时使用
        /// </summary>
        public string Address
        {
            get
            {
                return GetAttribute<string>("Address");
            }
            set
            {
                SetAttribute<string>("Address", value);
            }
        }


        /// <summary>
        /// 是否是公共读
        /// </summary>
        public bool IsPublic
        {
            get
            {
                return GetAttribute<bool>("IsPublic");
            }
            set
            {
                SetAttribute<bool>("IsPublic", value);
            }
        }


        /// <summary>
        /// CName
        /// 当Type为1时使用
        /// </summary>
        public string CName
        {
            get
            {
                return GetAttribute<string>("CName");
            }
            set
            {
                SetAttribute<string>("CName", value);
            }
        }

        /// <summary>
        /// AccessKeyId
        /// </summary>
        public string AccessKeyId
        {
            get
            {
                return GetAttribute<string>("AccessKeyId");
            }
            set
            {
                SetAttribute<string>("AccessKeyId", value);
            }
        }
        /// <summary>
        /// AccessKeySecret
        /// </summary>
        public string AccessKeySecret
        {
            get
            {
                return GetAttribute<string>("AccessKeySecret");
            }
            set
            {
                SetAttribute<string>("AccessKeySecret", value);
            }
        }


        /// <summary>
        /// STS授权时用到的角色ID
        /// </summary>
        public string STSRole
        {
            get
            {
                return GetAttribute<string>("STSRole");
            }
            set
            {
                SetAttribute<string>("STSRole", value);
            }
        }


        /// <summary>
        /// 要操作的存储空间名称
        /// </summary>
        public string Bucket
        {
            get
            {
                return GetAttribute<string>("Bucket");
            }
            set
            {
                SetAttribute<string>("Bucket", value);
            }
        }
        /// <summary>
        /// 临时文件夹目录
        /// </summary>
        public string TempFolder
        {
            get
            {
                return GetAttribute<string>("TempFolder");
            }
            set
            {
                SetAttribute<string>("TempFolder", value);
            }
        }

        /// <summary>
        /// 永久文件夹目录
        /// </summary>
        public string PermanentFolder
        {
            get
            {
                return GetAttribute<string>("PermanentFolder");
            }
            set
            {
                SetAttribute<string>("PermanentFolder", value);
            }
        }
        
        /// <summary>
        /// 分片上传的起始大小
        /// 只有大于等于这个大小的文件流，才会启用分片上传
        /// </summary>
        public long MultipartStartSize
        {
            get
            {
                return GetAttribute<long>("MultipartMinSize");
            }
            set
            {
                SetAttribute<long>("MultipartMinSize", value);
            }
        }

        /// <summary>
        /// 分片上传的每片大小
        /// </summary>
        public long MultipartPerSize
        {
            get
            {
                return GetAttribute<long>("MultipartPerSize");
            }
            set
            {
                SetAttribute<long>("MultipartPerSize", value);
            }
        }


        /// <summary>
        /// 分片上传的片数
        /// </summary>
        public int MultipartNumber
        {
            get
            {
                return GetAttribute<int>("MultipartNumber");
            }
            set
            {
                SetAttribute<int>("MultipartNumber", value);
            }
        }

        /// <summary>
        /// 启用分片读取的起始大小
        /// </summary>
        public long ReadStartSize
        {
            get
            {
                return GetAttribute<long>("ReadStartSize");
            }
            set
            {
                SetAttribute<long>("ReadStartSize", value);
            }
        }

        /// <summary>
        /// 分片读取时，每次读取的长度
        /// </summary>
        public long ReadPerSize
        {
            get
            {
                return GetAttribute<long>("ReadPerSize");
            }
            set
            {
                SetAttribute<long>("ReadPerSize", value);
            }
        }

        /// <summary>
        /// 分片读取时，分片数量
        /// </summary>
        public long ReadNumber
        {
            get
            {
                return GetAttribute<long>("ReadNumber");
            }
            set
            {
                SetAttribute<long>("ReadNumber", value);
            }
        }

        /// <summary>
        /// 回调地址
        /// </summary>
        public string CallbackUrl
        {
            get
            {
                return GetAttribute<string>("CallbackUrl");
            }
            set
            {
                SetAttribute<string>("CallbackUrl", value);
            }
        }

        /// <summary>
        /// CDN域【读取的时候需要替换的域名】
        /// </summary>
        public string ReadDomain
        {
            get
            {
                return GetAttribute<string>("ReadDomain");
            }
            set
            {
                SetAttribute<string>("ReadDomain", value);
            }
        }


        /// <summary>
        /// 创建时间
        /// </summary>
        public DateTime CreateTime
        {
            get
            {
                return GetAttribute<DateTime>("CreateTime");
            }
            set
            {
                SetAttribute<DateTime>("CreateTime", value);
            }
        }

        /// <summary>
        /// 修改时间
        /// </summary>
        public DateTime ModifyTime
        {
            get
            {
                return GetAttribute<DateTime>("ModifyTime");
            }
            set
            {
                SetAttribute<DateTime>("ModifyTime", value);
            }
        }


    }

    public interface IOSSEndpointIMP
    {
        /// <summary>
        /// 创建文件名称
        /// </summary>
        /// <param name="endpoint"></param>
        /// <returns></returns>
        Task<string> CreateFileName(OSSEndpoint endpoint);
        /// <summary>
        /// 写入文件
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="filePath"></param>
        /// <param name="credentialInfo"></param>
        /// <param name="stream"></param>
        /// <returns></returns>
        Task Write(OSSEndpoint endpoint, string filePath, string credentialInfo, Stream stream);
        /// <summary>
        /// 写入文件（带文件元数据）
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="filePath"></param>
        /// <param name="credentialInfo"></param>
        /// <param name="stream"></param>
        /// <param name="metadata"></param>
        /// <returns></returns>
        Task Write(OSSEndpoint endpoint, string filePath, string credentialInfo, Stream stream, ObjectMetadata metadata);
        /// <summary>
        /// 读取指定位置范围的文件
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="filePath"></param>
        /// <param name="start"></param>
        /// <param name="end"></param>
        /// <returns></returns>
        Task<Stream> Read(OSSEndpoint endpoint, string filePath, long start, long? end);
        /// <summary>
        /// 分片读取文件（如果不符合分片条件，则完整读取一次）
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="action"></param>
        /// <returns></returns>
        Task Read(OSSEndpoint endpoint, Func<Stream, Task> action);
        /// <summary>
        /// 删除文件
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="filePath"></param>
        /// <returns></returns>
        Task Delete(OSSEndpoint endpoint, string filePath);
        /// <summary>
        /// 复制文件
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="sourceKey"></param>
        /// <param name="targetKey"></param>
        /// <param name="newMetadata"></param>
        /// <returns></returns>
        Task Copy(OSSEndpoint endpoint, string sourceFilePath, string targetFilePath, ObjectMetadata newMetadata = null);
        /// <summary>
        /// 获取文件元数据
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="key"></param>
        /// <returns></returns>
        Task<ObjectMetadata> GetMetadata(OSSEndpoint endpoint, string filePath);
        /// <summary>
        /// 修改文件元数据
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="key"></param>
        /// <param name="metadata"></param>
        /// <returns></returns>
        Task ModifyMetadata(OSSEndpoint endpoint, string filePath, ObjectMetadata metadata);

        /// <summary>
        /// 创建授权Uri
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="filePath"></param>
        /// <param name="method"></param>
        /// <returns></returns>
        Task<string> CreatePresignedUri(OSSEndpoint endpoint, string filePath, SignHttpMethod method);
        /// <summary>
        /// 创建授权uri（指定过期时间）
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="filePath"></param>
        /// <param name="method"></param>
        /// <param name="minutes"></param>
        /// <returns></returns>
        Task<string> CreatePresignedUri(OSSEndpoint endpoint, string filePath, SignHttpMethod method, long minutes);
        /// <summary>
        /// 创建回调参数
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="extensionInfo"></param>
        /// <returns></returns>
        Task<Dictionary<string,string>> CreatePostCallbackParameters(OSSEndpoint endpoint, string filePath, Dictionary<string, string> extensionInfos);
        /// <summary>
        /// 创建回调策略
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="extensionInfo"></param>
        /// <returns></returns>
        Task<string> CreatePostCallbackPolicy(OSSEndpoint endpoint, string filePath, Dictionary<string, string> extensionInfos);
        /// <summary>
        /// 创建回调策略签名
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="policy"></param>
        /// <returns></returns>
        Task<string> CreatePostCallbackPolicySignature(OSSEndpoint endpoint, string policy);
        /// <summary>
        /// 创建分片上传header信息列表
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="filePath"></param>
        /// <returns></returns>
        Task<Dictionary<string,string>> CreateMultipartHeaderCallbackParameters(OSSEndpoint endpoint, string filePath,string credentialInfo,Dictionary<string,string> extensionInfos);
        /// <summary>
        /// 判断是否需要分片上传
        /// </summary>
        /// <param name="endpoint"></param>
        /// <param name="size">文件大小</param>
        /// <returns></returns>
        Task<bool> NeedMultipart(OSSEndpoint endpoint, long size);

        Task<MultipartStorgeInfo> CreateMultipartinfo(OSSEndpoint endpoint, string filePath,string displayName, string credentialInfo, long size);

        Task<MultipartStorgeInfo> GetMultipartinfo(OSSEndpoint endpoint, Guid infoID);

        Task<QueryResult<MultipartStorgeInfo>> GetMultipartinfo(OSSEndpoint endpoint, int page,int size);

        Task CompleteMultipartInfoDetail(OSSEndpoint endpoint, Guid infoID,Guid detailID,string etag);

        Task<string> UploadMultipart(OSSEndpoint endpoint, string filePath, string uploadID,int number,byte[] bytes);

        Task CompleteMultipart(OSSEndpoint endpoint, string filePath, string uploadID,List<(int,string)> parts);
    }

    public class OSSEndpointIMP : IOSSEndpointIMP
    {
        private IMultipartStorgeInfoRepository _multipartStorgeInfoRepository;
        private ISecurityService _securityService;

        public OSSEndpointIMP(IMultipartStorgeInfoRepository multipartStorgeInfoRepository, ISecurityService securityService)
        {
            _multipartStorgeInfoRepository = multipartStorgeInfoRepository;
            _securityService = securityService;
        }
        public async Task CompleteMultipart(OSSEndpoint endpoint, string filePath, string uploadID, List<(int, string)> parts)
        {
            var client= getOssClient(endpoint);
            CompleteMultipartUploadRequest request = new CompleteMultipartUploadRequest(endpoint.Bucket, filePath, uploadID);
            foreach(var item in parts)
            {
                request.PartETags.Add(new PartETag(item.Item1, item.Item2));
            }

            client.CompleteMultipartUpload(request);
            await Task.FromResult(0);
        }

        public async Task CompleteMultipartInfoDetail(OSSEndpoint endpoint, Guid infoID, Guid detailID, string etag)
        {
            var strSourceInfo = generateSourceInfo(endpoint);
            var storgeInfo=await _multipartStorgeInfoRepository.QueryBySourceID(strSourceInfo, infoID);
            if (storgeInfo==null)
            {
                var fragment = new TextFragment()
                {
                    Code = TextCodes.NotFoundMultipartStorgeInfoBySourceInfoAndID,
                    DefaultFormatting = "找不到源信息为{0}，Id为{1}的分片存储信息",
                    ReplaceParameters = new List<object>() { strSourceInfo, infoID.ToString()}
                };

                throw new UtilityException((int)Errors.NotFoundMultipartStorgeInfoBySourceInfoAndID, fragment);
            }

            await storgeInfo.CompleteDetail(detailID, etag);
       
        }

        public async Task Copy(OSSEndpoint endpoint, string sourceFilePath, string targetFilePath, ObjectMetadata newMetadata = null)
        {
            var client = getOssClient(endpoint);
            var task = new TaskCompletionSource<int>();
            CopyObjectRequest request = new CopyObjectRequest(endpoint.Bucket, sourceFilePath, endpoint.Bucket, targetFilePath);
            if (newMetadata!=null)
            {
                request.NewObjectMetadata = newMetadata;
            }
            var asyncResult= client.BeginCopyObject(request, result =>
                 {
                     var response= client.EndCopyResult(result);
                     task.SetResult(0);
                 }, null);


            await task.Task;
        }

        public async Task<string> CreateFileName(OSSEndpoint endpoint)
        {
            return await Task.FromResult(Guid.NewGuid().ToString());
        }

        public async Task<Dictionary<string, string>> CreateMultipartHeaderCallbackParameters(OSSEndpoint endpoint, string filePath, string credentialInfo, Dictionary<string, string> extensionInfos)
        {
            Dictionary<string, string> result = new Dictionary<string, string>();

            //构建Authorization参数
            string strPolicy =$@"{{
                                ""Statement"": [
                                    {{
                                    ""Action"": [
                                        ""oss:PutObject""
                                       ],
                                    ""Effect"": ""Allow"",
                                    ""Resource"": [""acs:oss:{endpoint.Region}:*:{endpoint.Bucket}/{filePath}""]
                                    }}
                                    ],
                                ""Version"": ""1""
                                }}";
        
            (string stsAccessKeyId,string stsAccessKeySecret,string stsToken)=generateSTS(endpoint, endpoint.AccessKeyId, endpoint.AccessKeySecret, endpoint.STSRole, "MSLibrary", strPolicy, ProtocolType.HTTPS, 20 * 60);



            throw new NotImplementedException();
        }

        public Task<MultipartStorgeInfo> CreateMultipartinfo(OSSEndpoint endpoint, string filePath, string displayName, string credentialInfo, long size)
        {
            throw new NotImplementedException();
        }

        public async Task<Dictionary<string, string>> CreatePostCallbackParameters(OSSEndpoint endpoint, string filePath, Dictionary<string, string> extensionInfos)
        {
            Dictionary<string, string> result = new Dictionary<string, string>();

            //构建callback参数
            StringBuilder strExtension = new StringBuilder();
            foreach(var item in extensionInfos)
            {
                strExtension.Append($"&{item.Key}={item.Value.ToUrlEncode()}");
            }
            
            String strBody = $"bucket=${{bucket}}&object=${{object}}&etag=${{etag}}&size=${{size}}&mimeType=${{mimeType}}{strExtension.ToString()}";
            JObject jObj = new JObject();
            jObj.Add("callbackUrl", JToken.FromObject(endpoint.CallbackUrl));
            jObj.Add("callbackBody", JToken.FromObject(strBody));

            var strCallback = JsonSerializerHelper.Serializer(jObj);

            result.Add("callback", strCallback);

            //构建OSSAccessKeyId参数
            result.Add("OSSAccessKeyId", endpoint.AccessKeyId);

            //构建policy参数
            var strPolicy = await generatePostCallbackPolicypublic(endpoint, filePath, strCallback);
            result.Add("policy", strPolicy);

            //构建Signature参数
            var strSignPolicy=_securityService.SignByKey(strPolicy, endpoint.AccessKeySecret);
            result.Add("Signature", strSignPolicy);

            //构建key参数
            result.Add("key", filePath);

            return result;
        }

        public Task<string> CreatePostCallbackPolicy(OSSEndpoint endpoint, string filePath, Dictionary<string, string> extensionInfos)
        {
            throw new NotImplementedException();
        }

        public Task<string> CreatePostCallbackPolicySignature(OSSEndpoint endpoint, string policy)
        {
            throw new NotImplementedException();
        }

        public Task<string> CreatePresignedUri(OSSEndpoint endpoint, string filePath, SignHttpMethod method)
        {
            throw new NotImplementedException();
        }

        public Task<string> CreatePresignedUri(OSSEndpoint endpoint, string filePath, SignHttpMethod method, long minutes)
        {
            throw new NotImplementedException();
        }

        public Task Delete(OSSEndpoint endpoint, string filePath)
        {
            throw new NotImplementedException();
        }

        public Task<ObjectMetadata> GetMetadata(OSSEndpoint endpoint, string filePath)
        {
            throw new NotImplementedException();
        }

        public Task<MultipartStorgeInfo> GetMultipartinfo(OSSEndpoint endpoint, Guid infoID)
        {
            throw new NotImplementedException();
        }

        public Task<QueryResult<MultipartStorgeInfo>> GetMultipartinfo(OSSEndpoint endpoint, int page, int size)
        {
            throw new NotImplementedException();
        }

        public Task ModifyMetadata(OSSEndpoint endpoint, string filePath, ObjectMetadata metadata)
        {
            throw new NotImplementedException();
        }

        public Task<bool> NeedMultipart(OSSEndpoint endpoint, long size)
        {
            throw new NotImplementedException();
        }

        public Task<Stream> Read(OSSEndpoint endpoint, string filePath, long start, long? end)
        {
            throw new NotImplementedException();
        }

        public Task Read(OSSEndpoint endpoint, Func<Stream, Task> action)
        {
            throw new NotImplementedException();
        }

        public Task<string> UploadMultipart(OSSEndpoint endpoint, string filePath, string uploadID, int number, byte[] bytes)
        {
            throw new NotImplementedException();
        }

        public Task Write(OSSEndpoint endpoint, string filePath, string credentialInfo, Stream stream)
        {
            throw new NotImplementedException();
        }

        public Task Write(OSSEndpoint endpoint, string filePath, string credentialInfo, Stream stream, ObjectMetadata metadata)
        {
            throw new NotImplementedException();
        }


        private OssClient getOssClient(OSSEndpoint endpoint)
        {
            var conf = new ClientConfiguration();
            OssClient client;
            if (endpoint.Type == 0)
            {
                conf.IsCname = false;
                client = new OssClient(endpoint.Address, endpoint.AccessKeyId, endpoint.AccessKeySecret, conf);
            }
            else
            {

                conf.IsCname = true;
                client = new OssClient(endpoint.CName, endpoint.AccessKeyId, endpoint.AccessKeySecret, conf);
            }

            return client;
        }

        private string generateSourceInfo(OSSEndpoint endpoint)
        {
            return $"AliOSS-{endpoint.ID.ToString()}";
        }

        private (string,string,string) generateSTS(OSSEndpoint endpoint, String accessKeyId, String accessKeySecret, String roleArn,
            String roleSessionName, String policy, ProtocolType protocolType, long durationSeconds)
        {
            DefaultProfile.AddEndpoint("", "", "Sts", "sts.aliyuncs.com");
            // 创建一个 Aliyun Acs Client, 用于发起 OpenAPI 请求
            IClientProfile profile = DefaultProfile.GetProfile("", accessKeyId, accessKeySecret);
            DefaultAcsClient client = new DefaultAcsClient(profile);

            // 创建一个 AssumeRoleRequest 并设置请求参数
            AssumeRoleRequest request = new AssumeRoleRequest();
            //request.Version = STS_API_VERSION;
            request.Method = MethodType.POST;
            request.Protocol = protocolType;

            request.RoleArn = roleArn;
            request.RoleSessionName = roleSessionName;
            request.Policy = policy;
            request.DurationSeconds = durationSeconds;

            // 发起请求，并得到response
            AssumeRoleResponse response = client.GetAcsResponse(request);

            return (response.Credentials.AccessKeyId,response.Credentials.AccessKeySecret,response.Credentials.SecurityToken);


        }


        private async Task<string> generatePostCallbackPolicypublic (OSSEndpoint endpoint,string filePath, string callback)
        {
            var client = getOssClient(endpoint);
            PolicyConditions conds = new PolicyConditions();
            //bucket精确匹配终结点中的Bucket
            conds.AddConditionItem(MatchMode.Exact, "bucket", endpoint.Bucket);
            //文件名起始匹配终结点的临时文件夹
            conds.AddConditionItem(MatchMode.Exact, "key", filePath);
            //文件大小范围0~1G
            conds.AddConditionItem("content-length-range", 0, 1073741824);
            //callback精确匹配该终结点的callback参数
            conds.AddConditionItem(MatchMode.Exact, "callback", callback);

            //Content-Type起始匹配空，目的是为了保证存在该域
            conds.AddConditionItem(MatchMode.StartWith, "Content-Type", "");
            //Content-Disposition起始匹配空，目的是为了保证存在该域
            conds.AddConditionItem(MatchMode.StartWith, "Content-Disposition", "");

            var strPolicy = client.GeneratePostPolicy(DateTime.UtcNow.AddMinutes(20), conds);

            return strPolicy;
        }

        public async Task<string> generateAuthorization(OSSEndpoint endpoint,string accessKeyId,string accessKeySecret,string method,string strContentMD5,Dictionary<string,string> headers,string resource)
        {
            //拼装header
            StringBuilder strHeader = new StringBuilder();
            foreach(var item in headers)
            {
                strHeader.Append($"{item.Key}:{item.Value}\n");
            }

            var strSignature = _securityService.SignByKey($"{method}\n{DateTime.UtcNow.ToString("r")}\n{strHeader.ToString()}{resource}",endpoint.AccessKeySecret);

            return await Task.FromResult($"OSS {accessKeyId}:{strSignature}");
        }
    }
}
