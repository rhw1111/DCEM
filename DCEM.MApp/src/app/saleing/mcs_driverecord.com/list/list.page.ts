import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { IonInfiniteScroll } from '@ionic/angular';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { MessageService } from 'app/base/base.ser/message.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
  public tab: any = "all";
  public model = {
    name: 'mcs_driverecord',//模块实体名称
    apiUrl: '/api/drive-record/QueryList',//请求地址
    seachkey: '',//搜索关键字
    status:0,//任务状态
    pageSize: 10,//页数
    page: 1,//分页
    sort: '',//排序的参数
    DealerId:"B30FEFC4-E9F9-E811-A81E-9A16184AF7BF",//this._userinfo.GetDealerid(), 
    isending: false,//是否加载完成
    datalist: [],//列表数据
    systemUserId:'',
    aLLTotalCount:0,//总数量
    scheduledCount:0,//已排程数量
    submittedCount:0,//已提交数量
    ifDoLoading: false,//是否初始加载
    searchnodata:false,
  };

  public PageMessage={
    PageNoData:MessageService.PageNoData,
    PageNoMore:MessageService.PageNoMore,
  } ;


  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private httpService: HttpService,
    private optionset: OptionSetService,
    private _logininfo: Storage_LoginInfo
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.model.page = 1;
    this.model.systemUserId = this._logininfo.GetSystemUserId(); 
    this.getList(null);
  }

  //搜索方法
  search(event) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.model.datalist = [];
      this.model.page = 1;
      this.model.isending = false;
      this.getList(null);
    }
  }

  //下拉刷新
  doRefresh(event) {
    debugger;
    this.model.datalist = [];
    this.model.page = 1;
    this.model.isending = false;
    this.getList(event);
  }
  //加载下一页
  doLoading(event) {
      this.model.page++;
      this.model.ifDoLoading = true;
    this.getList(event);
  }
  //切换tab
  selectTab(status) {
    this.infiniteScroll.disabled = false;//切换标签初始化下拉控件事件
    this.model.datalist = [];
    this.model.page = 1;
    this.model.isending = false;
    if (status.toString() != "" && status != undefined) {
      this.model.status = status;
    }
    else {
      this.model.status = 0;
      }
      this.model.ifDoLoading = false;
    this.getList(null);
  }

  //获取列表数据
  getList(event) {
    //debugger;
      if (!this.model.ifDoLoading) {
          this._page.loadingShow();
      }
      this._http.getForToaken(this.model.apiUrl,
      {
          "Status": this.model.status,
          "Search": this.model.seachkey,
          "Sort": this.model.sort,
          "PageSize": this.model.pageSize,
          "PageIndex": this.model.page,
      },
      (res: any) => { 
         
        if (res.Results !== null) {
          this.model.aLLTotalCount=res.ALLTotalCount;
          this.model.submittedCount=res.SubmittedCount;
          this.model.scheduledCount=res.ScheduledCount;
          //绑定数据
          for (var i in res.Results) {
            var attr = res.Results[i]["Attributes"];
            var obj = {};
            obj["id"] = res.Results[i]["Id"];
            obj["mcs_fullname"] = attr["mcs_fullname"];
            obj["mcs_mobilephone"] = attr["mcs_mobilephone"];
            obj["mcs_drivestatus"] = attr["mcs_drivestatus@OData.Community.Display.V1.FormattedValue"];
            obj["mcs_ordertime"] = attr["mcs_ordertime"];
            obj["reservationname"] = attr["reservationname"];
             this.model.datalist.push(obj);
          }
          //设置数据存储到本地
          if (this.model.page == 1) {
            this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.datalist).toString());
          }
          event ? event.target.complete() : '';
          this.model.searchnodata=res.Results.length==0;
          //判断是否有新数据
          if (res.Results.length < this.model.pageSize) {
            if(this.model.page>1){
              event ? event.target.disabled = true : "";
              this.model.isending = true;
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

