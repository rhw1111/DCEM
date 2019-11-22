import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page,DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.page.html',
  styleUrls: ['./cancel.page.scss'],
})
export class CancelPage implements OnInit {

    model = {
        postApiUrl: '/Api/appointment-info/AddOrEdit',
        data: {
        },
        postData: {},
        appointmentinfoid: "",//当前记录id
    };

    //定义共享数据
    shareData = {
        appointmentinfo: {

        }
    }
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private activeRoute: ActivatedRoute,
        private _valid: DCore_Valid,
    ) { }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe((params: Params) => {
            if (params['id'] != null && params['id'] != undefined) {
                this.model.appointmentinfoid = params['id'];
            }
        });
  }

    saveOnClick() {

        if (this._valid.isNullOrEmpty(this.shareData.appointmentinfo["mcs_cancelreasonnew"])) {
            this._page.presentToastError("请先选择取消原因");
            return;
        }
        if (this._valid.isNullOrEmpty(this.shareData.appointmentinfo["mcs_canceldes"])) {
            this._page.presentToastError("请填写取消描述");
            return;
        }
        this.model.postData["actioncode"] = 2;
        this.model.postData["appointmentinfo"] = this.shareData.appointmentinfo;

        //组装预约单
        this.model.postData["appointmentinfo"] = {};
        this.model.postData["appointmentinfo"]["mcs_appointmentinfoid"] = this.model.appointmentinfoid
        this.model.postData["appointmentinfo"]["mcs_cancelreasonnew"] = Number(this.shareData.appointmentinfo["mcs_cancelreasonnew"]);//取消原因
        this.model.postData["appointmentinfo"]["mcs_canceldes"] = this.shareData.appointmentinfo["mcs_canceldes"];//预约日期
        this.model.postData["appointmentinfo"]["mcs_status"] = 50;//预约状态

        console.log(this.shareData);
        console.log(this.model.postData);

        this._page.loadingShow();
        this._http.postForToaken(
            this.model.postApiUrl, this.model.postData,
            (res: any) => {
                this._page.loadingHide();
                if (res.Result == true) {
                    var guid = res["Data"]["Id"];
                    this._page.goto("/serving/reservation/success", { guid: guid });
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
