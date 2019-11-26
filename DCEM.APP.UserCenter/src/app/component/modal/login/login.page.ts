import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

    // 定义控制器
    constructor(

    ) {
    }
    // 定义模型
    mod = {
        username: '',
        password: '',
        apiurl: '',
        domainType: '',
        domain: '',
        pwshow: false//是否显示密码
    };


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

            return;
        }
        if (this.mod.password.length <= 0) {

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

    }

}
