using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Microsoft.Xrm.Sdk;
using Microsoft.Crm.Sdk.Messages;
using PALibrary.IOExtensions;

namespace PALibrary
{
    /// <summary>
    /// PAEntity的实体基类
    /// 所有基于PAEntity的实体都必须继承该类
    /// </summary>
    public abstract class PAEntityBase<T> : EntityBase<T>
    {
        private static IFactory<IPAEntityBaseIMP<T>> _baseIMPFactory = new PAEntityBaseIMPFactory<T>();

        public static IFactory<IPAEntityBaseIMP<T>> BaseIMPFactory
        {
            set
            {
                _baseIMPFactory = value;
            }
        }

        private IPAEntityBaseIMP<T> _baseIMP;


        public PAEntityBase():base()
        {
            _baseIMP = _baseIMPFactory.Create();
        }
        /// <summary>
        /// PAEntity对应的记录
        /// </summary>
        public Entity EntityRecord
        {
            get
            {
                return GetAttribute<Entity>("EntityRecord");
            }
            set
            {
                SetAttribute<Entity>("EntityRecord", value);
            }
        }

        /// <summary>
        /// 为文件类型属性上传文件
        /// </summary>
        /// <param name="fileAttributeName"></param>
        /// <param name="fileName"></param>
        /// <param name="fileStream"></param>
        public void UploadAttributeFile( string fileAttributeName, string fileName, string fileMimeType, Stream fileStream)
        {
            _baseIMP.UploadAttributeFile(this, fileAttributeName, fileName, fileMimeType, fileStream);
        }
        /// <summary>
        /// 下载文件类型属性的文件
        /// </summary>
        /// <param name="fileAttributeName"></param>
        /// <param name="action"></param>
        public void DownloadAttributeFile( string fileAttributeName, Action<string, Stream> action)
        {
            _baseIMP.DownloadAttributeFile(this, fileAttributeName, action);
        }
        /// <summary>
        /// 删除文件类型属性的文件
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="fileAttributeName"></param>
        public void DeleteAttributeFileData(string fileAttributeName)
        {
            _baseIMP.DeleteAttributeFileData(this, fileAttributeName);
        }


    }

    public interface IPAEntityBaseIMP<T>
    {
        /// <summary>
        /// 为文件类型属性上传文件
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="fileAttributeName"></param>
        /// <param name="fileName"></param>
        /// <param name="fileStream"></param>
        void UploadAttributeFile(PAEntityBase<T> entity, string fileAttributeName, string fileName, string fileMimeType, Stream fileStream);
        /// <summary>
        /// 下载文件类型属性的文件
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="fileAttributeName"></param>
        /// <param name="action"></param>
        void DownloadAttributeFile(PAEntityBase<T> entity, string fileAttributeName, Action<string, Stream> action);
        /// <summary>
        /// 删除文件类型属性的文件
        /// </summary>
        /// <param name="entity"></param>
        /// <param name="fileAttributeName"></param>
        void DeleteAttributeFileData(PAEntityBase<T> entity, string fileAttributeName);
    }

    public class PAEntityBaseIMP<T> : IPAEntityBaseIMP<T>
    {
        public void DeleteAttributeFileData(PAEntityBase<T> entity, string fileAttributeName)
        {

        }

        public void DownloadAttributeFile(PAEntityBase<T> entity, string fileAttributeName, Action<string, Stream> action)
        {
            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);
            InitializeFileBlocksDownloadRequest initRequest = new InitializeFileBlocksDownloadRequest()
            {
                FileAttributeName = fileAttributeName,
                Target = entity.EntityRecord.ToEntityReference()
            };

            var initResponse=(InitializeFileBlocksDownloadResponse)orgService.Execute(initRequest);

           
            using (var stream=new PAFileBlocksStream(initResponse.FileContinuationToken,initResponse.FileSizeInBytes,orgService))
            {
                action(initResponse.FileName, stream);
            }
        }

        public void UploadAttributeFile(PAEntityBase<T> entity, string fileAttributeName, string fileName,string fileMimeType, Stream fileStream)
        {

            var orgService = ContextContainer.GetValue<IOrganizationService>(ContextTypes.OrgService);

            InitializeFileBlocksUploadRequest initRequest = new InitializeFileBlocksUploadRequest()
            {
                FileAttributeName = fileAttributeName,
                FileName = fileName,
                Target = entity.EntityRecord.ToEntityReference()
            };


            var initResponse = (InitializeFileBlocksUploadResponse)orgService.Execute(initRequest);

            int perSize = 1024 * 1024 * 3;
            //int perSize = 100;
            int currentSize = perSize;
            byte[] buff = new byte[perSize];
            List<string> blockIDs = new List<string>(); 
            while(currentSize==perSize)
            {
                currentSize=fileStream.Read(buff, 0, perSize);
                if (currentSize!=0)
                {
                    var blockID = Guid.NewGuid().ToString().Base64Encode();
                    blockIDs.Add(blockID);
                    UploadBlockRequest uploadRequest = new UploadBlockRequest()
                    {
                        BlockId = blockID,
                        FileContinuationToken = initResponse.FileContinuationToken,
                        BlockData = buff.Take(currentSize).ToArray()
                    };

                  orgService.Execute(uploadRequest);
                }
            }

            CommitFileBlocksUploadRequest commitRequest = new CommitFileBlocksUploadRequest()
            {
                BlockList = blockIDs.ToArray(),
                FileContinuationToken = initResponse.FileContinuationToken,
                FileName = fileName,
                MimeType = fileMimeType
            };
            orgService.Execute(commitRequest);
        }
    }

    public class PAEntityBaseIMPFactory<T> : IFactory<IPAEntityBaseIMP<T>>
    {
        public IPAEntityBaseIMP<T> Create()
        {
            return new PAEntityBaseIMP<T>();
        }
    }
}
