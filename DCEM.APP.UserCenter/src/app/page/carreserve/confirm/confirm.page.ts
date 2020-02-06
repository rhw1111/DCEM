import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/product/Detail",
        },
        title: "确认订单信息",
        datas: {},
        checkedequitypackage: [],//选择权益包
        checkedoptional:[]//选择选装包
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        //获取参数
        var datastr = this.routerinfo.snapshot.queryParams["params"];
        this.model.datas = JSON.parse(datastr);
        var equitycode = this.model.datas.request.EquityCode;
        var optionallist = this.model.datas.request.OptionalCode.split(';');
        var checkedequitypackage = [];
        var checkedoptional = [];
        this.model.datas.smallbooking.equitypackagelist.forEach(item => {
            if (item.EquityPackageInfo.mcs_code == equitycode) {
                checkedequitypackage.push(item);
            }
        });
        this.model.checkedequitypackage = checkedequitypackage;
        for (var j = 0; j < optionallist.length - 1; j++) {
            this.model.datas.smallbooking.optionallist.forEach(item => {
                if (optionallist[j] == item.OptionalInfo.mcs_code) {
                    checkedoptional.push(item);
                }
            })
        }
        this.model.checkedoptional = checkedoptional;
    }
    //提交订单
    btnSubmit() {
        var request = this.model.datas.request;
        this._page.loadingShow();
        this._http.post(this.model.search.apiUrl,
            request,
            (res: any) => {
                if (res != null) {
                    this._page.goto("/carreserve/payorder/payment", { params: JSON.stringify(request) });
                }
                else {
                    this._page.alert("消息提示", "数据加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
    }
    //生成订单号
    Gen(len) {
        len = len || 10;
        var $chars = '0123456789';
        var maxPos = $chars.length;
        var pwd = '';
        for (var i = 0; i < len; i++) {
            //0~32的整数
            pwd += $chars.charAt(Math.floor(Math.random() * (maxPos + 1)));
        }
        return "YO" + this.getNowFormatDate() + pwd;
    }
    //获取当前日期组合
    getNowFormatDate() {
        var datetime = new Date();
        var year = datetime.getFullYear();
        var month = datetime.getMonth() + 1;
        var date = datetime.getDate();
        var strmonth;
        var strdate;
        if (month >= 1 && month <= 9) {
            strmonth = "0" + month;
        } else {
            strmonth = month;
        }
        if (date >= 0 && date <= 9) {
            strdate = "0" + date;
        } else {
            strdate = date
        }
        var currentdate = "" + year + strmonth + strdate;
        return currentdate;
    }

}
