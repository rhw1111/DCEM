import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/smallbooking/QuerySmallOrderDetail",
        },
        title: "订单详情",
        datas: {},
        smallorderinfo: {},
        equitypackagelist: [],
        optionallist:[],
        params: {},
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        //获取参数
        var datastr = this.routerinfo.snapshot.queryParams["params"];
        this.model.params = JSON.parse(datastr);
        this.initListLoading();
  }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getDetail(null);
    }
    //获取数据
    getDetail(event) {
        var requests = {
            "mcs_smallorderid": this.model.params.mcs_smallorderid
        };
        this._http.get(this.model.search.apiUrl + "?mcs_smallorderid=" + this.model.params.mcs_smallorderid,
            requests,
            (res: any) => {
                if (res != null) {
                    //绑定数据
                    this.model.datas = res;
                    this.model.smallorderinfo = this.model.datas.SmallOrderList[0].SmallOrderInfo;
                    this.model.smallorderinfo.paystatus = this.getPayStatus(this.model.datas.SmallOrderList[0].SmallOrderInfo.mcs_orderstatus);
                    this.model.smallorderinfo.createdon = this.Format(this.model.datas.SmallOrderList[0].SmallOrderInfo.createdon, "yyyy-MM-dd HH:mm:ss");
                    this.model.smallorderinfo.mcs_premiumcode = this.model.datas.SmallOrderList[0]["SmallOrderInfo"]["blindorder.mcs_premiumcode"];
                    this.model.smallorderinfo.mcs_premiumname = this.model.datas.SmallOrderList[0]["SmallOrderInfo"]["blindorder.mcs_name"];
                    this.model.equitypackagelist = this.model.datas.SmallOrderList[0].EquityPackageArray;
                    this.model.optionallist = this.model.datas.SmallOrderList[0].OptionalArray;
                    event ? event.target.complete() : '';
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
    paynow(ordercode, mcs_smallorderid, mcs_premiumname, mcs_totalorder) {
        var param = {
            "OrderCode": ordercode,
            "mcs_smallorderid": mcs_smallorderid,
            "BlindOrder": mcs_premiumname,
            "TotalOrder": mcs_totalorder,
            "OrderStatus": 1
        };
        this._page.goto("/carreserve/payorder/payment", { params: JSON.stringify(param) });
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
