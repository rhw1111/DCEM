import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectFileEditComponent } from 'app/serving/serving.ser/components/select-file-edit/select-file-edit.component';
@Component({
    selector: 'app-mywork',
    templateUrl: './mywork.page.html',
    styleUrls: ['./mywork.page.scss'],
})
export class MyworkPage implements OnInit {

    constructor(private _modalCtrl: ModalController, ) { }

    ngOnInit() {
    }

    //—°‘ÒŒ¨–ﬁ¿‡–Õ
    async presentFileModal() {
        const modal = await this._modalCtrl.create({
            component: SelectFileEditComponent
        });
        await modal.present();

    }

}
