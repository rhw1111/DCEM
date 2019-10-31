import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Window } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';

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
        private _logininfo: Storage_LoginInfo
    ) {
    }
    // 定义模型
    mod = {
        username: '',
        password: '',
        apiurl: '',
        domainType: '',
        domain: ''
    };


    // 初始化
    ngOnInit() {
        // 加入测试参数
        this.mod.username = 'subdevcrmadmin';
        this.mod.password = 'password01#';
        this.mod.apiurl = '/api/Account/GetAuthToken';
        this.mod.domainType = 'local';
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
                this.mod.domain = "http://localhost:52151";
                break;
            default:
                this.mod.domain = "http://localhost:52151";
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
                debugger;
                var data = eval(res);
                this._logininfo.SetInfo(data);
               var vv= this._logininfo.GetToken();
 
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
