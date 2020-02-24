using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using PALibrary.Entities;

namespace PALibrary.Context
{
    public class CurrentUserInfoContext : ICurrentUserInfoContext
    {
        private IPAUserRepository _paUserRepository;
        private EntityReference _userID;
        private int? _lcid;
        private int? _timezoneOffset;
        public CurrentUserInfoContext(IPAUserRepository paUserRepository,Guid userID)
        {
            _paUserRepository = paUserRepository;
            _userID = new EntityReference("systemuser", userID);
        }
        public int GetLcid()
        {
            if (_lcid.HasValue)
            {
                return _lcid.Value;
            }

            var user= _paUserRepository.QueryByID(_userID.Id);
            var userSetting=user.GetSetting();

            _lcid = userSetting.EntityRecord.GetAttributeValue<int>("uilanguageid");
            _timezoneOffset= userSetting.EntityRecord.GetAttributeValue<int>("timezonebias");

            return _lcid.Value;
        }

        public int GetTimezoneOffset()
        {
            if (_timezoneOffset.HasValue)
            {
                return _timezoneOffset.Value;
            }

            var user = _paUserRepository.QueryByID(_userID.Id);
            var userSetting = user.GetSetting();

            _lcid = userSetting.EntityRecord.GetAttributeValue<int>("uilanguageid");
            _timezoneOffset = userSetting.EntityRecord.GetAttributeValue<int>("timezonebias");

            return _timezoneOffset.Value;
        }

        public EntityReference GetUserID()
        {
            return _userID;
        }
    }

    public interface ICurrentUserInfoContextFactory
    {
        ICurrentUserInfoContext Create(Guid userID);
    }
    public class CurrentUserInfoContextFactory: ICurrentUserInfoContextFactory
    {
        private static CurrentUserInfoContextFactory _currentUserInfoContextFactory=new CurrentUserInfoContextFactory();
        public ICurrentUserInfoContext Create(Guid userID)
        {
            var paUserRepositoryFactory=PAUserRepositoryFactory.Get();
            var currentUserInfoContext = new CurrentUserInfoContext(paUserRepositoryFactory, userID);
            return currentUserInfoContext;
        }

        public static ICurrentUserInfoContextFactory Get()
        {
            return _currentUserInfoContextFactory;
        }
    }
}
