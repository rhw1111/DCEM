import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, NavParams, IonInfiniteScroll } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import { debug } from 'util';

@Component({
    selector: 'app-speclist',
    templateUrl: './speclist.component.html',
    styleUrls: ['./speclist.component.scss'],
})
export class SpeclistComponent implements OnInit {

    public mod: any = {
        selectProductMap: {},
        selectProductSpecificationViewClassMap: {},
        selectRightspackageViewClassMap: {}
    };

    public objectKeys = Object.keys;
    constructor(
        private _modalCtrl: ModalController,
        private _navParams: NavParams,
        private _valid: DCore_Valid,

    ) {

        this.mod.selectProductMap = this._navParams.get('selectProductMap');


        //规格型号分组
        for (var productSpecification of this.mod.selectProductMap["ProductSpecificationArray"]) {

            var key = productSpecification["mcs_attributegroupindex"];
            var name = productSpecification["mcs_attributegroupname"];
            if (this._valid.isNull(this.mod.selectProductSpecificationViewClassMap[key])) {
                this.mod.selectProductSpecificationViewClassMap[key] = {};
                this.mod.selectProductSpecificationViewClassMap[key]["productSpecificationClassName"] = name;
                this.mod.selectProductSpecificationViewClassMap[key]["productSpecificationArray"] = [];
            }
            this.mod.selectProductSpecificationViewClassMap[key]["productSpecificationArray"].push(productSpecification);
            //this.mod.selectProductSpecificationViewClassMap = this._navParams.get('selectProductSpecificationViewClassMap');

        }

        //权益包分组
        for (var ProductRightspackage of this.mod.selectProductMap["ProductRightspackageArray"]) {

            var key = ProductRightspackage["RightspackageInfo"]["mcs_rc_rightspackageid"];
            if (this._valid.isNull(this.mod.selectRightspackageViewClassMap[key])) {
                this.mod.selectRightspackageViewClassMap[key] = ProductRightspackage;
            }
        }

        console.log(this.mod.selectRightspackageViewClassMap);
    }

    ngOnInit() {

    }

    closeModal() {
        this._modalCtrl.dismiss({
        });
    }
}
