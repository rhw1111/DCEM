import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { OptionSetService } from '../../../base/base.ser/optionset.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    @ViewChild(IonContent, null) ionContent: IonContent;
    @ViewChild(IonInfiniteScroll, null) ionInfiniteScroll: IonInfiniteScroll;
    public tab:any="1";
    public model: any = {
        apiUrl: '/api/account/GetList',//请求地址
        data: [],//列表数据
        params: {
            SearchKey: '',//搜索关键字
            mcs_customerstatus: -1,//状态
            PageSize: 10,//页数
            PageIndex: 1,//分页
            Sort: '',//排序的参数
            UserId: "",
            mcs_dealerid: ""
        }
    };
    constructor(private _http: DCore_Http,
        private _page: DCore_Page,
        private optionset:OptionSetService) { }

    ngOnInit() {
       
    }
    
    //每次页面加载
    ionViewWillEnter() {
        this.ionInfiniteScroll.disabled = false;
        this.model.params.PageIndex = 1;
        this._page.loadingShow();
        this.listOnBind();
    }

    ///搜索
    searchOnKeyup(event: any) {
        var keyCode = event ? event.keyCode : "";
        if (keyCode == 13) {
            this.model.data = [];
            this.model.params.PageIndex = 1;
            this.ionInfiniteScroll.disabled = false;
            this.ionContent.scrollToTop(0);
            this.listOnBind();
        }
    }
     //下拉刷新
     doInfinite() {
        this.model.params.PageIndex += 1;
        this.listOnBind();
        this.ionContent.scrollToBottom(0);
    }
    //切换tab
    tagOnClick(status){
        this.ionInfiniteScroll.disabled = false;
        this.model.data=[];
        this.model.params.PageIndex = 1;
        this.model.params.mcs_customerstatus=status;
       
        this.ionContent.scrollToTop(0);
        this._page.loadingShow();
        this.listOnBind();
    }

    //列表数据绑定
    listOnBind() {
        this._http.postForToaken(this.model.apiUrl, this.model.params,
            (res: any) => {
                if (res.Results !== null) {
                    //绑定数据
                    if(res.Results.length>0){
                        res.Results.forEach(item => {
                            var value = item["Attributes"];
                            this.model.data.push({
                                "Id": value.accountid,
                                "name": value.name,
                                "accountnumber": value.accountnumber,
                                "mcs_mobilephone": value.mcs_mobilephone==""?"--":value.mcs_mobilephon,
                                "mcs_customerstatus":this.optionset.GetOptionSetNameByValue("mcs_customerstatus",value.mcs_customerstatus),
                                "createdon": value.createdon
                            });
                        });
                    }
                    this.ionInfiniteScroll.complete();
                    //判断是否有新数据
                    if (res.Results.length < this.model.params.PageSize) {
                        if(this.model.params.PageIndex>1){
                            this.ionInfiniteScroll.disabled = true;
                        }
                    }
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
}
