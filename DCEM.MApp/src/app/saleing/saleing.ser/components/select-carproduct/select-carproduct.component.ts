import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-select-carproduct',
    templateUrl: './select-carproduct.component.html'
})
export class SelectCarproductComponent implements OnInit {

    mod = {
        //apiUrl: '/api/Store/GetProductList',
        apiUrl: '/assets/json/carproduct.json',
        data: [],
        searchData: {
            pageindex: 1,
            search: ""
        },
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _valid: DCore_Valid,
        private _modalCtrl: ModalController,
        private _navCtr: NavController,
    ) {

    }

    public shareData = {
        productMap: {},                            //产品视图
    }

    ngOnInit() {
        this.listOnBind();
    }

    itemClick(item: any) {
        this._modalCtrl.dismiss({
            product: item
        });
    }

    dismissModal() {
        this._modalCtrl.dismiss({
        });
    }

    listOnBind() {




        if (this.mod.searchData.pageindex == 1)
            this._page.loadingShow();

        this._http.getBase(
            this.mod.apiUrl,
            {
            },
            (res: any) => {
                let that: SelectCarproductComponent = this;
                if (!this._valid.isNull(res.ProductList) !== null && res.ProductList.length > 0) {
                    //组装产品地图
                    for (var key in res.ProductList) {
                        let asseProductMap = function () {
                            var productInfo = res.ProductList[key]["ProductInfo"];
                            var productKey = productInfo["mcs_tc_productid"];
                            that.shareData.productMap[productKey] = res.ProductList[key];
                        }();
                    }

                    for (var key in res.ProductList) {

                        if (res.ProductList[key]["ProductInfo"]["mcs_type"] === 1 && res.ProductList[key]["ProductPriceArray"].length > 0) {
                            //加入商品关系的产品信息
                            var productRelatedArray = res.ProductList[key]["ProductRelatedArray"];
                            for (var relKey in productRelatedArray) {
                                var productKey = productRelatedArray[relKey]["a.mcs_product"];
                                if (!this._valid.isNull(this.shareData.productMap[productKey])) {
                                    productRelatedArray[relKey]["Product"] = this.shareData.productMap[productKey];
                                }
                            }
                            this.mod.data.push(res.ProductList[key]);
                        }
                    }
                }
                else {
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                if (this.mod.searchData.pageindex == 1)
                    this._page.loadingHide();
            }
        );
    }
}
