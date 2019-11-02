import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectPartsComponent } from 'app/serving/serving.ser/components/select-parts/select-parts.component';
@Component({
    selector: 'app-subeditpart',
    templateUrl: './subeditpart.page.html',
    styleUrls: ['./subeditpart.page.scss'],
})
export class SubeditpartPage implements OnInit {

    constructor(private _modalCtrl: ModalController) { }

    ngOnInit() {
    }

    dismissModal() {
        this._modalCtrl.dismiss({
        });
    }

    //选择维修配件
    async presentPartModal() {
        const modal = await this._modalCtrl.create({
            component: SelectPartsComponent
        });
        await modal.present();
    }


}
