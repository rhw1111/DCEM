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
        apiUrl: '/Api/Serviceproxy/GetVehcheckList',
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
        if (this._shareData.has(this.mod.shareDataKey)) {
            this.shareData = this._shareData.get(this.mod.shareDataKey);
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

    goBackOnClick() {
        this._shareData.set(this.mod.shareDataKey, this.shareData);
        this._page.goBack();
    }

    public saveOnClick() {

        this.mod.postData["actioncode"] = this.shareData["actioncode"];            //操作编码

        //组装服务委托书
        this.mod.postData["serviceproxy"] = {};
        if (this.shareData["actioncode"] === 2)
            this.mod.postData["serviceproxy"]["serviceproxyid"] = this.shareData.serviceproxy["serviceproxyid"];     //服务委托书ID
        this.mod.postData["serviceproxy"]["customerid"] = this.shareData.serviceproxy["customerid"];     //车辆VIN
        this.mod.postData["serviceproxy"]["customername"] = this.shareData.serviceproxy["customername"];     //用户名
        this.mod.postData["serviceproxy"]["carplate"] = this.shareData.serviceproxy["carplate"];         //车牌
        this.mod.postData["serviceproxy"]["customerphone"] = this.shareData.serviceproxy["customerphone"]; //手机
        this.mod.postData["serviceproxy"]["shuttlename"] = this.shareData.serviceproxy["shuttlename"];   //送修人
        this.mod.postData["serviceproxy"]["shuttlephone"] = this.shareData.serviceproxy["shuttlephone"];   //送修人手机
        this.mod.postData["serviceproxy"]["inpower"] = Number(this.shareData.serviceproxy["inpower"]);                //进店电量
        this.mod.postData["serviceproxy"]["oilquantity"] = Number(this.shareData.serviceproxy["oilquantity"]);        //进店油量
        this.mod.postData["serviceproxy"]["mileage"] = Number(this.shareData.serviceproxy["mileage"]);                //进店里程
        this.mod.postData["serviceproxy"]["arrivalon"] = this.shareData.serviceproxy["arrivalon"];                    //到店时间
        this.mod.postData["serviceproxy"]["dealerid"] = this.shareData.serviceproxy["dealerid"];                    //厅店
        this.mod.postData["serviceproxy"]["customercomment"] = this.shareData.serviceproxy["customercomment"];            //客户描述
        this.mod.postData["serviceproxy"]["currenttype"] = 10;            //单据类型 10问诊单

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

        this._page.loadingShow();
        this._http.post(
            this.mod.postApiUrl, this.mod.postData,
            (res: any) => {
                this._page.loadingHide();
                if (res.Result == true) {
                    var id = res["Data"]["Id"];
                    var no = res["Data"]["Attributes"]["mcs_name"];
                    this._shareData.delete(this.mod.shareDataKey);

                    if (this.shareData["actioncode"] === 1)
                        this._page.navigateRoot("/serving/ri/success", { actioncode: this.shareData["actioncode"], id: id, no: no });
                    else {
                        const that = this;
                        this._page.alert("消息提示", "单据信息更新成功,请单击确认返回问诊单列表", function () {
                            that._page.navigateRoot("/serving/ri/list", null, "back");
                        });
                    }
                }
                else {
                    this._page.alert("消息提示", "操作失败");
                }
            },
            (err: any) => {
                this._page.loadingHide();
                this._page.alert("消息提示", "操作失败");
            }
        );

    }

}
