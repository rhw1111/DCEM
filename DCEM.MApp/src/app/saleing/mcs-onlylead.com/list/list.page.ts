import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import sd from 'silly-datetime';
import { IonInfiniteScroll } from '@ionic/angular';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

    model = {
        name: 'onlylead',//模块实体名称
        apiUrl: '/api/only-lead/QueryList',
        seachkey: '',//搜索关键字
        data: [],//列表数据
        pageSize: 10,//页数
        page: 1,//分页
        sort: '',//排序的参数
        systemUserId: "",//当前用户id
        dealerId: "",//当前厅店id
        isending: false,//是否加载完成
        nodata: false,
        ifDoLoading: false,//是否初始加载
    };

    constructor(
        public router: Router,
        private _http: DCore_Http,
        private _page: DCore_Page,
        private httpService: HttpService,
        private _logininfo: Storage_LoginInfo
    ) { }

    ngOnInit() {
        //debugger;
        this.model.systemUserId = this._logininfo.GetSystemUserId(); 
        //this.model.dealerId = this._logininfo.GetDealerid();
        this.showlist(null);
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

    //下拉刷新
    doRefresh(event) {
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        this.showlist(event);
    }
    //加载下一页
    doLoading(event) {
        this.model.page++;
        this.model.ifDoLoading = true;
        this.showlist(event);
    }

    //展示数据
    showlist(event) {
        if (!this.model.ifDoLoading) {
            this._page.loadingShow();
        }
        this._http.getForToaken(this.model.apiUrl,
            {
                "Search": this.model.seachkey,
                "PageSize": this.model.pageSize,
                "PageIndex": this.model.page
            },
            (res: any) => {
                if (res.Results !== null) {
                    for (var key in res.Results) {
                        var obj = {};
                        obj["mcs_onlyleadid"] = res.Results[key]["Id"];
                        obj["mcs_gender"] = res.Results[key]["Attributes"]["mcs_gender"];
                        obj["mcs_gendervalue"] = res.Results[key]["Attributes"]["mcs_gender@OData.Community.Display.V1.FormattedValue"];
                        obj["mcs_leadorigin"] = res.Results[key]["Attributes"]["mcs_leadorigin"];
                        obj["mcs_leadoriginvalue"] = res.Results[key]["Attributes"]["mcs_leadorigin@OData.Community.Display.V1.FormattedValue"];
                        obj["mcs_mobilephone"] = res.Results[key]["Attributes"]["mcs_mobilephone"];
                        obj["mcs_name"] = res.Results[key]["Attributes"]["mcs_name"];
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
                    this._page.alert("消息提示", "唯一线索数据加载异常");
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert("消息提示", "唯一线索数据加载异常");
                this._page.loadingHide();
            }
        );
    }

    //返回数据为空，默认“--”
    SetDefaultValue(data) {
        if (data == null || data == undefined) {
            return '--';;
        }
        else {
            return data;
        }
    }
}
