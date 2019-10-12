export class AppConfig {
    constructor() {
        //设置当前运行环境
        this.Environment = "localhost";
        this.InterfacePreURL = "";
        switch (this.Environment) {
            case 'Dev':
                this.InterfacePreURL = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Sit':
                this.InterfacePreURL = "";
                break;
            case 'Uat':
                this.InterfacePreURL = "";
                break;
            case 'Pro':
                this.InterfacePreURL = "";
                break;
            default:
                this.InterfacePreURL = "http://localhost:52151";
                break;
        }
    }
    //获取接口请求地址
    GetInterfacePreURL() {
        return this.InterfacePreURL;
    }
}
//阿里云附件地址
AppConfig.OssUrl = 'http://ceo-oss.oss-cn-hangzhou.aliyuncs.com';
//adfs获取token地址
AppConfig.AdfsAuthUrl = "https://subcrmadfs.sokon.com//adfs/oauth2/token";
//静态参数定义
AppConfig.LoginOutTime = 20;
//# sourceMappingURL=app.config.js.map