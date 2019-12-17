import { Component } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import { ModalController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { LoginComponent } from 'app/component/modal/login/login.component'
import { Storage_LoginInfo } from 'app/component/typescript/logininfo.storage';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    public routername="/";

    constructor(
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData,
        private _modalCtrl: ModalController,
        private _storage_LoginInfo: Storage_LoginInfo) { }

    validateLogin() {
        var that = this;
        if (this._valid.isNullOrEmpty(this._storage_LoginInfo.GetSystemUserId())) {
            this.routername="/";
            that.presentLoginModal();
            return;
        }
        else{
            this.routername="message";
        }
    }

    //用户登录
    public async presentLoginModal() {
        const modal = await this._modalCtrl.create({
            component: LoginComponent,
            componentProps: {
                'status': 1
            }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
    }
}
