import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData } from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-edit2',
    templateUrl: './edit2.page.html',
    styleUrls: ['./edit2.page.scss'],
})
export class Edit2Page implements OnInit {

    //定义数据模型
    mod = {
        apiUrl: '/Api/Serviceproxy/GetVehcheckresultList',
        postApiUrl: '/Api/Serviceproxy/AddOrUpdate',
        data: {

        },
        postData: {},
        shareDataKey: "riEditData"

    };

    //定义共享数据
    shareData = {
        serviceproxy: {
        },
        vehcheckresultMap: {},
    }


    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private _shareData: DCore_ShareData
    ) {

    }

    objectKeys = Object.keys;

    ngOnInit() {

        var getShareData = this._shareData.get(this.mod.shareDataKey);
        if (getShareData != null) {
            this.shareData = getShareData;
            if (this.objectKeys(this.shareData.vehcheckresultMap).length === 0) {
                this.listOnBind();
            }
        }
        else {
            this.listOnBind();
        }
    }

    listOnBind() {
        this._page.loadingShow();
        this.shareData.vehcheckresultMap = {};
        this._http.get(
            this.mod.apiUrl,
            {
                params: {

                }
            },
            (res: any) => {

                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var groupKey = res.Results[key]["Attributes"]["mcs_checktype"];
                        if (typeof this.shareData.vehcheckresultMap[groupKey] === "undefined") {
                            this.shareData.vehcheckresultMap[groupKey] = {};
                            this.shareData.vehcheckresultMap[groupKey]["text"] = res.Results[key]["Attributes"]["mcs_checktype@OData.Community.Display.V1.FormattedValue"];
                            this.shareData.vehcheckresultMap[groupKey].data = [];
                        }

                        var obj = {};
                        obj["Id"] = res.Results[key]["Id"];
                        obj["name"] = res.Results[key]["Attributes"]["mcs_name"];
                        obj["checkreult"] = res.Results[key]["Attributes"]["mcs_checkreult"];
                        obj["checked"] = true;
                        this.shareData.vehcheckresultMap[groupKey].data.push(obj);
                    }
                    this._page.loadingHide();
                }
                else {
                    this._page.alert("消息提示", "数据加载异常");
                    this._page.loadingHide();
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }

    public saveOnClick() {

        this.mod.postData["actioncode"] = 1;
        this.mod.postData["serviceproxy"] = this.shareData.serviceproxy;

        //组装服务委托书
        this.mod.postData["serviceproxy"] = {};
        this.mod.postData["serviceproxy"]["customerid"] = this.shareData.serviceproxy["customerid"];     //车辆VIN
        this.mod.postData["serviceproxy"]["customername"] = this.shareData.serviceproxy["fullname"];     //用户名
        this.mod.postData["serviceproxy"]["carplate"] = this.shareData.serviceproxy["vehplate"];         //车牌
        this.mod.postData["serviceproxy"]["customerphone"] = this.shareData.serviceproxy["customerphone"]; //手机
        this.mod.postData["serviceproxy"]["shuttlename"] = this.shareData.serviceproxy["shuttlename"];   //送修人
        this.mod.postData["serviceproxy"]["shuttlephone"] = this.shareData.serviceproxy["shuttlephone"];   //送修人手机
        this.mod.postData["serviceproxy"]["inpower"] = Number(this.shareData.serviceproxy["inpower"]);                //进店电量
        this.mod.postData["serviceproxy"]["oilquantity"] = Number(this.shareData.serviceproxy["oilquantity"]);        //进店油量
        this.mod.postData["serviceproxy"]["mileage"] = Number(this.shareData.serviceproxy["mileage"]);                //进店里程
        this.mod.postData["serviceproxy"]["arrivalon"] = this.shareData.serviceproxy["arrivalon"];                    //到店时间
        this.mod.postData["serviceproxy"]["customercomment"] = this.shareData.serviceproxy["customercomment"];            //客户描述

        //组装环检项
        this.mod.postData["serviceordercheckresultArray"] = [];
        for (var groupKey in this.shareData.vehcheckresultMap) {
            for (var key in this.shareData.vehcheckresultMap[groupKey].data) {
                var obj = {};
                obj["checkreultid"] = this.shareData.vehcheckresultMap[groupKey].data[key]["Id"];
                obj["name"] = this.shareData.vehcheckresultMap[groupKey].data[key]["name"];
                obj["checkreult"] = this.shareData.vehcheckresultMap[groupKey].data[key]["checkreult"];
                if (this.shareData.vehcheckresultMap[groupKey].data[key]["checked"] != true)
                    obj["checkreult"] = "异常";
                this.mod.postData["serviceordercheckresultArray"].push(obj);
            }
        }
        console.log(this.mod.postData);



        this._http.post(
            this.mod.postApiUrl, this.mod.postData,
            (res: any) => {

            },
            (err: any) => {

                this._page.loadingHide();
            }
        );




        //this._shareData.set(this.mod.shareDataKey, this.shareData);


        //this._page.goto("/serving/ri/success");
    }

}
