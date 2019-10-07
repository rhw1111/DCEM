using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using MSLibrary;
using MSLibrary.DI;
using DCEM.ConfigurationService.Main.Entities.DAL;

namespace DCEM.ConfigurationService.Main.Entities
{
    /// <summary>
    /// 服务描述
    /// </summary>
    public class ServiceDescription : EntityBase<IServiceDescriptionIMP>
    {
        private static IFactory<IServiceDescriptionIMP> _serviceDescriptionIMPFactory;

        public static IFactory<IServiceDescriptionIMP> ServiceDescriptionIMPFactory
        {
            set
            {
                _serviceDescriptionIMPFactory = value;
            }
        }

        public override IFactory<IServiceDescriptionIMP> GetIMPFactory()
        {
            return _serviceDescriptionIMPFactory;
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
        /// 服务名称
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
        /// 服务地址
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
        /// 服务身份验证信息的类型
        /// </summary>
        public string AuthInfoType
        {
            get
            {
                return GetAttribute<string>("AuthInfoType");
            }
            set
            {
                SetAttribute<string>("AuthInfoType", value);
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

        public async Task Update()
        {
            await _imp.Update(this);
        }
    }

    public interface IServiceDescriptionIMP
    {
        Task Add(ServiceDescription description);
        Task Delete(ServiceDescription description);
        Task Update(ServiceDescription description);
    }

    [Injection(InterfaceType = typeof(IServiceDescriptionIMP), Scope = InjectionScope.Transient)]
    public class ServiceDescriptionIMP : IServiceDescriptionIMP
    {
        private IServiceDescriptionStore _serviceDescriptionStore;

        public ServiceDescriptionIMP(IServiceDescriptionStore serviceDescriptionStore)
        {
            _serviceDescriptionStore = serviceDescriptionStore;
        }

        public async Task Add(ServiceDescription description)
        {
            await _serviceDescriptionStore.Add(description);
        }

        public async Task Delete(ServiceDescription description)
        {
            await _serviceDescriptionStore.Delete(description.ID);
        }

        public async Task Update(ServiceDescription description)
        {
            await _serviceDescriptionStore.Update(description);
        }
    }
}
