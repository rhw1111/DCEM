import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

    // 定义控制器
    constructor(
        private alertCtr: AlertController,
        private loadingCtr: LoadingController,
        private navCtr: NavController,
        private httpClient: HttpClient,
    ) {
    }
    // 定义模型
    mod = {
        username: '',
        password: ''
    };

    apiurl = '';

    // 初始化
    ngOnInit() {
        // 加入测试参数
        this.mod.username = 'subdevcrmadmin';
        this.mod.password = 'password01#';
        this.apiurl = 'https://subcrmdevapi.sokon.com/dcem/api/Account/GetAuthToken';
    }

    // 提交
    submit() {
        if (this.mod.username.length <= 0) {
            this.presentAlert('消息提示', '请输入手机号码');
            return;
        }
        if (this.mod.password.length <= 0) {
            this.presentAlert('消息提示', '请输入密码');
            return;
        }

        this.httpGet();
    }

    // http请求
    httpGet() {
        const loading = this.loadingCtr.create({ translucent: false });
        loading.then(a => { a.present(); });
        const httpGet = this.httpClient.get(this.apiurl,
            {
                params: {
                    username: encodeURIComponent(this.mod.username),
                    password: encodeURIComponent(this.mod.password)
                }
            });

        httpGet.subscribe(
            (res: any) => {
                if (res.access_token === null || res.access_token === '') {
                    this.presentAlert('消息提示', '登录认证失败');
                } else {
                    /* this.presentAlert('消息提示', 'token:' + res.access_token);
                    this.presentAlert('消息提示', '登录认证通过'); */
                    this.navCtr.navigateRoot('serving/home/tabs');
                }
                loading.then(a => { a.dismiss(); });
            },
            (err: any) => {
                this.presentAlert('消息提示', '登录认证失败');
                loading.then(a => { a.dismiss(); });
            });
    }

    // 弹出提示
    presentAlert(header: any, message: any) {
        const alert = this.alertCtr.create({
            header,
            message,
            buttons: ['确定']
        });
        alert.then(a => {
            a.present();
        });
    }
}
