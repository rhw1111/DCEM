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
                if (res != null && res.Results.length > 0) {
                    //绑定数据
                    this.model.datas = res.Results;
                    for (var i = 0; i < this.model.datas.length; i++) {
                        this.model.datas[i].Attributes.paystatus = this.getPayStatus(this.model.datas[i].Attributes.mcs_orderstatus);
                        this.model.datas[i].Attributes.mcs_premiumcode = this.model.datas[i]["Attributes"]["blindorder.mcs_premiumcode"];
                        this.model.datas[i].Attributes.mcs_premiumname = this.model.datas[i]["Attributes"]["blindorder.mcs_name"];
                        this.model.datas[i].Attributes.createdon = this.Format(this.model.datas[i].Attributes.createdon,"yyyy-MM-dd HH:mm:ss");
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
    paynow(ordercode, mcs_smallorderid,mcs_premiumname, mcs_totalorder) {
        var param = {
            "OrderCode": ordercode,
            "mcs_smallorderid": mcs_smallorderid,
            "BlindOrder": mcs_premiumname,
            "TotalOrder": mcs_totalorder,
            "OrderStatus": 1
        };
        this._page.goto("/carreserve/payorder/payment", { params: JSON.stringify(param) });
    }
    orderdetail(ordercode, mcs_smallorderid) {
        var param = {
            "OrderCode": ordercode,
            "mcs_smallorderid": mcs_smallorderid
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

    Format(datetime, fmt) {
        var date = new Date(datetime);
        var o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "H+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
}
