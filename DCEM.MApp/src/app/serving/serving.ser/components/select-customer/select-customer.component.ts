import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent, IonInfiniteScroll, ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { SelectCustomerEditComponent } from 'app/serving/serving.ser/components/select-customer-edit/select-customer-edit.component';

@Component({
    selector: 'app-select-customer',
    templateUrl: './select-customer.component.html',
    styleUrls: ['./select-customer.component.scss'],
})
export class SelectCustomerComponent implements OnInit {

    @ViewChild(IonContent, null) ionContent: IonContent;
    @ViewChild(IonInfiniteScroll, null) ionInfiniteScroll: IonInfiniteScroll;

    mod = {
        apiUrl: '/Api/Vehowner/GetList',
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

    ngOnInit() {
        this.listOnBind();
    }

    itemClick(item: any) {
        this._modalCtrl.dismiss({
            vehowne: item
        });
    }

    dismissModal() {
        this._modalCtrl.dismiss({
        });
    }

    //下拉刷新
    doInfinite(event) {
        this.mod.searchData.pageindex = this.mod.searchData.pageindex + 1;
        this.listOnBind();
    }


    searchOnKeyup(event: any) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.mod.data = [];
            this.mod.searchData.pageindex = 1;
            this.ionInfiniteScroll.disabled = false;
            this.ionContent.scrollToTop(200);
            this.listOnBind();
        }
    }

    listOnBind() {

        if (this.mod.searchData.pageindex == 1)
            this._page.loadingShow();

        this._http.get(
            this.mod.apiUrl,
            {
                params: {
                    pageindex: this.mod.searchData.pageindex,
                    search: this.mod.searchData.search
                }
            },
            (res: any) => {
                if (!this._valid.isNull(res.Results) !== null && res.Results.length > 0) {
                    for (var key in res.Results) {

                        console.log(res.Results[key]);

                        var obj = {};
                        obj["vehownerid"] = res.Results[key]["Attributes"]["mcs_vehownerid"];
                        obj["fullname"] = res.Results[key]["Attributes"]["mcs_fullname"];
                        obj["gender"] = res.Results[key]["Attributes"]["mcs_gender"];
                        obj["genderformat"] = res.Results[key]["Attributes"]["mcs_gender@OData.Community.Display.V1.FormattedValue"];
                        obj["mobilephone"] = res.Results[key]["Attributes"]["mcs_mobilephone"];
                        obj["vehplate"] = res.Results[key]["Attributes"]["mcs_vehplate"];
                        obj["vehtype"] = res.Results[key]["Attributes"]["_mcs_vehtype_value@OData.Community.Display.V1.FormattedValue"];
                        obj["model"] = res.Results[key]["Attributes"];

                        obj["iscarserviceadvisor"] = true;
                        if (this._valid.isNullOrEmpty(res.Results[key]["Attributes"]["a_x002e_mcs_carserviceadvisorid"])) {
                            obj["iscarserviceadvisor"] = false;
                        }
                        console.log(obj["iscarserviceadvisor"]);



                        obj["gendercolor"] = "medium";
                        if (obj["gender"] === 1) {
                            obj["gendercolor"] = "primary";
                        }
                        else if (obj["gender"] === 2) {
                            obj["gendercolor"] = "danger";
                        }
                        else if (obj["gender"] === 3) {
                            obj["gendercolor"] = "medium";
                        }
                        this.mod.data.push(obj);
                    }

                }
                else {
                    this.ionInfiniteScroll.disabled = true;
                }

                if (this.mod.searchData.pageindex == 1)
                    this._page.loadingHide();
                this.ionInfiniteScroll.complete();

            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                if (this.mod.searchData.pageindex == 1)
                    this._page.loadingHide();
                this.ionInfiniteScroll.complete();
            }
        );
    }



    //新增编辑客户
    async presentCustomerEditModal(actionCode: string, guid?: string) {
        const modal = await this._modalCtrl.create({
            component: SelectCustomerEditComponent,
            componentProps: {
                'actionCode': actionCode,
                'guid': guid
            }
        });
        await modal.present();
        const { data } = await modal.onDidDismiss();
        this.mod.data = [];
        this.mod.searchData.pageindex = 1;
        this.mod.searchData.search = "";
        this.listOnBind();

    }

}
