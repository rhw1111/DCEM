import { Component, OnInit ,ViewChild } from '@angular/core';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { MessageService } from 'app/base/base.ser/message.service';
import sd from 'silly-datetime';
import { debug } from 'util';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    @ViewChild(IonInfiniteScroll,null) infiniteScroll: IonInfiniteScroll;

    public tab:any="0";
    public model: any = {
        name: 'technicalsupportlist',//模块实体名称
        apiUrl: '/api/tech-support/GetList',//请求地址
        seachkey: '',//搜索关键字
        orderstatus: 0,//订单状态
        data: [],//列表数据
        pageSize: 10,//页数
        page: 1,//分页
        sort: 'mcs_supportorderid desc',//排序的参数
        isending: false//是否加载完成
    };

    constructor(
        private _http: DCore_Http,
        private _page: DCore_Page,
        private httpService: HttpService) {
    }

    ngOnInit() {
        this.model.page = 1;
        this._page.loadingShow();
        this.getList(null);
    }

    //每次页面加载
    ionViewWillEnter() {
       
    }

    //搜索方法
    search(event) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.data = [];
            this.model.page = 1;
            this.model.isending = false;
            this.getList(null);
        }
    }

    //下拉刷新
    doRefresh(event) {
        this.model.data = [];
        this.model.page = 1;
        this.model.isending = false;
        this.getList(event);
    }
    //加载下一页
    doLoading(event) {
        this.model.page++;
        this.getList(event);
    }
    //切换tab
    selectTab(status) {
        //切换标签初始化下拉控件事件
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = false;
        this.model.data = [];
        this.model.page = 1;
        this.model.isending =false;
        if (status != "" && status != undefined) {
            this.model.orderstatus = status;
        }
        else {
            this.model.orderstatus = 0;
        }
        this._page.loadingShow();
        this.getList(null);
    }
    //获取列表数据
    getList(event) {
        this._http.getForToaken(this.model.apiUrl,
            {
                orderstatus: this.model.orderstatus,
                seachkey: this.model.seachkey,
                sort: this.model.sort,
                pageSize: this.model.pageSize,
                page: this.model.page
            },
            (res: any) => {
                if (res.Results !== null) {
                    //绑定数据
                    res.Results.forEach(item => {
                        var value = item["Attributes"];
                        this.model.data.push({
                            "Id": value.mcs_supportorderid,
                            "mcs_name": value.mcs_name,
                            "mcs_repairdate": value.mcs_repairdate,
                            "mcs_orderstatus": value.mcs_orderstatus,
                            "mcs_title": value.mcs_title
                        });
                    });
                    //设置数据存储到本地
                    if (this.model.page == 1) {
                        this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.data).toString());
                    }
                    event ? event.target.complete() : '';
                    //判断是否有新数据
                    if (res.Results.length < this.model.pageSize) {
                        event ? event.target.disabled = true : "";
                        if(this.model.page>1){
                            this.model.isending = true;
                        }
                    }
                }
                else {
                    this._page.alert(MessageService.AlterTitleMessage,MessageService.ErrorRequestException);
                }
                this._page.loadingHide();
            },
            (err: any) => {
                this._page.alert(MessageService.AlterTitleMessage,MessageService.ErrorRequestException);
                this._page.loadingHide();
            }
        );
    }

    FormatToDate(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD');
        }
        else {
            return '';
        }
    }

    FormatToDateTime(date) {
        if (date != null && date != undefined) {
            return sd.format(date, 'YYYY-MM-DD hh:mm:ss');
        }
        else {
            return '';
        }
    }
}
