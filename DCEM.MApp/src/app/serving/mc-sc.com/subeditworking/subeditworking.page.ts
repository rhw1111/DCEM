import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectRepairitemComponent } from 'app/serving/serving.ser/components/select-repairitem/select-repairitem.component';

@Component({
    selector: 'app-subeditworking',
    templateUrl: './subeditworking.page.html',
    styleUrls: ['./subeditworking.page.scss'],
})
export class SubeditworkingPage implements OnInit {

    constructor(private _modalCtrl: ModalController) { }

    ngOnInit() {
    }

    dismissModal() {
        this._modalCtrl.dismiss({
        });
    }

    //选择维修配件
    async presentWorkingModal() {
        const modal = await this._modalCtrl.create({
            component: SelectRepairitemComponent
        });
        await modal.present();
    }
}
