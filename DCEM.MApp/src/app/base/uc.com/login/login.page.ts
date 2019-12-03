import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Window } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { AuthenticationService } from 'app/base/base.ser/authentication.service';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

    // 定义控制器
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _window: DCore_Window,
        private _logininfo: Storage_LoginInfo,
        private authservice:AuthenticationService,
        private menuCtrl:MenuController
    ) {
    }
    // 定义模型
    mod = {
        username: '',
        password: '',
        apiurl: '',
        domainType: '',
        domain: '',
        pwshow:false//是否显示密码
    };

    //每次进入页面时，我们将初始化禁用侧滑菜单
    ionViewDidEnter() {   
        this.menuCtrl.enable(false);
    }
    // 初始化
    ngOnInit() {
        // 加入测试参数
        this.mod.username = 'subdevcrmadmin';
        this.mod.password = 'password01#';

        //this.mod.username = 'subuatcrmadmin';
        //this.mod.password = 'P@ssw0rd';

        this.mod.apiurl = '/api/User/GetAuthToken';
        this.mod.domainType = 'local';
        //var welcomeisloading= this._window.storageGet("welcomeisloading");
        //if(welcomeisloading==null || welcomeisloading==""){
        //    this._window.storageSet("welcomeisloading","true");
        //}
    }

    // 提交
    submit() {
        if (this.mod.username.length <= 0) {
            this._page.alert('消息提示', '请输入手机号码');
            return;
        }
        if (this.mod.password.length <= 0) {
            this._page.alert('消息提示', '请输入密码');
            return;
        }

        switch (this.mod.domainType) {
            case 'Dev':
                this.mod.domain = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Sit':
                this.mod.domain = "https://subcrmdevapi.sokon.com/dcem";
                break;
            case 'Uat':
                this.mod.domain = "https://subcrmuatapi.sokon.com/dcem";
                break;
            case 'Pro':
                this.mod.domain = "https://mscrm.sokon.com/dcem";
                break;
            case 'localhost':
                this.mod.domain = "https://localhost:44382";
                break;
            default:
                this.mod.domain = "http://localhost:9099";
                break;
        }

        this._window.storageSet("apiDomainUrl", this.mod.domain);


        this._page.loadingShow();
        this._http.get(
            this.mod.apiurl,
            {
                params: {
                    username: encodeURIComponent(this.mod.username),
                    password: encodeURIComponent(this.mod.password)
                }
            },
            (res: any) => {
                if (res.access_token == "") {
                   this._page.alert('消息提示', '登录认证失败');
                   this._page.loadingHide();
                   return false;
                }
                this._http.setToken(res.access_token,this.mod.username,this.mod.password);
                //登录实现
                //this.authservice.login(res.access_token);
                this._logininfo.SetInfo(JSON.stringify(res));
                this._page.loadingHide();
                this._page.alert('消息提示', '登录认证成功');
                this._page.goto("serving/home/tabs");
                //this.navCtr.navigateRoot('serving/home/tabs');
            },
            (err: any) => {
                this._page.loadingHide();
                //this._page.goto("serving/home/tabs");
                this._page.alert('消息提示', '登录认证失败');

            }
        );
    }

}
