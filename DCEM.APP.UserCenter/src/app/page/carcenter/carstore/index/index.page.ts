import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalController, PopoverController, IonSlides, IonSlide } from '@ionic/angular';
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

    public mod: any = {
        apiUrl: 'api/product/All',
        data: {},
        searchData: {
            type: 2,
            pageindex: 1,
            search: ""
        },
    };

    public objectKeys = Object.keys;

    //共享数据对象
    shareData = {
        productClassMap: {},     //储存商品的对象(按类别分组)  
        productTopPic: {},       //储存商品顶部图片的对象
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
        this.setProductShareData();
    }

    public setProductShareData() {
        this._page.loadingShow();
        this._http.postForShopping(
            this.mod.apiUrl,
            this.mod.searchData,
            (res: any) => {

                if (!this._valid.isNull(res) && !this._valid.isNull(res["Datas"])) {
                    var imgHost = "https://ceo-oss.oss-cn-hangzhou.aliyuncs.com/";

                    for (var key in res.Datas) {
                        //组装整车的列表地图
                        if (res.Datas[key]["ProductType"] === 1) {
                            //组装按产品分类的商品地图
                            var product = res.Datas[key];
                            var productKey = product["Code"];
                            var frontCategorys = { ProductCategoryCode: -100, Name: "其它" }
                            var productClassKey = frontCategorys.ProductCategoryCode;
                            if (this._valid.isArray(product.FrontCategorys) && product.FrontCategorys.length > 0) {
                                productClassKey = product.FrontCategorys[0].ProductCategoryCode;
                                frontCategorys = product.FrontCategorys[0];
                            }

                            if (this._valid.isNull(this.shareData.productClassMap[productClassKey])) {
                                this.shareData.productClassMap[productClassKey] = {};
                                this.shareData.productClassMap[productClassKey]["productMap"] = {};
                                this.shareData.productClassMap[productClassKey]["frontCategorys"] = frontCategorys;
                            }
                            this.shareData.productClassMap[productClassKey]["productMap"][productKey] = product;

                            //组装顶部图片地图
                            if (this._valid.isArray(product.ImageData) && product.ImageData.length > 0) {
                                for (var pickey in product.ImageData) {
                                    if (this.objectKeys(this.shareData.productTopPic).length > 5)
                                        break;
                                    if (product.ImageData[pickey]["Category"] === 2)
                                        this.shareData.productTopPic[pickey] = { url: imgHost + product.ImageData[pickey]["Name"] };
                                }
                            }

                        }
                    }

                    this._shareData.set("aa", this.shareData);
                    console.log(this._shareData.get("aa"));
                }
                else {

                    this._page.alert("消息提示", "数据加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.loadingHide();
                this._page.alert("消息提示", "数据加载异常");
            }
        );
    }


    //弹出规格型号
    async presentSpeclistModal() {

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
            leaveAnimation: animatEnd   //离开动画

        });

        await modal.present();
        const { data } = await modal.onDidDismiss();
        if (data != null && typeof data != "undefined") {
        }
    }

}
