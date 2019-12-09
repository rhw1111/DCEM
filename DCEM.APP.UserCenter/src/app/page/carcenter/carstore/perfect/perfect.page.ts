import { Component, OnInit, ViewChild } from '@angular/core';
import { IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';

@Component({
    selector: 'app-perfect',
    templateUrl: './perfect.page.html',
    styleUrls: ['./perfect.page.scss'],
})
export class PerfectPage implements OnInit {

    public mod: any = {
        shareDataKey: "carstore"
    };

    public objectKeys = Object.keys;

    //�������ݶ���
    public shareData = {
        productMap: {},                            //��Ʒ��ͼ
        productRelatedMap: {},                     //��Ʒ������ͼ
        productOrderingattributeMap: {},           //��Ʒ�Ķ�������
        selectProductKey: "",                       //ѡ��Ĳ�ƷKey
        selectProduct: {
            ProductInfo: {
            }
        },                          //ѡ��Ĳ�Ʒ   
        selectproductRelatedMap: {},
        selectproductOrderingattributeMap: {},
        packageMoney: 0,                            //ѡ������ж�����
        packageMap: {},                             //ѡ������ж���
        userInfo: {   //�û���Ϣ
        },
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData
    ) {

    }


    ngOnInit() {
    }

    ionViewWillEnter() {
        this.init();
    }

    public init() {
        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
            //}
        } else {
            this._page.navigateRoot("/carcenter/carstore/index", null, "back");
        }
    }





}
