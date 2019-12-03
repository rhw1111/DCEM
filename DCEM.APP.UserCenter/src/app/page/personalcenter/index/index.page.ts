import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../../component/modal/login/login.component'
import { UserinfoComponent } from '../../../component/modal/userinfo/userinfo.component'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {

    public name: any = "登陆";
    constructor(
        private modalCtrl: ModalController,
        private _logininfo: Storage_LoginInfo,
        private activeRoute: ActivatedRoute) {
        if (this._logininfo.GetNickName() != null) {
            this.name = this._logininfo.GetNickName();
        }

    }
    //选择登陆窗口
    async loginModal() {
        if (this.name != "登陆") {
            const modal = await this.modalCtrl.create({
                component: UserinfoComponent 
            });
            await modal.present();
            //监听销毁的事件
            const { data } = await modal.onDidDismiss();
            if (data != null && data != undefined) { 
                this.name = this._logininfo.GetNickName(); 
            }
        } else {
            const modal = await this.modalCtrl.create({
                component: LoginComponent,
                componentProps: {
                    'status': 1//登陆页面状态 
                }
            });
            await modal.present();
            //监听销毁的事件
            const { data } = await modal.onDidDismiss();
            if (data != null && data != undefined) {
                if (data.login) {
                    this.name = this._logininfo.GetNickName();
                } else {
                    this.name = "登陆";
                }
            }
        }

    }
}
