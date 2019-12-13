import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../../component/modal/login/login.component'
import { UserinfoComponent } from '../../../component/modal/userinfo/userinfo.component'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
import { DCore_Page } from '../../../component/typescript/dcem.core';
@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {
 
    constructor(
        private modalCtrl: ModalController,
        public _logininfo: Storage_LoginInfo,
        private route: Router,
        private _page: DCore_Page,
        private activeRoute: ActivatedRoute) { 
        //跳转参数  
        this.activeRoute.queryParams.subscribe((params: Params) => { 
        }); 
    }
    ngOnInit() { 
    }
    //选择登录窗口
    async loginModal() {
        if (this._logininfo.GetNickName()!=null) {
            /*
            const modal = await this.modalCtrl.create({
                component: UserinfoComponent
            });
            await modal.present();
            //监听销毁的事件
            const { data } = await modal.onDidDismiss();
            if (data != null && data != undefined) {
                this.name = this._logininfo.GetNickName();
            }
            */
            this._page.goto("/personalcenter/userinfo/detail");
        } else {
            const modal = await this.modalCtrl.create({
                component: LoginComponent,
                componentProps: {
                    'status': 1//登录页面状态 
                }
            });
            await modal.present();
            //监听销毁的事件
            const { data } = await modal.onDidDismiss();
            
        }

    } 
    //检查是否登陆 然后跳转
    async checkLoginAndTurn(url)
    {
        if (this._logininfo.GetNickName()!=null) { 
            this._page.goto(url);
        } else {
            const modal = await this.modalCtrl.create({
                component: LoginComponent,
                componentProps: {
                    'status': 1//登录页面状态 
                }
            });
            await modal.present();
            //监听销毁的事件
            const { data } = await modal.onDidDismiss(); 
        } 
    }
}
