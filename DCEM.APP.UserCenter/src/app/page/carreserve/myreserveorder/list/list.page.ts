import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    public tab: any = 'equityorder';
    public model: any = {
        search: {
            apiUrl: "api/smallbooking/QuerySmallOrder",
        },
        title: "我的预订订单",
        datas: []
    };
    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.initListLoading();
  }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        var requests = {
            "mcs_userid": this._logininfo.GetSystemUserId(),
            "mcs_smallorderid": null,
            "mcs_mobilephone": this._logininfo.GetPhone(),
            "mcs_name":null
        };
        this._http.get(this.model.search.apiUrl + "?mcs_userid=" + this._logininfo.GetSystemUserId() + "&mcs_smallorderid=&mcs_mobilephone=" + this._logininfo.GetPhone() + "&mcs_name=",
            requests,
            (res: any) => {
                if (res != null && res.Results != null) {
                    //绑定数据
                    this.model.datas = res.Results;
                    for (var i = 0; i < this.model.datas.length; i++) {
                        this.model.datas[i].Attributes.paystatus = this.getPayStatus(this.model.datas[i].Attributes.mcs_orderstatus);
                    }
                    event ? event.target.complete() : '';
                    //判断是否有新数据
                    //if (res.Datas.length < this.model.search.pageSize) {
                    //    event ? event.target.disabled = true : "";
                    //    this.model.isending = true;
                    //}
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
    paynow(ordercode) {
        var param = {
            "OrderCode": ordercode,
            "BlindOrder": "",
            "OrderStatus": 1
        };
        this._page.goto("/carreserve/payorder/payment", { params: JSON.stringify(param) });
    }
    orderdetail(ordercode) {
        var param = {
            "OrderCode": ordercode,
            "BlindOrder": "",
            "OrderStatus": 1
        };
        this._page.goto("/carreserve/myreserveorder/detail", { params: JSON.stringify(param) });
    }
    //订单状态0-待支付、1 - 已支付、2 - 申请退订、3 - 已退订
    getPayStatus(param) {
        var paystatus;
        switch (param) {
            case 0:
                paystatus = "待支付";
                break;
            case 1:
                paystatus = "已支付";
                break;
            case 2:
                paystatus = "申请退订";
                break;
            case 3:
                paystatus = "已退订"
                break;
        }
        return paystatus;
    }
}
