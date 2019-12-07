import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, NavParams, IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-speclist',
    templateUrl: './speclist.component.html',
    styleUrls: ['./speclist.component.scss'],
})
export class SpeclistComponent implements OnInit {

    public mod: any = {
        selectProductMap: {},
        selectProductSpecificationViewClassMap: {}
    };

    public objectKeys = Object.keys;
    constructor(
        private _modalCtrl: ModalController,
        private _navParams: NavParams

    ) {
        this.mod.selectProductMap = this._navParams.get('selectProductMap');
        this.mod.selectProductSpecificationViewClassMap = this._navParams.get('selectProductSpecificationViewClassMap');
    }

    ngOnInit() {

    }

    closeModal() {
        this._modalCtrl.dismiss({
        });
    }
}
