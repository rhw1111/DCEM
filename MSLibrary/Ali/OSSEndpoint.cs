using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Aliyun.OSS;
using Aliyun.OSS.Common;
using MSLibrary.Storge;

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
        Task Copy(OSSEndpoint endpoint, string sourceFilePath, string targetFilePathy, ObjectMetadata newMetadata = null);
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

        public async Task CompleteMultipart(OSSEndpoint endpoint, string filePath, string uploadID, List<(int, string)> parts)
        {
            var client= GetOssClient(endpoint);
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
            throw new NotImplementedException();
        }

        public Task Copy(OSSEndpoint endpoint, string sourceFilePath, string targetFilePathy, ObjectMetadata newMetadata = null)
        {
            throw new NotImplementedException();
        }

        public Task<string> CreateFileName(OSSEndpoint endpoint)
        {
            throw new NotImplementedException();
        }

        public Task<Dictionary<string, string>> CreateMultipartHeaderCallbackParameters(OSSEndpoint endpoint, string filePath, string credentialInfo, Dictionary<string, string> extensionInfos)
        {
            throw new NotImplementedException();
        }

        public Task<MultipartStorgeInfo> CreateMultipartinfo(OSSEndpoint endpoint, string filePath, string displayName, string credentialInfo, long size)
        {
            throw new NotImplementedException();
        }

        public Task<Dictionary<string, string>> CreatePostCallbackParameters(OSSEndpoint endpoint, string filePath, Dictionary<string, string> extensionInfos)
        {
            throw new NotImplementedException();
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


        private OssClient GetOssClient(OSSEndpoint endpoint)
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
    }
}
