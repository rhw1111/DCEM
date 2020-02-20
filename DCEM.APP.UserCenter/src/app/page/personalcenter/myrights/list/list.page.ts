import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../component/typescript/dcem.core';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';
import { ActivatedRoute } from '@angular/router';
import { debug } from 'util';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    public tab: any = 'rightsget';
    public model: any = {
        search: {
            apiUrl: "api/cashcoupon/GetUseCashCoupon",
            pageSize: 10,//页数
            page: 1,//分页
        },
        title: "我的权益",
        datalist: [],//所有权益
        rightsget: [],//领用权益
        rightsuse: [],//使用权益
        isending: false,//是否加载完成
        score: {
            apiUrl: "api/user/getuserscore",
            search: {
                id: this._logininfo.GetSystemUserId(),
                pageindex: 1,
                pagesize: 10,
            },
            data: [],
            balance: 0,
        },
        OrderClass: "",
        //OrderType: 10, //商品类型; 1: 整车; 2: 整车选装件; 3: 充电桩 / 枪; 4: 备件; 7: 业务办理; 8: 施工; 10: 精品;
        isShowGetNone: false,
        isShowUseNone: false,
    };

    constructor(
        private _logininfo: Storage_LoginInfo,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.model.OrderClass = this.routerinfo.snapshot.queryParams["orderclass"];
        this.initListLoading();
    }
    //下拉刷新
    doRefresh(event) {
        this.model.datalist = [];
        this.model.search.page = 1;
        this.model.isending = false;
        this.getList(event);
    }
    //加载下一页
    doLoading(event) {
        this.model.search.page++;
        this.getList(event);
    }

    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        this._http.getForShopping(this.model.search.apiUrl,
            {
                userid: this._logininfo.GetSystemUserId()
            },
            (res: any) => {
                if (res != null) {
                    //绑定数据
                    res.MyRightses.forEach(item => {
                        item.Getdate = this.Format(item.Getdate, "yyyy-MM-dd HH:mm:ss");
                    });
                    res.UseRightses.forEach(item => {
                        item.CheckDate = this.Format(item.CheckDate, "yyyy-MM-dd HH:mm:ss");
                    });
                    this.model.rightsget = res.MyRightses;
                    this.model.rightsuse = res.UseRightses;
                    event ? event.target.complete() : '';
                    //判断是否有新数据
                    //if (res.Data.length < this.model.search.pageSize) {
                    //    event ? event.target.disabled = true : "";
                    //    this.model.isending = true;
                    //}
                    this.model.isShowGetNone = this.model.rightsget.length <= 0;
                    this.model.isShowUseNone = this.model.rightsuse.length <= 0;
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "数据加载异常");
                this._page.loadingHide();
            }
        );
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
