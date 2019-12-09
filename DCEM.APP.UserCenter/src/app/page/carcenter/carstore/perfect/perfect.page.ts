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

    public mod = {
        shareDataKey: "carstore",
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
        buyingMode: 1,//������ʽ
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
            if (this._valid.isNull(this.shareData.userInfo)) {
                this.initShareData();
            }
        } else {
            this._page.navigateRoot("/carcenter/carstore/index", null, "back");
        }
    }

    public initShareData() {
        this.shareData.userInfo = {};
        this.shareData.buyingMode = 1;
    }


    //��һ��
    public onNext() {
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.navigateRoot("/carcenter/carstore/payment", null, null);
    }

    //����ʽ
    public onBuyingModeClikc(buyingMode: number) {
        this.shareData.buyingMode = buyingMode;
    }

}
