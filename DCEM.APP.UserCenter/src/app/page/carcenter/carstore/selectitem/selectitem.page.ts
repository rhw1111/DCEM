import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonBackButton, IonBackButtonDelegate } from '@ionic/angular';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';
import { SpeclistComponent } from 'app/page/carcenter/carstore/component/model/speclist/speclist.component';
import { AnimationBuilder, Animation } from '@ionic/core';

@Component({
    selector: 'app-selectitem',
    templateUrl: './selectitem.page.html',
    styleUrls: ['./selectitem.page.scss'],
})
export class SelectitemPage implements OnInit {

    @ViewChild(IonBackButton, null) ionBackButton: IonBackButton;
    @ViewChild(IonBackButtonDelegate, null) ionBackButtonDelegate: IonBackButtonDelegate;

    public mod: any = {
        shareDataKey: "carstore"
    };


    public objectKeys = Object.keys;

    //共享数据对象
    public shareData = {
        productMap: {},                            //产品视图
        productRelatedMap: {},                     //商品关联视图
        productSpecificationViewClassMap: {},
        selectProductKey: "",                       //选择的产品Key
        selectProduct: {},                          //选择的产品      
        packageMoney: 0,                            //选择的所有对象金额
        packageMap: {},                             //选择的所有对象
    }

    constructor(
        private _modalCtrl: ModalController,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _shareData: DCore_ShareData
    ) {
    }

    ngOnInit() {

        this.shareData.productRelatedMap = {};
        //this.initJQueryEvent();

        //const that = this;
        //this.ionBackButtonDelegate.onClick = function (event) {
        //    $("#carcenter_carstore_selectitem_footer").find(".dm-footer-svg").removeClass("open");
        //    $("#carcenter_carstore_selectitem_footer_model").removeClass("open");
        //    that._page.navigateRoot("/carcenter/carstore/selectattr", null, "back");
        //}
    }

    ionViewWillEnter() {
        this.init();
    }

    public init() {

        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
            if (this._valid.isNull(this.shareData.productRelatedMap)) {
                this.initShareData();
            }
        } else {
            this._page.navigateRoot("/carcenter/carstore/index", null, "back");
        }
    }

    public initShareData() {
        //初始化
        this.shareData = this._shareData.get(this.mod.shareDataKey);
        //基础地图
        this.shareData.productRelatedMap = {};
        for (var productRelated of this.shareData.selectProduct["ProductRelatedArray"]) {
            var productRelatedKey = productRelated["mcs_tc_productrelatedid"];
            //基础地图组装
            this.shareData.productRelatedMap[productRelatedKey] = productRelated;
            this.shareData.productRelatedMap[productRelatedKey]["ext_select"] = false;


            this.shareData.productRelatedMap[productRelatedKey]["ext_moneyFormat"] = "价格已包含";
            if (!this._valid.isNullOrEmpty(productRelated["a.mcs_salesprice"])) {
                if (productRelated["a.mcs_salesprice"] > 0) {

                    this.shareData.productRelatedMap[productRelatedKey]["ext_moneyFormat"] = "+" + productRelated["a.mcs_salesprice"] + "元";
                }
            }

        }
        this._shareData.set(this.mod.shareDataKey, this.shareData);
    }


    public initJQueryEvent() {
        var that: SelectitemPage = this;

        //底部的事件
        //$("#carcenter_carstore_selectitem_footer").on("click", ".dm-footer-svg", function () {
        //    if ($(this).hasClass("open")) {
        //        $(this).removeClass("open");
        //        $(this).addClass("close");
        //        $("#carcenter_carstore_selectitem_footer_model").removeClass("open");
        //        $("#carcenter_carstore_selectitem_footer_model").addClass("close");
        //    }
        //    else {
        //        $(this).removeClass("close");
        //        $(this).addClass("open");
        //        $("#carcenter_carstore_selectitem_footer_model").removeClass("close");
        //        $("#carcenter_carstore_selectitem_footer_model").addClass("open");
        //    }
        //});

    }

    public itemOnClick(proRelatedKey) {
        console.log(proRelatedKey);

        if (this.shareData.productRelatedMap[proRelatedKey]["ext_select"]) {
            this.shareData.productRelatedMap[proRelatedKey]["ext_select"] = false;
            delete this.shareData.packageMap[proRelatedKey];
        }
        else {
            this.shareData.productRelatedMap[proRelatedKey]["ext_select"] = true;
            this.shareData.packageMap[proRelatedKey] = {};
            this.shareData.packageMap[proRelatedKey]["text"] = this.shareData.productRelatedMap[proRelatedKey]['a.mcs_product@OData.Community.Display.V1.FormattedValue'] + "(" + this.shareData.productRelatedMap[proRelatedKey]['a.mcs_name'] + ")";
            this.shareData.packageMap[proRelatedKey]["val"] = "价格已包含";
            this.shareData.packageMap[proRelatedKey]["money"] = this.shareData.productRelatedMap[proRelatedKey]["a.mcs_salesprice"];
            this.shareData.packageMap[proRelatedKey]["type"] = "productRelated";
            this.shareData.packageMap[proRelatedKey]["id"] = proRelatedKey;
            if (this.shareData.productRelatedMap[proRelatedKey]["a.mcs_salesprice"] > 0) {
                this.shareData.packageMap[proRelatedKey]["val"] = this.shareData.productRelatedMap[proRelatedKey]["a.mcs_salesprice"] + "元";
            }
        }

        this.shareData.packageMoney = 0;
        for (var key in this.shareData.packageMap) {
            this.shareData.packageMoney += this.shareData.packageMap[key]["money"];
        }
        this._shareData.set(this.mod.shareDataKey, this.shareData);
    }

    public showfooterModelClick() {
        if ($("#carcenter_carstore_selectitem_footer").find(".dm-footer-svg").hasClass("open")) {
            $("#carcenter_carstore_selectitem_footer").find(".dm-footer-svg").removeClass("open");
            $("#carcenter_carstore_selectitem_footer").find(".dm-footer-svg").addClass("close");
            $("#carcenter_carstore_selectitem_footer_model").removeClass("open");
            $("#carcenter_carstore_selectitem_footer_model").addClass("close");
        }
        else {
            $("#carcenter_carstore_selectitem_footer").find(".dm-footer-svg").removeClass("close");
            $("#carcenter_carstore_selectitem_footer").find(".dm-footer-svg").addClass("open");
            $("#carcenter_carstore_selectitem_footer_model").removeClass("close");
            $("#carcenter_carstore_selectitem_footer_model").addClass("open");
        }
    }


    //弹出规格型号
    public async presentSpeclistModal(productKey) {
        let animatStart: AnimationBuilder = (AnimationClass: Animation, baseEl: ShadowRoot, position: string): Promise<Animation> => {
            const hostEl = (baseEl.host || baseEl) as HTMLElement;
            const baseAnimation: Animation = new AnimationClass();
            hostEl.style.height = "100%";

            const wrapperEl = baseEl.querySelector('.modal-wrapper') as HTMLElement;  //主区域
            const wrapperAnimation: Animation = new AnimationClass();
            wrapperEl.style.height = "80%";
            wrapperAnimation.fromTo('transform', 'translateY(100%)', 'translateY(20%)');
            wrapperAnimation.addElement(wrapperEl);

            var backdropEl = baseEl.querySelector('ion-backdrop') as HTMLElement;  //背景
            const backdropAnimation: Animation = new AnimationClass();
            backdropAnimation.fromTo('opacity', 0.01, 0.5);
            backdropAnimation.addElement(backdropEl);

            //baseAnimation.fromTo('transform', 'translateY(0%)', 'translateY(0%)');  //主层
            baseAnimation.duration(400);
            baseAnimation.addElement(hostEl);
            baseAnimation.add(wrapperAnimation);
            baseAnimation.add(backdropAnimation);

            return Promise.resolve(baseAnimation);
        }

        let animatEnd: AnimationBuilder = (AnimationClass: Animation, baseEl: ShadowRoot, position: string): Promise<Animation> => {

            const hostEl = (baseEl.host || baseEl) as HTMLElement;
            const baseAnimation: Animation = new AnimationClass();

            const wrapperEl = baseEl.querySelector('.modal-wrapper') as HTMLElement;  //主区域
            const wrapperAnimation: Animation = new AnimationClass();
            wrapperAnimation.fromTo('transform', 'translateY(20%)', 'translateY(100%)');
            wrapperAnimation.addElement(wrapperEl);

            var backdropEl = baseEl.querySelector('ion-backdrop') as HTMLElement;  //背景
            const backdropAnimation: Animation = new AnimationClass();
            backdropAnimation.fromTo('opacity', 0.5, 0);
            backdropAnimation.addElement(backdropEl);

            baseAnimation.fromTo('transform', 'translateY(0%)', 'translateY(100%)');  //主层
            baseAnimation.duration(400);
            baseAnimation.addElement(hostEl);
            baseAnimation.add(wrapperAnimation);
            baseAnimation.add(backdropAnimation);

            return Promise.resolve(baseAnimation);
        }

        const modal = await this._modalCtrl.create({
            component: SpeclistComponent,
            //cssClass: "dm-model",
            enterAnimation: animatStart, //进入动画
            leaveAnimation: animatEnd,   //离开动画
            componentProps: {
                selectProductMap: this.shareData.productMap[productKey],
                selectProductSpecificationViewClassMap: this.shareData.productSpecificationViewClassMap[productKey]
            }
        });

        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
        }
    }
}
