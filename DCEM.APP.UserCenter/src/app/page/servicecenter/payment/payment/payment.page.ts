import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
    public model: any = {
        search: {
            apiUrl: "api/order/CreateOrder",
            productCode: "",
        },
        title: "选择支付方式",
        datas: {}
    };
    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private routerinfo: ActivatedRoute,
    ) { }

    ngOnInit() {
        //获取参数
        this.model.datas = this.routerinfo.snapshot.queryParams;
        console.log(this.model.datas);
        this.initListLoading();
    }
    //初始化页面数据加载
    initListLoading() {
        this._page.loadingShow();
        this._page.loadingHide();
    }
    //倒计时
    //TimeDown(id, endDateStr) {
    //    //结束时间
    //    var endDate = new Date(endDateStr);
    //    //当前时间
    //    var nowDate = new Date();
    //    //相差的总秒数
    //    var totalSeconds = parseInt((endDate - nowDate) / 1000);
    //    //天数
    //    var days = Math.floor(totalSeconds / (60 * 60 * 24));
    //    //取模（余数）
    //    var modulo = totalSeconds % (60 * 60 * 24);
    //    //小时数
    //    var hours = Math.floor(modulo / (60 * 60));
    //    modulo = modulo % (60 * 60);
    //    //分钟
    //    var minutes = Math.floor(modulo / 60);
    //    //秒
    //    var seconds = modulo % 60;
    //    //输出到页面
    //    document.getElementById(id).innerHTML = "还剩:" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒";
    //    //延迟一秒执行自己
    //    setTimeout(function () {
    //        this.TimeDown(id, endDateStr);
    //    }, 1000)
    //}
}
