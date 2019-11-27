import { Component, OnInit } from '@angular/core';  
import{ LoginComponent} from '../../../component/modal/login/login.component'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage {

    constructor( 
        private modalCtrl: ModalController,
        private activeRoute: ActivatedRoute) { }
//选择登陆窗口
async loginModal() {
    const modal = await this.modalCtrl.create({
        component: LoginComponent
    });
    await modal.present();
    //监听销毁的事件
    const { data } = await modal.onDidDismiss();
    if (data != null && data != undefined) {
         
    }
}
}
