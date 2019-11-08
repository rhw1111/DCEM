using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using MSLibrary;
using MSLibrary.DI;
using MSLibrary.Oauth.ADFS;

namespace DCEM.ServiceAssistantService.Main.Entities
{
    public class AdfsEndpoint : EntityBase<IAdfsEndpointIMP>
    {

        private static IFactory<IAdfsEndpointIMP> _adfsEndpointIMPFactory;
        public static IFactory<IAdfsEndpointIMP> AdfsEndpointIMPFactory
        {
            set
            {
                _adfsEndpointIMPFactory = value;
            }
        }
        public override IFactory<IAdfsEndpointIMP> GetIMPFactory()
        {
            return _adfsEndpointIMPFactory;
        }




        /// <summary>
        /// ID
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
        /// 地址
        /// </summary>
        public string Uri
        {
            get
            {

                return GetAttribute<string>("Uri");
            }
            set
            {
                SetAttribute<string>("Uri", value);
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


        public async Task<ClaimsPrincipal> ValidateJWT(string token, string[] audiences)
        {
            return await _imp.ValidateJWT(this, token, audiences);
        }

    }

    public interface IAdfsEndpointIMP
    {
        Task<ClaimsPrincipal> ValidateJWT(AdfsEndpoint endpoint,string token,string[] audiences);
    }

    [Injection(InterfaceType = typeof(IAdfsEndpointIMP), Scope = InjectionScope.Transient)]
    public class AdfsEndpointIMP : IAdfsEndpointIMP
    {
        private IEnumerable<SecurityKey> _securityKey = null;
        
        public async Task<ClaimsPrincipal> ValidateJWT(AdfsEndpoint endpoint,string token, string[] audiences)
        {
            if (_securityKey==null)
            {
                _securityKey=await AdfsHelper.GetAdfsSigningKeys(endpoint.Uri);
            }
            TokenValidationParameters validationParameters =
                new TokenValidationParameters
                {
                    ValidIssuer = $"{endpoint.Uri}adfs/",
                    ValidIssuers = new[] { $"{endpoint.Uri}adfs/", $"{endpoint.Uri}adfs/services/trust" },
                    ValidAudiences = audiences,
                    IssuerSigningKeys = _securityKey
                };

            SecurityToken validatedToken;
            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
            var claims = handler.ValidateToken(token, validationParameters, out validatedToken);
            return claims;
        }
    }
}
