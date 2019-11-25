using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.IO;
using System.Linq;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging.Console;
using System.Runtime.Serialization;
using System.Security;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using MSLibrary;
using MSLibrary.Thread;
using MSLibrary.Serializer;
using MSLibrary.Configuration;
using MSLibrary.DI;
using MSLibrary.Security.Jwt;
using MSLibrary.Security.Jwt.DAL;
using MSLibrary.Security.Jwt.JwtGenerateCreateSignKeyServices;
using MSLibrary.Security.Jwt.JwtGenerateValidateSignKeyServices;
using DCEM.Main;
using DCEM.ServiceAssistantService.Main.Entities;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DCEM.ConsoleApp
{
    using MainStartupHelper = DCEM.Main.StartupHelper;
    class Program
    {

        private static string _baseUrl;

        async static Task  Main(string[] args)
        {

            X509Store store = new X509Store(StoreName.Root, StoreLocation.LocalMachine);
            store.Open(OpenFlags.ReadOnly);
            var cs=store.Certificates;

            string strCntent = @"{
    ""entries"": [
        {
            ""locale"": ""zh-hk"",
            ""ACL"": {},
            ""_version"": 108,
            ""accept_cash_coupon"": false,
            ""business_hours"": """",
            ""close_date"": null,
            ""code"": ""SHT-SHT K1-Daniel Wellington  /Olivia Burton / Klasse 14"",
            ""contact_no"": """",
            ""created_at"": ""2019-08-06T18:05:41.412Z"",
            ""created_by"": ""bltfa46cce158845754"",
            ""description"": ""- 售賣手錶與首飾"",
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""is_closed"": false,
            ""is_new"": false,
            ""location_code"": ""SHT K1"",
            ""name"": ""Daniel Wellington  /Olivia Burton / Klasse 14"",
            ""name_sorting"": ""daniel wellington  /olivia burton / klasse 14"",
            ""nearest_mtr_exit"": ""非入閘區大堂"",
            ""open_date"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/sht.pdf""
            },
            ""rail_line"": [
                ""blte93806e9da86c4e3""
            ],
            ""station"": [
                ""blt1cc18de43f4f0715""
            ],
            ""station_shop_category"": [
                ""blt8dace69f8fb2383d""
            ],
            ""tags"": [
                ""daniel wellington /olivia burton / klasse 14""
            ],
            ""thumbnail_photo"": null,
            ""title"": ""沙田-SHT K1-Daniel Wellington  /Olivia Burton / Klasse 14"",
            ""uid"": ""blt0e89b6e1c4b20321"",
            ""updated_at"": ""2019-11-20T17:27:15.560Z"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""url"": {
                ""title"": """",
                ""href"": """"
            },
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-11-20T17:27:16.993Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt233f523b4d5c4811"",
            ""title"": ""香港-HOK APM 4-名仕快相"",
            ""code"": ""HOK-HOK APM 4-Max Sight Photo-Me"",
            ""shop"": [
                ""bltf78b8c695021f26d""
            ],
            ""name"": ""名仕快相"",
            ""name_sorting"": ""名仕快相"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 自助即影即有証件照片"",
            ""url"": {
                ""title"": """",
                ""href"": """"
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""B 出口"",
            ""location_code"": ""HOK APM 4"",
            ""accept_cash_coupon"": false,
            ""is_closed"": false,
            ""open_date"": ""2002-01-01"",
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": ""0600-0100"",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""blt5c4e94e735c09b0f""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""max sight photo-me""
            ],
            ""_version"": 4,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:24:12.165Z"",
            ""updated_at"": ""2019-09-10T17:22:14.104Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:22:15.505Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt77843f57c12dfbfd"",
            ""title"": ""香港-HOK 13c-鯉魚門紹香園"",
            ""code"": ""HOK-HOK 13c-Shiu Heung Yuen Bakery"",
            ""shop"": [
                ""bltfd862605983b3387""
            ],
            ""name"": ""鯉魚門紹香園"",
            ""name_sorting"": ""鯉魚門紹香園"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 售賣中式零食"",
            ""url"": {
                ""title"": """",
                ""href"": """"
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""1/F"",
            ""location_code"": ""HOK 13c"",
            ""accept_cash_coupon"": true,
            ""is_closed"": false,
            ""open_date"": null,
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": """",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""blt3c06743b811e8b7f""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""shiu heung yuen bakery""
            ],
            ""_version"": 3,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:30:42.668Z"",
            ""updated_at"": ""2019-09-10T17:22:00.694Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:22:02.196Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""bltc4930f4c1984194f"",
            ""title"": ""香港-HOK 83-七.十一便利店"",
            ""code"": ""HOK-HOK 83-7-Eleven"",
            ""shop"": [
                ""blt49a96f661778d32e""
            ],
            ""name"": ""七.十一便利店"",
            ""name_sorting"": ""七.十一便利店"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 售賣飲品、報紙雜誌、潮流產品及服務。"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.7-eleven.com.hk""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""市區預辦登機大堂"",
            ""location_code"": ""HOK 83"",
            ""accept_cash_coupon"": true,
            ""is_closed"": false,
            ""open_date"": null,
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": """",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""blt3c06743b811e8b7f""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""7-eleven""
            ],
            ""_version"": 4,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:19:54.509Z"",
            ""updated_at"": ""2019-09-10T17:21:52.592Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:21:54.095Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""bltb0a419264a9183b7"",
            ""title"": ""香港-HOK 53-大家樂"",
            ""code"": ""HOK-HOK 53-Cafe de Coral"",
            ""shop"": [
                ""blte35484de722a088e""
            ],
            ""name"": ""大家樂"",
            ""name_sorting"": ""大家樂"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 供應外賣特式食品及飲品"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.cafedecoralfastfood.com""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""市區預辦登機大堂"",
            ""location_code"": ""HOK 53"",
            ""accept_cash_coupon"": true,
            ""is_closed"": false,
            ""open_date"": null,
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": """",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""bltb0fd687568cd047d""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""cafe de coral""
            ],
            ""_version"": 3,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:19:16.832Z"",
            ""updated_at"": ""2019-09-10T17:21:47.206Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:21:49.639Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blta95b9947ab311542"",
            ""title"": ""香港-HOK ATM 10-恒生銀行自動櫃員機"",
            ""code"": ""HOK-HOK ATM 10-Hang Seng Bank ATM"",
            ""shop"": [
                ""blta361578697d731ff""
            ],
            ""name"": ""恒生銀行自動櫃員機"",
            ""name_sorting"": ""恒生銀行自動櫃員機"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 提供戶口提款, 結餘查詢, 轉賬及繳費等自助銀行服務"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.hangseng.com""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""市區預辦登機大堂"",
            ""location_code"": ""HOK ATM 10"",
            ""accept_cash_coupon"": false,
            ""is_closed"": false,
            ""open_date"": ""2002-01-01"",
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": ""0600-0030"",
            ""contact_no"": ""2822-0228"",
            ""station_shop_category"": [
                ""blt4d420b0061b7b273""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""hang seng bank atm""
            ],
            ""_version"": 3,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:18:41.346Z"",
            ""updated_at"": ""2019-09-10T17:21:42.801Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:21:44.410Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt1394dae2af126b75"",
            ""title"": ""香港-HOK 4-行李寄存"",
            ""code"": ""HOK-HOK 4-Left Baggage"",
            ""shop"": [
                ""bltdfff823525530771""
            ],
            ""name"": ""行李寄存"",
            ""name_sorting"": ""行李寄存"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 提供行李寄存服務"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.guardforce.com.hk""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""市區預辦登機大堂"",
            ""location_code"": ""HOK 4"",
            ""accept_cash_coupon"": false,
            ""is_closed"": false,
            ""open_date"": ""2002-01-01"",
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": ""0600-0100"",
            ""contact_no"": ""2868-3190"",
            ""station_shop_category"": [
                ""blt5c4e94e735c09b0f""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""left baggage""
            ],
            ""_version"": 3,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:17:18.674Z"",
            ""updated_at"": ""2019-09-10T17:21:38.203Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-10T17:21:39.706Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt6a27d75e5b1c1648"",
            ""title"": ""香港-HOK 63-Hallmark"",
            ""code"": ""HOK-HOK 63-Hallmark"",
            ""shop"": [
                ""blt8974856405e7d558""
            ],
            ""name"": ""Hallmark"",
            ""name_sorting"": ""hallmark"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""-  售賣賀咭、精品擺設及文具"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.hallmark.com""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""近港島綫月台"",
            ""location_code"": ""HOK 63"",
            ""accept_cash_coupon"": true,
            ""is_closed"": false,
            ""open_date"": ""2010-04-17"",
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": ""1100-2130 (Mon-Fri)\n1100-2100 (Sat, Sun & PH)"",
            ""contact_no"": ""2537-0312"",
            ""station_shop_category"": [
                ""blte2835a671a6eb3d2""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""hallmark""
            ],
            ""_version"": 2,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:24:47.363Z"",
            ""updated_at"": ""2019-09-09T17:41:45.416Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-09T17:41:46.834Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt75452a362708d4b9"",
            ""title"": ""香港-HOK 55-Can.teen"",
            ""code"": ""HOK-HOK 55-Can.teen"",
            ""shop"": [
                ""blt7204e12bec34bd52""
            ],
            ""name"": ""Can.teen"",
            ""name_sorting"": ""can.teen"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 供應外賣特式食品及飲品"",
            ""url"": {
                ""title"": """",
                ""href"": ""www.maxims.com.hk""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""市區預辦登機大堂"",
            ""location_code"": ""HOK 55"",
            ""accept_cash_coupon"": false,
            ""is_closed"": false,
            ""open_date"": null,
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": """",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""bltb0fd687568cd047d""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""can.teen""
            ],
            ""_version"": 2,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:25:32.644Z"",
            ""updated_at"": ""2019-09-09T17:41:40.736Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-09T17:41:42.176Z"",
                ""user"": ""bltfa46cce158845754""
            }
        },
        {
            ""locale"": ""zh-hk"",
            ""uid"": ""blt21efe86ebf68dbfe"",
            ""title"": ""香港-HOK 34B-Wanko"",
            ""code"": ""HOK-HOK 34B-Wanko"",
            ""shop"": [
                ""blt405bbc9ebdf84f4c""
            ],
            ""name"": ""Wanko"",
            ""name_sorting"": ""wanko"",
            ""shop_brand_photo"": null,
            ""thumbnail_photo"": null,
            ""photo_url"": {
                ""title"": """",
                ""href"": ""https://www.mtr.com.hk/archive/ch/services/shop/hok.pdf""
            },
            ""description"": ""- 售賣時裝及飾物"",
            ""url"": {
                ""title"": """",
                ""href"": ""http://www.veeko.com.hk/""
            },
            ""station"": [
                ""blt0eced5620fb97819""
            ],
            ""rail_line"": [
                ""blt4fb2efc63fa6498b"",
                ""blt76bcc44a6de5864e""
            ],
            ""nearest_mtr_exit"": ""入閘區大堂"",
            ""location_code"": ""HOK 34B"",
            ""accept_cash_coupon"": false,
            ""is_closed"": false,
            ""open_date"": null,
            ""close_date"": null,
            ""is_new"": false,
            ""business_hours"": """",
            ""contact_no"": """",
            ""station_shop_category"": [
                ""blt8dace69f8fb2383d""
            ],
            ""disable_point_earn"": false,
            ""disable_self_earn"": false,
            ""tags"": [
                ""wanko""
            ],
            ""_version"": 2,
            ""created_by"": ""bltba70cfdb93872cc8"",
            ""updated_by"": ""bltfa46cce158845754"",
            ""created_at"": ""2019-09-09T07:26:17.152Z"",
            ""updated_at"": ""2019-09-09T17:41:34.873Z"",
            ""ACL"": {},
            ""publish_details"": {
                ""environment"": ""blt5ccc0e312f0af86f"",
                ""locale"": ""zh-hk"",
                ""time"": ""2019-09-09T17:41:36.442Z"",
                ""user"": ""bltfa46cce158845754""
            }
        }
    ]
}";


            var stationShops = JsonConvert.DeserializeObject<StationShop>(strCntent);


            //设置编码，解决中文问题
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
            //设置应用程序工作基目录
            _baseUrl = Path.GetDirectoryName(typeof(Program).Assembly.Location);
            Environment.CurrentDirectory = _baseUrl ?? Environment.CurrentDirectory;

            //获取运行环境名称
            var environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_APPLICATIONNAME");
            if (environmentName == null)
            {
                environmentName = string.Empty;
            }
            //初始化配置容器
            MainStartupHelper.InitConfigurationContainer(environmentName, _baseUrl);

            //初始化上下文容器
            MainStartupHelper.InitContext();

            //获取核心配置
            var coreConfiguration = ConfigurationContainer.Get<CoreConfiguration>(ConfigurationNames.Application);

            ServiceCollection services = new ServiceCollection();

            //初始化DI容器
            MainStartupHelper.InitDI(services, coreConfiguration.DISetting);

            DbContextOptions<EntityContext> option = new DbContextOptions<EntityContext>();
            DbContextOptionsBuilder<EntityContext> optionBuilder = new DbContextOptionsBuilder<EntityContext>(option);

            EntityContext entityContext = new EntityContext(optionBuilder.UseSqlServer("Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=Library;Data Source=.").Options);

            var user =await (from item in entityContext.Users
                        select item).FirstOrDefaultAsync();



            string strPrivateKey = @"<RSAKeyValue><Modulus>oK8pjjdhHlvSwhbHFJrq4PRkRTsEcdV1/P8cZa6bt5ZWRBt7wN628a0Ztrf96Rtp5R+s17PQHFlcKC1/bqZIzpNwyeGbXiNK9WCiOcxVufX9Utu0UN37VLJ6UjzZruau24PxQUkO8ZPAfxT4Hqm0l9O4OVROtQg6I+401dF3TEEVDjsm1fNttES6rZlPOjHlqvYgu91DV/bDwd1zEPduzhV9VyG813G9uAfe55DVJgBWYM3A6M0y6Y0HYt4fBFmFTSBp2g1FrS622zGmMIxiCyofuIb4TpTNGjnrS6xX4A+qrWE4mKF372t9mWpQmJueUa+a4EBfOcGfFyDPXzQOPQ==</Modulus><Exponent>AQAB</Exponent><P>yJANjoQyIxQoiVUvO3DpCZ0hbc+pdKkZF3Os4ITyqc4RAjzMwXsJaSA14puz+S3sqxXSwJhjLh7Cy0jab+f7Q5nKO60cv9zeGA95p+GLFm+uiltPC+D9hOMpJokZ/hoQhBNbyV3iamLzhoKa/nCKgC3OvllEc2KcTTFrBy9pUDs=</P><Q>zRlISRQN28UUnVEeUSsytrfAPKH1u3v65VkD3vBDaIXGZeBB9mF9GhRduhHzlwtMRnZtlkAW5ANYouknI6r6EwDufPJk3anpVkB4QZ5v3P6Z7P5wNuEohmbpFHsFpUMLiKgkoP9OIVU+hosomB26Pmra4k6W+iRK3sh2OlGsa+c=</Q><DP>MczbIOUgUeeCfT9CoB7ULofusgabTBVk3pbheUpputIpFQYlzXEQkCLoXmFNGfVWS9D6aMot7ljDA5kObDUNBecc+R5uAhIEr7LAAXiWgbavfzlW8lsmeCWzpRbr9lVgfnsUEncWblYto9uwQreNHHDDYi5mOcRljSFVMw6Jtts=</DP><DQ>EvSYOrDQyxP+4L9DhwrwB/UZnkD1vhsqSBIfCna4NCvQ909vqT6/Wi6xruXD1pzjsst1O2K2+uHYSk40INbHgAQhBok8i0QN3bvdoWrsOceKIF4vrtLGdQ2D0zG/htOYeEvZ/ss5xFjli3fHC7ALq4MisbHDwGCkTszGKIOt5Nc=</DQ><InverseQ>ftIDKAb8AQWFs7cJ8yTUwOp2OYGTtmzQp3HJ+kD6b5C/ClnxQStSENksK78fJtW6P7lPX5o9i7bhMHd4rK8yOxBDwobhwpWh6KHTb5pVNTY1VWtp8LIl0M/r45KSo1SBC817tGNAJ/ezIcYxDoO1lv+pEAEGHr9xAKhpV5dlA5s=</InverseQ><D>BR3u3deHoTbdXE7rYg2Y4zcFJms9tf5NNpRNLDPGQ69m6d5SL48oFkQj6HyteknkMmay01+nhe+WjrT8NOLYuLNbSSKFFxdaoLvGDr8iD7z0pznV4Slggo74dDv51qcD9HucKC8SacEBxUo+qINQ+/DDEhhMNVmguFoyloiIGwZ+oRDoWBeptRHlteHEvdIIuFgIeE7Hv7wXB+G3ioM61a26cVH/u5nYEC2Ymk2CY2PqIxapxQFQrulALp0nV6IQFqBUtX+TCD4LwltyP9Exy48oFHSZpHI2e9F3vJ+PdAgcBILbLmtnKk8K9XeGvyOLFlJJaJhWVhK8zbajZupiRQ==</D></RSAKeyValue>";
            string strPublickey = @"<RSAKeyValue><Modulus>oK8pjjdhHlvSwhbHFJrq4PRkRTsEcdV1/P8cZa6bt5ZWRBt7wN628a0Ztrf96Rtp5R+s17PQHFlcKC1/bqZIzpNwyeGbXiNK9WCiOcxVufX9Utu0UN37VLJ6UjzZruau24PxQUkO8ZPAfxT4Hqm0l9O4OVROtQg6I+401dF3TEEVDjsm1fNttES6rZlPOjHlqvYgu91DV/bDwd1zEPduzhV9VyG813G9uAfe55DVJgBWYM3A6M0y6Y0HYt4fBFmFTSBp2g1FrS622zGmMIxiCyofuIb4TpTNGjnrS6xX4A+qrWE4mKF372t9mWpQmJueUa+a4EBfOcGfFyDPXzQOPQ==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>";

            JwtGenerateCreateSignKeyMainService.JwtGenerateCreateSignKeyServiceFactories.Add("RsaPrivate", DIContainerContainer.Get<JwtGenerateCreateSignKeyServiceForRsaPrivateFactory>());

            JwtGenerateValidateSignKeyMainService.JwtGenerateValidateSignKeyServiceFactories.Add("RsaPublic", DIContainerContainer.Get<JwtGenerateValidateSignKeyServiceForRsaPublicFactory>());
            JwtGenerateValidateSignKeyMainService.JwtGenerateValidateSignKeyServiceFactories.Add("MetadataService", DIContainerContainer.Get<JwtGenerateValidateSignKeyServiceForMetadataServiceFactory>());


            JwtEnpoint jwtEndpoint = new JwtEnpoint()
            {
                ID = Guid.NewGuid(),
                CreateTime = DateTime.UtcNow,
                ModifyTime = DateTime.UtcNow,
                Name = "A",
                CreateSignKeyType = "RsaPrivate",
                CreateSignKeyConfiguration = $@"{{""Key"":""{strPrivateKey}"",""Alg"":""{SecurityAlgorithms.RsaSha256Signature}""}}",
                ValidateSignKeyType = "MetadataService",
                ValidateSignKeyConfiguration = $@"{{""Uri"":""https://subcrmadfs.sokon.com/adfs/.well-known/openid-configuration"",""Cache"":true,""Timeout"":-1}}"
               

            };

            List<Claim> claims = new List<Claim>()
            {
                new Claim("A1","A1"),
                new Claim("A2","A2")
            };
            ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims);


            var strToken=await jwtEndpoint.CreateJwt("ASD", "BSD", claimsIdentity, null, null, null);

            var dClaims = await jwtEndpoint.ValidateJwt("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkU2M29sLVNHbmhhQkE0VWItY0RSb1pqZnNqZyJ9.eyJhdWQiOiJodHRwczovL3N1YmNybWRldjIuc29rb24uY29tL2FwaS9kYXRhL3Y4LjIiLCJpc3MiOiJodHRwOi8vc3ViY3JtYWRmcy5zb2tvbi5jb20vYWRmcy9zZXJ2aWNlcy90cnVzdCIsImlhdCI6MTU3MzIxNjk4MSwiZXhwIjoxNTczMjIwNTgxLCJwcmltYXJ5c2lkIjoiUy0xLTUtMjEtNDIyMjk0OTIwMC0yMDY1Njc0Mjk5LTIwNDgyNjQ5OTItMTEwNSIsInVwbiI6InN1YmRldmNybWFkbWluQHNmbW90b3JzLmNvbSIsInVuaXF1ZV9uYW1lIjoiU0ZNT1RPUlNcXHN1YmRldmNybWFkbWluIiwiYXBwdHlwZSI6IkNvbmZpZGVudGlhbCIsImFwcGlkIjoiZTMwNTM2ODItOTM1ZC00MWRmLWJjYzMtZjdmYzRkZTM3MDQwIiwiYXV0aG1ldGhvZCI6InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0IiwiYXV0aF90aW1lIjoiMjAxOS0xMS0wOFQxMjo0MzowMS4wMzFaIiwidmVyIjoiMS4wIn0.bZh4Zeu60MC9XJOzHHYr5R9lpcUoBIh5DGzfAFkKL18nmzmSxVNtZVih0leoGsUbJDN3UJVozsxJtP04q-0YFGLQQSUavZfd2H7JV1LYdx56L-AgFeOAyVI_0pXxzY4tSeVvmNnq7Zn-DNCUL5Ibe_3HAY61dOq68rRp2KlxmjHkxwIeN7ts3O_yyKJPWLDzkQw1SMwoG7wDGmEcdlP3ocsrdxQqp9GRthK608AphzKbrVZzdtGuWZiP7297-4uPwEtw8TwdRfyWhhyVZMd0jjIHWGamYRlFOlxh7oxGj7W7iUhV1vxbjw16B98K6QAVh3_zHmKdlEXDanW2J22UPQ", new List<JwtValidateParameter>());


            var helper=DIContainerContainer.Get<AdfsEndpointRepositoryHelper>();
            var endpoint=await helper.QueryByName("Main");

            var claimsP = await endpoint.ValidateJWT("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkU2M29sLVNHbmhhQkE0VWItY0RSb1pqZnNqZyJ9.eyJhdWQiOiJodHRwczovL3N1YmNybWRldjIuc29rb24uY29tL2FwaS9kYXRhL3Y4LjIiLCJpc3MiOiJodHRwOi8vc3ViY3JtYWRmcy5zb2tvbi5jb20vYWRmcy9zZXJ2aWNlcy90cnVzdCIsImlhdCI6MTU3MzIxNjk4MSwiZXhwIjoxNTczMjIwNTgxLCJwcmltYXJ5c2lkIjoiUy0xLTUtMjEtNDIyMjk0OTIwMC0yMDY1Njc0Mjk5LTIwNDgyNjQ5OTItMTEwNSIsInVwbiI6InN1YmRldmNybWFkbWluQHNmbW90b3JzLmNvbSIsInVuaXF1ZV9uYW1lIjoiU0ZNT1RPUlNcXHN1YmRldmNybWFkbWluIiwiYXBwdHlwZSI6IkNvbmZpZGVudGlhbCIsImFwcGlkIjoiZTMwNTM2ODItOTM1ZC00MWRmLWJjYzMtZjdmYzRkZTM3MDQwIiwiYXV0aG1ldGhvZCI6InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDphYzpjbGFzc2VzOlBhc3N3b3JkUHJvdGVjdGVkVHJhbnNwb3J0IiwiYXV0aF90aW1lIjoiMjAxOS0xMS0wOFQxMjo0MzowMS4wMzFaIiwidmVyIjoiMS4wIn0.bZh4Zeu60MC9XJOzHHYr5R9lpcUoBIh5DGzfAFkKL18nmzmSxVNtZVih0leoGsUbJDN3UJVozsxJtP04q-0YFGLQQSUavZfd2H7JV1LYdx56L-AgFeOAyVI_0pXxzY4tSeVvmNnq7Zn-DNCUL5Ibe_3HAY61dOq68rRp2KlxmjHkxwIeN7ts3O_yyKJPWLDzkQw1SMwoG7wDGmEcdlP3ocsrdxQqp9GRthK608AphzKbrVZzdtGuWZiP7297-4uPwEtw8TwdRfyWhhyVZMd0jjIHWGamYRlFOlxh7oxGj7W7iUhV1vxbjw16B98K6QAVh3_zHmKdlEXDanW2J22UPQ", new string[] { "https://subcrmdev2.sokon.com/api/data/v8.2" });
            var userName= claimsP.FindFirst(System.Security.Claims.ClaimTypes.Name).Value;



            SerializerObj sObj = new SerializerObj()
            {
                 Name="A"
            };

            HY.Do(sObj);

            DateTime dt1970 = new DateTime(1970, 1, 1, 0, 0, 0, 0);
            var mill= (DateTime.UtcNow.Ticks - dt1970.Ticks) / 10000;
            var strT = $"dev10011 {mill.ToString()}";
            //var strT = $"dev10001";

            var encryptionService=EncryptionService.Create("d91n88jjaD/nxRLGtvYmZDa/uc/w7kaf491bdWZnuR8=");
            var strEncrypt=encryptionService.Encrypt(strT);

            var ab= BitConverter.ToInt64(Guid.NewGuid().ToByteArray(), 0).ToString()+BitConverter.ToInt64(Guid.NewGuid().ToByteArray(), 0).ToString().Substring(0,13);

            List<string> strList = new List<string>() { "aaa" };
            var strDisplay=await strList.ToDisplayString(
                async(item)=>
                {
                    return await Task.FromResult(item);
                },
                async()=>
                {
                    return await Task.FromResult(";_+");
                }
                );
            var strDate= DateTime.UtcNow.ToString("r");

            HttpClient httpClient = new HttpClient();
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("aa", new List<string> { "vv","bb"});
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/json");
            await httpClient.GetAsync("http://www.163.com");


            MemoryCache cache = new MemoryCache(new MemoryCacheOptions()
            {
                SizeLimit = 1
            });

            cache.Set(1, new CacheItem() { Number=1 }, new MemoryCacheEntryOptions()
            {
                AbsoluteExpirationRelativeToNow = new TimeSpan(0, 0, 100),
                 Size=1
                 
            });


            cache.Set("1", new CacheItem() { Number = 2 }, new MemoryCacheEntryOptions()
            {
                AbsoluteExpirationRelativeToNow = new TimeSpan(0, 0, 100),
                Size=1

            });


           var citem= cache.Get<CacheItem>(1);
         citem = cache.Get<CacheItem>("1");
            ParallelHelper parallelHelper = new ParallelHelper(40);

            ConcurrentDictionary<int, int> dict = new ConcurrentDictionary<int, int>(); 


            await parallelHelper.RunForward<int>(
                async(item)=>
                {
                    Random r = new Random(DateTime.Now.Millisecond);
             
                    await Task.Delay(r.Next(3000, 4000));
                    dict.TryAdd(item, item);
                },
                async(index)=>
                {

                    Random r = new Random(DateTime.Now.Millisecond);

                    await Task.Delay(r.Next(1000, 2000));

                    List<int> list = new List<int>();

                    for(var i=index*10;i< (index+1) * 10;i++)
                    {
                        list.Add(i);
                    }

                    if (index>=10)
                    {
                        return await Task.FromResult( (list, false));
                    }
                    else
                    {
                        return await Task.FromResult((list, true));
                    }
                }
                );

            Console.Read();
        }
    }


    public class CacheItem
    {
        public int Number { get; set; }
    }

    public enum E
    {
        A=0,
        B=1
    }





    public sealed class EncryptionService 
    {
        public const int BlockSizeInBits = 128;
        public const int BlockSizeInBytes = BlockSizeInBits / 8;

        public static readonly Encoding DefaultEncoding = new UTF8Encoding(
            encoderShouldEmitUTF8Identifier: false,
            throwOnInvalidBytes: true);

        private readonly byte[] _key;

        public static EncryptionService Create(string key)
        {
            if (key is null) throw new ArgumentNullException(
                paramName: nameof(key),
                message: "Encryption key cannot be null.");

            byte[] bytes;

            try { bytes = Convert.FromBase64String(key); }
            catch (FormatException formatException)
            {
                throw new ArgumentException(
                    paramName: nameof(key),
                    message: "Invalid encryption key format. Encryption key must be in Base64 encoding.",
                    innerException: formatException);
            }

            return new EncryptionService(bytes);
        }

        public EncryptionService(byte[] key)
        {
            if (key is null) throw new ArgumentNullException(
                paramName: nameof(key),
                message: "Encryption key cannot be null.");
            if (key.Length != 256 / 8 && key.Length != 192 / 8 && key.Length != 128 / 8) throw new ArgumentException(
                 paramName: nameof(key),
                 message: "Incorrect encryption key length. AES key length must be 256, 192, or 128 bits (32, 24, or 16 bytes).");

            _key = key;
        }

        public byte[] Encrypt(byte[] plain)
        {
            if (plain is null) throw new ArgumentNullException(nameof(plain));

            using (Aes aes = Aes.Create())
            {
                aes.Key = _key;
                // IV is automatically generated.
                // Defaults to CBC mode.

                using (ICryptoTransform encryptor = aes.CreateEncryptor())
                using (var resultMemoryStream = new MemoryStream())
                {
                    resultMemoryStream.Write(aes.IV);

                    using (var cryptoStream = new CryptoStream(
                        stream: resultMemoryStream,
                        transform: encryptor,
                        mode: CryptoStreamMode.Write,
                        leaveOpen: true))
                    {
                        cryptoStream.Write(plain);
                    }

                    return resultMemoryStream.ToArray();
                }
            }
        }

        public string Encrypt(string plain) =>
            plain is null ? throw new ArgumentNullException(
                paramName: nameof(plain),
                message: "Plaintext cannot be null.") :
            Convert.ToBase64String(Encrypt(DefaultEncoding.GetBytes(plain)));

        public byte[] Decrypt(byte[] encrypted)
        {
            if (encrypted is null) throw new ArgumentNullException(nameof(encrypted));
            if (encrypted.Length == 0) throw new Exception();

            using (Aes aes = Aes.Create())
            {
                aes.Key = _key;
                // encrypted.AsSpan(start: 0, length: BlockSizeInBytes).CopyTo(aes.IV);
                //if (encrypted.AsSpan(start: 0, length: BlockSizeInBytes).SequenceEqual(aes.IV) == false) throw new Exception("Not copied.");
                aes.IV = encrypted.AsSpan(start: 0, length: BlockSizeInBytes).ToArray();


                using (ICryptoTransform decryptor = aes.CreateDecryptor())
                using (var resultMemoryStream = new MemoryStream())
                {
                    try
                    {
                        using (var cryptoStream = new CryptoStream(
                            stream: resultMemoryStream,
                            transform: decryptor,
                            mode: CryptoStreamMode.Write,
                            leaveOpen: true))
                        {
                            cryptoStream.Write(encrypted.AsSpan(start: BlockSizeInBytes));
                        }
                    }
                    catch (CryptographicException)
                    {
                        throw new Exception();
                    }

                    return resultMemoryStream.ToArray();
                }
            }
        }

        public string Decrypt(string encrypted)
        {
            if (encrypted is null) throw new ArgumentNullException(nameof(encrypted));

            byte[] encryptedytes;

            try { encryptedytes = Convert.FromBase64String(encrypted); }
            catch (FormatException) { throw new Exception(); }

            byte[] decryptedBytes = Decrypt(encryptedytes);

            try { return DefaultEncoding.GetString(decryptedBytes); }
            catch (ArgumentException) { throw new Exception(); }
        }
    }


    public static class HY
    {
        public static void Do<T>(T obj)
        {
            string str= JsonSerializerHelper.Serializer(obj);
        }

        public static void Do(SerializerObj obj)
        {
            var i = 1;
        }
    }

    [DataContract]
    public class SerializerObj
    {
        [DataMember]
        public string Name { get; set; }
    }

    [Injection(InterfaceType = typeof(IJwtConnectionFactory), Scope = InjectionScope.Singleton)]
    public class JwtConnectionFactory : IJwtConnectionFactory
    {
        public string CreateAllForJwt()
        {
            throw new NotImplementedException();
        }

        public string CreateReadForJwt()
        {
            throw new NotImplementedException();
        }
    }

    public class EntityContext : DbContext
    {
        public EntityContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilde)
        {

            ValueConverter userCommentConverter = new ValueConverter<string, string>(v => v, v => "N");

            modelBuilde.Entity<User>().ToTable("User").HasKey((entity) => entity.ID);
            modelBuilde.Entity<User>().Property((entity) => entity.Name).IsRequired().HasMaxLength(50);
            modelBuilde.Entity<User>().Property((entity) => entity.Comment).HasMaxLength(500)
                .HasConversion(userCommentConverter);

        }
    }


    public class User
    {
        public Guid ID
        {
            get;set;
        }

        public string Name
        {
            get;set;
        }

        public string Comment
        {
            get;set;
        }
    }




    public sealed class Entries
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Uid { get; set; }
        [JsonProperty(PropertyName = "station_shop_category")]
        public string[] StationShopCategoryUid { get; set; }
        [JsonProperty(PropertyName = "station")]
        public string[] StationUid { get; set; }
        [JsonProperty(PropertyName = "rail_line")]
        public string[] RailLineUid { get; set; }
        [JsonProperty(PropertyName = "disable_point_earn")]
        public bool DisablePointEarn { get; set; }
        [JsonProperty(PropertyName = "disable_self_earn")]
        public bool DisableSelfEarn { get; set; }
        [JsonProperty(PropertyName = "location_code")]
        public string LocationCode { get; set; }
        [JsonProperty(PropertyName = "open_date")]
        public DateTime? OpenDate { get; set; }
        [JsonProperty(PropertyName = "close_date")]
        public DateTime? CloseDate { get; set; }
    }

    public sealed class StationShop
    {
        [JsonProperty(PropertyName = "entries")]
        public List<Entries> Entries { get; set; }
    }
}
