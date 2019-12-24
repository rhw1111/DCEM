import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute } from '@angular/router';
import { FullScreenImage } from '@ionic-native/full-screen-image';
import { MenuController } from '@ionic/angular';
let DetailPage = class DetailPage {
    constructor(_http, _page, activeRoute, menuController) {
        this._http = _http;
        this._page = _page;
        this.activeRoute = activeRoute;
        this.menuController = menuController;
        this.tab = "info";
        this.mod = {
            apiUrl: '/Api/tech-support/GetDetail',
            data: {
                TechnicalSupport: {
                    Id: "",
                    mcs_title: "",
                    mcs_orderstatus: null,
                    mcs_serviceorderid: "",
                    mcs_repairnameid: "",
                    mcs_repairdate: "",
                    mcs_email: "",
                    mcs_phone: "",
                    mcs_customername: "",
                    mcs_customerphone: "",
                    mcs_customerid: "",
                    mcs_carplate: "",
                    mcs_enginenumber: "",
                    mcs_mileage: "",
                    mcs_motormodel: "",
                    mcs_batteryserialnumber: "",
                    mcs_batterymodel: "",
                    mcs_ismodifiedparts: "",
                    mcs_modifiedpartscontent: "",
                    mcs_techsystem: "",
                    mcs_malfunctiontypeid: "",
                    mcs_malfunctiontypecontent: "",
                    mcs_diagnosiscontent: "",
                    mcs_replacedparts: "",
                    mcs_malfunctioncontent: "",
                },
                DealerAttachment: [],
                Warrantyattachment: []
            }
        };
    }
    //每次页面加载
    ionViewDidEnter() {
        this.menuController.enable(true);
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.mod.data.TechnicalSupport.Id = params['id'];
                this.pageOnBind(params['id']);
            }
        });
    }
    //下载
    showImage(url) {
        FullScreenImage.showImageURL(url)
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    }
    pageOnBind(id) {
        this._page.loadingShow();
        this._http.get(this.mod.apiUrl, {
            params: {
                id: id,
            }
        }, (res) => {
            if (res.TechnicalSupport != null) {
                this.mod.data.TechnicalSupport.mcs_title = res["TechnicalSupport"]["Attributes"]["mcs_title"];
                this.mod.data.TechnicalSupport.mcs_serviceorderid = res["TechnicalSupport"]["Attributes"]["_mcs_serviceorderid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_orderstatus = res["TechnicalSupport"]["Attributes"]["mcs_orderstatus"];
                this.mod.data.TechnicalSupport.mcs_repairnameid = res["TechnicalSupport"]["Attributes"]["_mcs_repairnameid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_repairdate = res["TechnicalSupport"]["Attributes"]["mcs_repairdate@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_email = res["TechnicalSupport"]["Attributes"]["mcs_email"];
                this.mod.data.TechnicalSupport.mcs_phone = res["TechnicalSupport"]["Attributes"]["mcs_phone"];
                this.mod.data.TechnicalSupport.mcs_customername = res["TechnicalSupport"]["Attributes"]["mcs_customername"];
                this.mod.data.TechnicalSupport.mcs_customerphone = res["TechnicalSupport"]["Attributes"]["mcs_customerphone"];
                this.mod.data.TechnicalSupport.mcs_customerid = res["TechnicalSupport"]["Attributes"]["_mcs_customerid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_carplate = res["TechnicalSupport"]["Attributes"]["mcs_carplate"];
                this.mod.data.TechnicalSupport.mcs_enginenumber = res["TechnicalSupport"]["Attributes"]["mcs_enginenumber"];
                this.mod.data.TechnicalSupport.mcs_mileage = res["TechnicalSupport"]["Attributes"]["mcs_mileage"];
                this.mod.data.TechnicalSupport.mcs_motormodel = res["TechnicalSupport"]["Attributes"]["mcs_motormodel"];
                this.mod.data.TechnicalSupport.mcs_batteryserialnumber = res["TechnicalSupport"]["Attributes"]["mcs_batteryserialnumber"];
                this.mod.data.TechnicalSupport.mcs_batterymodel = res["TechnicalSupport"]["Attributes"]["mcs_batterymodel"];
                this.mod.data.TechnicalSupport.mcs_ismodifiedparts = res["TechnicalSupport"]["Attributes"]["mcs_ismodifiedparts@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_modifiedpartscontent = res["TechnicalSupport"]["Attributes"]["mcs_modifiedpartscontent"];
                this.mod.data.TechnicalSupport.mcs_techsystem = res["TechnicalSupport"]["Attributes"]["mcs_techsystem@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_malfunctiontypeid = res["TechnicalSupport"]["Attributes"]["_mcs_malfunctiontypeid_value@OData.Community.Display.V1.FormattedValue"];
                this.mod.data.TechnicalSupport.mcs_malfunctiontypecontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctiontypecontent"];
                this.mod.data.TechnicalSupport.mcs_diagnosiscontent = res["TechnicalSupport"]["Attributes"]["mcs_diagnosiscontent"];
                this.mod.data.TechnicalSupport.mcs_replacedparts = res["TechnicalSupport"]["Attributes"]["mcs_replacedparts"];
                this.mod.data.TechnicalSupport.mcs_malfunctioncontent = res["TechnicalSupport"]["Attributes"]["mcs_malfunctioncontent"];
            }
            if (res.DealerAttachment != null) {
                for (var key in res.DealerAttachment) {
                    var obj = {};
                    obj["mcs_filename"] = res.DealerAttachment[key]["Attributes"]["mcs_filename"];
                    obj["mcs_filesize"] = res.DealerAttachment[key]["Attributes"]["mcs_filesize"];
                    obj["mcs_fileurl"] = res.DealerAttachment[key]["Attributes"]["mcs_fileurl"];
                    this.mod.data.DealerAttachment.push(obj);
                }
            }
            if (res.Warrantyattachment != null) {
                for (var key in res.Warrantyattachment) {
                    var obj = {};
                    obj["mcs_filename"] = res.Warrantyattachment[key]["Attributes"]["mcs_name"];
                    obj["mcs_filesize"] = res.Warrantyattachment[key]["Attributes"]["mcs_filesize"];
                    obj["mcs_fileurl"] = res.Warrantyattachment[key]["Attributes"]["mcs_fileurl"];
                    this.mod.data.Warrantyattachment.push(obj);
                }
            }
            this._page.loadingHide();
        }, (err) => {
            this._page.alert("消息提示", "数据加载异常");
            this._page.loadingHide();
        });
    }
};
DetailPage = tslib_1.__decorate([
    Component({
        selector: 'app-detail',
        templateUrl: './detail.page.html',
        styleUrls: ['./detail.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page,
        ActivatedRoute,
        MenuController])
], DetailPage);
export { DetailPage };
//# sourceMappingURL=detail.page.js.map