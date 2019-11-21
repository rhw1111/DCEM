import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { IonInfiniteScroll } from '@ionic/angular';
import { OptionSetService } from '../../saleing.ser/optionset.service';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonInfiniteScroll,null) infiniteScroll: IonInfiniteScroll;
  public model: any = {
    name: 'surveyorder',//模块实体名称
    apiUrl: '/api/Installation/GetInstallationorderList',//请求地址
    seachkey: '',//搜索关键字
    mcs_installationstatus: 0,//勘测单状态
    pageSize: 10,//页数
    page: 1,//分页
    sort: '',//排序的参数
    userId:this._userinfo.GetSystemUserId(),
    //userId:"65AD644C-64F7-E811-A81E-9A16184AF7BF",
    dealerId:this._userinfo.GetDealerid(),
    isending: false,//是否加载完成
    datalist: []//列表数据
};
  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private httpService: HttpService,
    private optionset:OptionSetService,
    private _userinfo: Storage_LoginInfo,

  ) { }

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
  //this.infiniteScroll.disabled = false;//切换标签初始化下拉控件事件
  this.model.datalist = [];
  this.model.page = 1;
  this.model.isending = false;
  if (status != "" && status != undefined) {
      this.model.mcs_installationstatus = status;
  }
  else {
      this.model.mcs_installationstatus = 0;
  }
  console.log(this.model.mcs_installationstatus)
  this.getList(null);
}

 //获取列表数据
 getList(event) {
   console.log("userid:"+this.model.userId);
   console.log("dealerid:"+this.model.dealerId);
   console.log("dealername:"+this._userinfo.GetDealername());
  //debugger;
  this._page.loadingShow();
  this._http.postForToaken(this.model.apiUrl,
      {
        mcs_installationstatus: this.model.mcs_installationstatus,
        SearchKey: this.model.seachkey,
        Sort: this.model.sort,
        PageSize: this.model.pageSize,
        PageIndex: this.model.page
        // UserId:this.model.userId,
        // mcs_dealerid:this.model.dealerId
      },
      (res: any) => {
         //debugger;
          if (res.Results !== null) {
              //绑定数据
              res.Results.forEach(item => {              
                  var obj = {}; 
                  obj["mcs_installationorderid"] = item["Attributes"].mcs_installationorderid;             
                  obj["mcs_username"] = item["Attributes"].mcs_username;
                  obj["mcs_userphone"] = item["Attributes"].mcs_userphone;
                  obj["mcs_name"] = item["Attributes"].mcs_name;                    
                  obj["mcs_installationstatus"] =this.getStatus(item["Attributes"].mcs_installationstatus);              
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
getStatus(statusId){
  var status="";
  switch(statusId){
    case 21:status="新建";break;
    case 30:status="待厅店审核";break;
    case 32:status="店长驳回";break;
    case 29:status="已提交";break;
    case 22:status="待安装";break;
    case 24:status="安装完成";break;
    case 25:status="重新登记";break;
    case 26:status="待反馈";break;
    case 27:status="已反馈";break;
    case 28:status="中途结束";break;
  }
  return status;

}
}
