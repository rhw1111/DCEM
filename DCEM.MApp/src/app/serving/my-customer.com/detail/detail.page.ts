﻿import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    mod = {
        apiUrl: '/Api/Customer/GetCustomerInfo',
        data: {
            vehowner: {
                fullname: "",
                idtype: "",
                identitycard: "",
                shuttlename: "",
                shuttlephone: "",
                name: "",
                enginennumber: "",
                vehtype: "",
                salesdate: "",
                prodtime: "",
                nextmaintainmileage: "",
                nextmaintainat: ""
            },
            customerfollowuplogArray: [],
            tagArray: []

        }
    };

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private activeRoute: ActivatedRoute
    ) {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                // this._page.alert("消息提示", params['id']);
                this.pageOnBind(params['id']);
            }
        });

    }

    ngOnInit() {

    }


    pageOnBind(id: any) {
        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrl,
            {
                params: {
                    guid: id,
                }
            },
            (res: any) => {
                if (res.Carserviceadvisor !== null) {
                    this.mod.data.vehowner.fullname = res["Vehowner"]["Attributes"]["mcs_fullname"];
                    this.mod.data.vehowner.idtype = res["Vehowner"]["Attributes"]["mcs_idtype@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.vehowner.identitycard = res["Vehowner"]["Attributes"]["mcs_identitycard"];
                    this.mod.data.vehowner.shuttlename = res["Vehowner"]["Attributes"]["mcs_shuttlename"];
                    this.mod.data.vehowner.shuttlephone = res["Vehowner"]["Attributes"]["mcs_shuttlephone"];
                    this.mod.data.vehowner.name = res["Vehowner"]["Attributes"]["mcs_name"];
                    this.mod.data.vehowner.enginennumber = res["Vehowner"]["Attributes"]["mcs_enginennumber"];
                    this.mod.data.vehowner.vehtype = res["Vehowner"]["Attributes"]["_mcs_vehtype_value@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.vehowner.salesdate = res["Vehowner"]["Attributes"]["mcs_salesdate@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.vehowner.prodtime = res["Vehowner"]["Attributes"]["mcs_prodtime@OData.Community.Display.V1.FormattedValue"];
                    this.mod.data.vehowner.nextmaintainmileage = res["Vehowner"]["Attributes"]["mcs_nextmaintainmileage"];
                    this.mod.data.vehowner.nextmaintainat = res["Vehowner"]["Attributes"]["mcs_nextmaintainat@OData.Community.Display.V1.FormattedValue"];
                }
                if (res.CustomerfollowuplogList != null) {

                    for (var key in res.CustomerfollowuplogList) {

                        var obj = {};
                        obj["remark"] = res.CustomerfollowuplogList[key]["Attributes"]["mcs_remark"];
                        obj["createdon"] = res.CustomerfollowuplogList[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
                        obj["createdby"] = res.CustomerfollowuplogList[key]["Attributes"]["_createdby_value@OData.Community.Display.V1.FormattedValue"];
                        this.mod.data.customerfollowuplogArray.push(obj);

                    }
                }
                if(res.TagList != null) {

                    for (var key in res.TagList) {
                        var obj = {};
                        obj["name"] = res.TagList[key]["Attributes"]["_mcs_taggroupid_value@OData.Community.Display.V1.FormattedValue"];
                        this.mod.data.tagArray.push(obj);

                    }
                }



                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }

}
