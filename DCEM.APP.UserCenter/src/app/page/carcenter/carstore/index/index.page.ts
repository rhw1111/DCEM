import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalController, PopoverController, IonSlides, IonSlide, IonButton } from '@ionic/angular';
import { AnimationBuilder, Animation } from '@ionic/core';
import { SpeclistComponent } from 'app/page/carcenter/carstore/component/model/speclist/speclist.component';
import * as $ from 'jquery';
import { DCore_Http, DCore_Page, DCore_Valid, DCore_ShareData } from 'app/component/typescript/dcem.core';


@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['../component/scss/main.scss', './index.page.scss'],
})
export class IndexPage implements OnInit {

    @ViewChild('mainSlide', null) mainSlide: IonSlides;
    @ViewChild('ionbuttonNext', null) nextButton: IonButton;

    public mod: any = {
        apiUrl: 'api/Store/GetProductList',
        searchData: {
        },
        shareDataKey: "carstore",
        nextButtonColor: "dis",
    };

    public objectKeys = Object.keys;


    //共享数据对象
    public shareData = {
        productMap: {},                      //产品视图
        productClassViewMap: {},             //产品地图按照类别分组
        productImageViewMap: {},             //产品图片地图
        productSpecificationViewClassMap: {},     //产品规格地图  按照规格类别分组
        selectProductKey: "",           //选择的产品
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
        this.mod.nextButtonColor = "dis";
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        //this.initJQueryEvent();

        this.init();
    }


    public init() {
        var that: IndexPage = this;
        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey)
            if (!this._valid.isNullOrEmpty(this.shareData.selectProductKey)) {

                this.nextButton.color = "org";

                //$(document).ready(function () {
                //    //$("#carcenter_carstore_index_main").find(".dm-main-car[proKey='" + that.shareData.selectProductKey + "']").addClass("select");
                //    $("#but_next").attr("color", "org");
                //})
            }
        } else {
            this.initShareData();
        }

    }

    //JQuery事件初始化
    //public initJQueryEvent() {
    //    var that: IndexPage = this;
    //    $("#carcenter_carstore_index_main").on("click", ".dm-main-car-top,.dm-main-car-middle", function () {
    //        $(".dm-main-car").removeClass("select");
    //        $(this).parents(".dm-main-car").addClass("select");
    //        $("#but_next").attr("color", "org");
    //        var productKey = $(this).parents(".dm-main-car").attr("proKey");
    //        that.shareData.selectProductKey = productKey;
    //        that.shareData.packageMoney = that.shareData.productMap[productKey]["ProductInfo"]["mcs_baseprice"];

    //        that.shareData.packageMap["product"] = {};
    //        that.shareData.packageMap["product"]["text"] = that.shareData.productMap[productKey]["ProductInfo"]["mcs_name"];
    //        that.shareData.packageMap["product"]["val"] = that.shareData.productMap[productKey]["ProductInfo"]["mcs_baseprice"] + "元";
    //        that.shareData.packageMap["product"]["money"] = that.shareData.productMap[productKey]["ProductInfo"]["mcs_baseprice"];

    //        that._shareData.set(that.mod.shareDataKey, that.shareData);

    //    })
    //}

    //共享数据初始化
    public initShareData() {
        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrl,
            this.mod.searchData,
            (res: any) => {
                console.log(res);
                let that: IndexPage = this;
                if (!this._valid.isNull(res) && !this._valid.isNull(res["ProductList"])) {
                    for (var product of res["ProductList"]) {
                        //解析接收对象
                        var productInfo = product["ProductInfo"];
                        var productImageArray = product["ProductImageArray"];
                        var productSpecificationArray = product["ProductSpecificationArray"];
                        var productPriceArray = product["ProductPriceArray"];

                        //组装数据类型
                        //if (productInfo["mcs_type"] === 1 && productPriceArray.length > 0) {

                        var productKey = productInfo["mcs_tc_productid"];

                        //组装产品地图
                        let asseProductMap = function () {
                            that.shareData.productMap[productKey] = product;
                        }();
                        //组装产品类别和规格地图
                        let asseProductClassViewMap = function () {
                            if (productInfo["mcs_type"] === 1 && productPriceArray.length > 0) {
                                var productClassKey = productInfo["_mcs_salescategory_value"];
                                if (that._valid.isNull(that.shareData.productClassViewMap[productClassKey])) {
                                    var productClassName = productInfo["_mcs_salescategory_value@OData.Community.Display.V1.FormattedValue"];
                                    that.shareData.productClassViewMap[productClassKey] = {};
                                    that.shareData.productClassViewMap[productClassKey]["productClassName"] = productClassName;
                                    that.shareData.productClassViewMap[productClassKey]["productMap"] = {};
                                }
                                that.shareData.productClassViewMap[productClassKey]["productMap"][productKey] = {};
                                for (var productSpecification of productSpecificationArray) {
                                    if (productSpecification["mcs_attributename"] === "驱动形式")
                                        that.shareData.productClassViewMap[productClassKey]["productMap"][productKey]["ext_qdxs_val"] = productSpecification["mcs_attributevalue"];
                                    if (productSpecification["mcs_attributename"] === "电池容量")
                                        that.shareData.productClassViewMap[productClassKey]["productMap"][productKey]["ext_dcrl_val"] = productSpecification["mcs_attributevalue"];
                                    if (productSpecification["mcs_attributename"] === "百公里加速")
                                        that.shareData.productClassViewMap[productClassKey]["productMap"][productKey]["ext_bgljs_val"] = productSpecification["mcs_attributevalue"];

                                    //组装产品规格 按类别进行分组
                                    let asseProductSpecificationViewClassMap = function () {
                                        var productSpecificationClassKey = productSpecification["mcs_attributegroupindex"];
                                        var productSpecificationClassName = productSpecification["mcs_attributegroupname"];
                                        if (that._valid.isNull(that.shareData.productSpecificationViewClassMap[productKey])) {
                                            that.shareData.productSpecificationViewClassMap[productKey] = {};
                                        }
                                        if (that._valid.isNull(that.shareData.productSpecificationViewClassMap[productKey][productSpecificationClassKey])) {
                                            that.shareData.productSpecificationViewClassMap[productKey][productSpecificationClassKey] = {};
                                            that.shareData.productSpecificationViewClassMap[productKey][productSpecificationClassKey]["productSpecificationClassName"] = productSpecificationClassName;
                                            that.shareData.productSpecificationViewClassMap[productKey][productSpecificationClassKey]["productSpecificationArray"] = [];
                                        }
                                        that.shareData.productSpecificationViewClassMap[productKey][productSpecificationClassKey]["productSpecificationArray"].push(productSpecification);
                                    }();
                                }


                                //组装产品图片
                                let asseProductClassImage = function () {
                                    for (var productImage of productImageArray) {
                                        //if (that.objectKeys(that.shareData.productImageViewMap).length > 4)
                                        //    break;
                                        if (productImage["mcs_imagetype"] === 2) {
                                            var productImageKey = productImage["mcs_tc_productimageid"];
                                            that.shareData.productImageViewMap[productImageKey] = productImage;
                                        }
                                    }
                                }();
                            }
                        }();
                   
                        //}
                    }

                    console.log(this.shareData);
                    this._shareData.set(this.mod.shareDataKey, this.shareData);
                }
                else {

                    this._page.alert("消息提示", "数据加载异常");
                }
                this._page.loadingHide();

            },
            (err: any) => {
                console.log(err);
                this._page.loadingHide();
                this._page.alert("消息提示", "数据加载异常");
            }
        );
    }


    //选择的事件
    public itemOnClick(proKey) {

        delete this.shareData["productOrderingattributeMap"];
        delete this.shareData["productRelatedMap"];

        this.shareData.selectProductKey = proKey;
        this.shareData.selectProduct = this.shareData.productMap[proKey];

        this.shareData.packageMoney = this.shareData.productMap[proKey]["ProductInfo"]["mcs_baseprice"];
        this.shareData.packageMap = {};
        this.shareData.packageMap["product"] = {};
        this.shareData.packageMap["product"]["text"] = this.shareData.productMap[proKey]["ProductInfo"]["mcs_name"];
        this.shareData.packageMap["product"]["val"] = this.shareData.productMap[proKey]["ProductInfo"]["mcs_baseprice"] + "元";
        this.shareData.packageMap["product"]["money"] = this.shareData.productMap[proKey]["ProductInfo"]["mcs_baseprice"];
        this.shareData.packageMap["product"]["type"] = "product";
        this.shareData.packageMap["product"]["id"] = proKey;

        // this.mod.nextButtonColor = "org";
        this.nextButton.color = "org";
        //$("#but_next").attr("color", "org");

        console.log(this.shareData.selectProduct);

    }


    //下一步
    public onNext() {
        if (this._valid.isNullOrEmpty(this.shareData.selectProductKey)) {
            this._page.presentToastError("请先选择购买车型");
            return;
        }
        this._page.navigateRoot("/carcenter/carstore/selectattr", null, null);
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
