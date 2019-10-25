using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary.DI;

namespace MSLibrary.Storge
{
    /// <summary>
    /// 分片存储信息
    /// </summary>
    public class MultipartStorgeInfo : EntityBase<IMultipartStorgeInfoIMP>
    {
        private static IFactory<IMultipartStorgeInfoIMP> _multipartStorgeInfoIMPFactory;
        public static IFactory<IMultipartStorgeInfoIMP> MultipartStorgeInfoIMPFactory
        {
            set
            {
                _multipartStorgeInfoIMPFactory = value;
            }
        }
        public override IFactory<IMultipartStorgeInfoIMP> GetIMPFactory()
        {
            return _multipartStorgeInfoIMPFactory;
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
        /// 名称
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
        /// 显示名称
        /// </summary>
        public string DisplayName
        {
            get
            {

                return GetAttribute<string>("DisplayName");
            }
            set
            {
                SetAttribute<string>("DisplayName", value);
            }
        }



        /// <summary>
        /// 长度
        /// </summary>
        public long Size
        {
            get
            {

                return GetAttribute<long>("Size");
            }
            set
            {
                SetAttribute<long>("Size", value);
            }
        }
 
        /// <summary>
        /// 数据源信息
        /// </summary>
        public string SourceInfo
        {
            get
            {

                return GetAttribute<string>("SourceInfo");
            }
            set
            {
                SetAttribute<string>("SourceInfo", value);
            }
        }

        /// <summary>
        /// 凭据信息
        /// </summary>
        public string CredentialInfo
        {
            get
            {

                return GetAttribute<string>("CredentialInfo");
            }
            set
            {
                SetAttribute<string>("CredentialInfo", value);
            }
        }
        /// <summary>
        /// 扩展信息
        /// </summary>
        public string ExtensionInfo
        {
            get
            {

                return GetAttribute<string>("ExtensionInfo");
            }
            set
            {
                SetAttribute<string>("ExtensionInfo", value);
            }
        }

        /// <summary>
        /// 完成时的扩展信息
        /// </summary>
        public string CompleteExtensionInfo
        {
            get
            {

                return GetAttribute<string>("CompleteExtensionInfo");
            }
            set
            {
                SetAttribute<string>("CompleteExtensionInfo", value);
            }
        }

        /// <summary>
        /// 状态
        /// 0：未完成
        /// 1：已完成
        /// </summary>
        public int Status
        {
            get
            {

                return GetAttribute<int>("Status");
            }
            set
            {
                SetAttribute<int>("Status", value);
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


        public async Task Add()
        {
            await _imp.Add(this);
        }
        public async Task Delete()
        {
            await _imp.Delete(this);
        }
        public async Task AddDetails(long size, int startSize, long perSize, int number)
        {
            await _imp.AddDetails(this, size, startSize, perSize, number);
        }
        public async Task Complete(string extensionInfo)
        {
            await _imp.Complete(this, extensionInfo);
        }
        public async Task CompleteDetail(Guid detailId, string extensionInfo)
        {
            await _imp.CompleteDetail(this,detailId, extensionInfo);
        }

        public async Task GetDetailAll(int status, Func<MultipartStorgeInfoDetail, Task> action)
        {
            await _imp.GetDetailAll(this, status, action);
        }

        public async Task<QueryResult<MultipartStorgeInfoDetail>> GetDetails(int page, int pageSize)
        {
            return await _imp.GetDetails(this, page, pageSize);
        }


    }

    public interface IMultipartStorgeInfoIMP
    {
        Task Add(MultipartStorgeInfo info);
        Task Delete(MultipartStorgeInfo info);
        Task AddDetails(MultipartStorgeInfo info,long size,int startSize, long perSize,int number);
        Task Complete(MultipartStorgeInfo info, string extensionInfo);
        Task CompleteDetail(MultipartStorgeInfo info,Guid detailId,string extensionInfo);

        Task GetDetailAll(MultipartStorgeInfo info,int status,Func<MultipartStorgeInfoDetail,Task> action);

        Task<QueryResult<MultipartStorgeInfoDetail>> GetDetails(MultipartStorgeInfo info,int page,int pageSize);
    }



}
