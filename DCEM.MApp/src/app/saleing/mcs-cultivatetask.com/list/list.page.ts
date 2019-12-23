import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { IonInfiniteScroll } from '@ionic/angular';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

  public model = {
    name: 'activitylist',//模块实体名称
    apiUrl: '/api/only-lead/GetMyActivityList',//列表请求地址
    addoreditUrl: '/api/activity/addoredit',//培育任务完成按钮接口
    seachkey: '',//搜索关键字
    mcs_activitystatus: -1,//任务状态
    pageSize: 10,//页数
    page: 1,//分页
    sort: '',//排序的参数
    isending: false,//是否加载完成
    datalist: [],//列表数据
    systemUserId:'',
    searchnodata:false,
  };

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private httpService: HttpService,
    private optionset: OptionSetService,
    private menuController:MenuController,
    private _logininfo: Storage_LoginInfo
  ) { }

  ngOnInit() {
   
  }

  ionViewDidEnter() {
    // debugger;
    this.menuController.enable(false);
    this.model.datalist=[];
    this.model.page = 1;
    this.model.systemUserId = this._logininfo.GetSystemUserId(); 
    this._page.loadingShow();
    this.getList(null);
  }


  //搜索方法
  search(event) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.model.searchnodata=false;
      this.model.datalist = [];
      this.model.page = 1;
      this._page.loadingShow();
      this.getList(null);
    }
  }

  //下拉刷新
  doRefresh(event) {
    //debugger;
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
      this.model.mcs_activitystatus = status;
    }
    else {
      this.model.mcs_activitystatus = -1;
    }
    this._page.loadingShow();
    this.getList(null);
  }

  //获取列表数据
  getList(event) {
    this._http.get(this.model.apiUrl,
      {
        params: {
          mcs_activitystatus: this.model.mcs_activitystatus,
          seachkey: this.model.seachkey,
          sort: this.model.sort,
          pageSize: this.model.pageSize,
          page: this.model.page,
          systemuserid: this.model.systemUserId
        }
      },
      (res: any) => {
        //debugger;
        if (res.Results !== null) {
          //绑定数据
          res.Results.forEach(item => {
            var obj = {};
            obj["mcs_activityid"] = item["Attributes"].mcs_activityid;      
            obj["Custname"] = item["Attributes"].mcs_name; 
            obj["mcs_thisfollowupcontent"] = item["Attributes"].mcs_thisfollowupcontent;     
            obj["mcs_activitystatus"] = this.optionset.GetOptionSetNameByValue("mcs_activitystatus", item["Attributes"].mcs_activitystatus);
            obj["mcs_importantlevel"] = this.optionset.GetOptionSetNameByValue("mcs_importantlevel", item["Attributes"].mcs_importantlevel);
            obj["mcs_name"] = item["Attributes"].a_x002e_mcs_name;
            obj["mcs_mobilephone"] = item["Attributes"].a_x002e_mcs_mobilephone;
          
            this.model.datalist.push(obj);

          });
          // //设置数据存储到本地
          // if (this.model.page == 1) {
          //   this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.datalist).toString());
          // }
          event ? event.target.complete() : '';
          //判断是否有新数据
          this.model.searchnodata = res.Results.length==0;
          if (res.Results.length < this.model.pageSize) {
             if(this.model.page>1){
              this.infiniteScroll.disabled = true;
            }
          }
        }
        else {
          this._page.alert("消息提示", "数据加载异常");
        }
        this.infiniteScroll.complete();
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this.infiniteScroll.complete();
        this._page.loadingHide();
      }
    );
  }


    //任务完成
  TaskFinish(id){
 
    this._page.confirm("确认提示", "确定完成该任务？",()=>{
        
      this.UpdateState(id);
    
    });
    
  }


UpdateState(id){
  //debugger;
  var postData = {};
  postData["id"] = id;
  postData["mcs_activitystatus"] = 1; //已完成
  postData["mcs_endtime"] = new Date();
  
  this._page.loadingShow();
  this._http.post(
    this.model.addoreditUrl,
    postData,
    (res: any) => {
      this._page.loadingHide();
      console.log(res);
      if (res.Result == true) {
        const that = this;
        this._page.alert("消息提示", "操作成功",  ()=> {
          this.doRefresh(null);
        });
      }
      else {
        this._page.alert("消息提示", "操作失败");
      }
    },
    (err: any) => {
      this._page.loadingHide();
      this._page.alert("消息提示", "操作失败");
    }
  );
}


}

