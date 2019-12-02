import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, NavParams, IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-speclist',
    templateUrl: './speclist.component.html',
    styleUrls: ['./speclist.component.scss'],
})
export class SpeclistComponent implements OnInit {

    constructor(
        private _modalCtrl: ModalController
    ) { }

    ngOnInit() { }

    closeModal() {
        this._modalCtrl.dismiss({
        });
    }
}
