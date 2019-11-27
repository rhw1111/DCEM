import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectFileEditComponent } from 'app/serving/serving.ser/components/select-file-edit/select-file-edit.component';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';

@Component({
    selector: 'app-mywork',
    templateUrl: './mywork.page.html',
    styleUrls: ['./mywork.page.scss'],
})
export class MyworkPage implements OnInit {

    public UserInfo:any=null;
    constructor(private _modalCtrl: ModalController,
        private _userinfo: Storage_LoginInfo, ) { }

    ngOnInit() {
        this.UserInfo=this._userinfo.GetUserInfo();
    }

    async presentFileModal() {
        const modal = await this._modalCtrl.create({
            component: SelectFileEditComponent
        });
        await modal.present();

    }

}
