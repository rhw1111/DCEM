import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/component/typescript/Dcem.core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public model = {
    name: 'DriveRecordList',//模块实体名称
    apiUrl: '/api/testdrive/GetDriveRecordList',//请求地址
   
    isending: false,//是否加载完成
    datalist: [],//列表数据
    params:{
        mcs_rostatus: 0,
        SearchKey: '',//搜索关键字
        Sort: '',
        PageSize: 10,
        PageIndex: 1,
    }
};

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
  ) { }

  ngOnInit() {

    this.getList(null);
  }

     //下拉刷新
doRefresh(event) {
  this.model.datalist = [];
  this.model.params.PageIndex = 1;
  this.model.isending = false;
  this.getList(event);
}
  //加载下一页
doLoading(event) {
  this.model.params.PageIndex++;
  this.getList(event);
}

//获取列表数据
getList(event) {
  this._http.postForToaken(this.model.apiUrl,
      this.model.params,
      (res: any) => {
         //debugger;
          if (res.Results !== null) {
              //绑定数据
              res.Results.forEach(item => {              
                  var obj = {}; 
                  obj["mcs_driverecordid"] = item["Attributes"].mcs_driverecordid;             
                  obj["mcs_fullname"] = item["Attributes"].mcs_fullname;
                  obj["mcs_mobilephone"] = item["Attributes"].mcs_mobilephone;
                  obj["mcs_carmodel"] = item["mcs_carmodel"].mcs_code;                  
                  obj["mcs_businesstype"] = item["Attributes"].mcs_businesstype;
                  obj["mcs_dealerid"] = item["mcs_dealerid"].mcs_code;    
                  obj["mcs_ordertime"] = item["Attributes"].mcs_ordertime;
                  obj["mcs_testdrivetime"] = item["Attributes"].mcs_testdrivetime;      
                  obj["mcs_drivestatus"] = item["Attributes"].mcs_drivestatus;    
                  // obj["mcs_rostatus"] =this.optionset.GetOptionSetNameByValue("mcs_rostatus",item["Attributes"].mcs_rostatus);              
                  this.model.datalist.push(obj);

              });
              //设置数据存储到本地
              if (this.model.params.PageIndex == 1) {
                  // this.httpService.SetDataCache(this.model.name, JSON.stringify(this.model.datalist).toString());
              }
              event ? event.target.complete() : '';
              //判断是否有新数据
              if (res.Results.length < this.model.params.PageIndex) {
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
