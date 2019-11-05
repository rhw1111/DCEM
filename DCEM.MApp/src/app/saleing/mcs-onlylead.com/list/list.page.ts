import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import sd from 'silly-datetime';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

    model = {
        name: 'appointmentlistinfo',//模块实体名称
        apiUrl: '/api/only-lead/QueryList',
        seachkey: '',//搜索关键字
        data: [],//列表数据
        pageSize: 10,//页数
        page: 1,//分页
        sort: '',//排序的参数
        isending: false,//是否加载完成
        nodata: false
    };


    constructor(
        public router: Router,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private httpService: HttpService
    ) { }

    ngOnInit() {

        //this.showlist();
  }
    //搜索方法
    search(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.data = [];
            this.model.page = 1;
            this.model.isending = false;
            this.showlist(null);
        }
    }

    //展示数据
    showlist(event) {
        this._page.loadingShow();
        console.log("地址:" + this.model.apiUrl,"搜索:" + this.model.seachkey, "排序:" + this.model.sort, "页条数:" + this.model.pageSize, "页数:" + this.model.page);
        this._http.get(this.model.apiUrl,
            {
                params: {
                    seachkey: this.model.seachkey,
                    sort: this.model.sort,
                    pageSize: this.model.pageSize,
                    page: this.model.page
                }
            },
            (res: any) => {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["mcs_appointmentinfoid"] = res.Results[key]["Id"];
                        obj["mcs_carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
                        obj["mcs_customername"] = res.Results[key]["Attributes"]["mcs_customername"];
                        obj["mcs_appointmentat"] = res.Results[key]["Attributes"]["mcs_appointmentat"];
                        obj["mcs_appointmentconfigid"] = res.Results[key]["Attributes"]["appointmentconfig_x002e_mcs_name"];
                        obj["mcs_status"] = res.Results[key]["Attributes"]["mcs_status"];
                        this.model.data.push(obj);
                    }
                    //设置数据存储到本地
                    if (this.model.page == 1) {
                        this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.data).toString());
                    }
                    event ? event.target.complete() : '';
                    //判断是否有新数据
                    if (res.Results.length < 10) {
                        event ? event.target.disabled = true : "";
                        this.model.isending = true;
                    }
                }
                else {
                    this._page.alert("消息提示", "预约单数据加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "预约单数据加载异常");
                this._page.loadingHide();
            }
        );
    }
}
