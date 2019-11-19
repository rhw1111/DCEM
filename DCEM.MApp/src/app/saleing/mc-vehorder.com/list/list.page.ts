import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { IonInfiniteScroll } from '@ionic/angular';
import { OptionSetService } from '../../saleing.ser/optionset.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonInfiniteScroll,null) infiniteScroll: IonInfiniteScroll;

  public model: any = {
    name: 'vehorderlist',//模块实体名称
    apiUrl: '/api/vehorder/GetVehorderList',//请求地址
    seachkey: '',//搜索关键字
    mcs_rostatus: 0,//订单状态
    pageSize: 10,//页数
    page: 1,//分页
    sort: '',//排序的参数
    isending: false,//是否加载完成
    datalist: []//列表数据
};

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private httpService: HttpService,
    private optionset:OptionSetService
    ) {}

  ngOnInit() {
    this.model.page = 1;
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
    this.model.datalist = [];
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
    this.infiniteScroll.disabled = false;//切换标签初始化下拉控件事件
    this.model.datalist = [];
    this.model.page = 1;
    this.model.isending = false;
    if (status.toString() != "" && status != undefined) {
        this.model.mcs_rostatus = status;
    }
    else {
        this.model.mcs_rostatus = 0;
    }
    this.getList(null);
}

 //获取列表数据
 getList(event) {
  //debugger;
  this._page.loadingShow();
  this._http.get(this.model.apiUrl,
      {
          params: {
              mcs_rostatus: this.model.mcs_rostatus,
              seachkey: this.model.seachkey,
              sort: this.model.sort,
              pageSize: this.model.pageSize,
              page: this.model.page,
          }
      },
      (res: any) => {
         //debugger;
          if (res.Results !== null) {
              //绑定数据
              res.Results.forEach(item => {              
                  var obj = {}; 
                  obj["mcs_vehorderid"] = item["Attributes"].mcs_vehorderid;             
                  obj["mcs_contactname"] = item["Attributes"].mcs_contactname;
                  obj["mcs_contactphone"] = item["Attributes"].mcs_contactphone;
                  obj["mcs_code"] = item["Attributes"].mcs_code;                    
                  obj["mcs_rostatus"] =this.optionset.GetOptionSetNameByValue("mcs_rostatus",item["Attributes"].mcs_rostatus);              
                  this.model.datalist.push(obj);

              });
              //设置数据存储到本地
              if (this.model.page == 1) {
                  this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.datalist).toString());
              }
              event ? event.target.complete() : '';
              //判断是否有新数据
              if (res.Results.length < this.model.pageSize) {
                  event ? event.target.disabled = true : "";
                  this.model.isending = true;
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
