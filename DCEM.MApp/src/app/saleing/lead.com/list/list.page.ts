import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { debug } from 'util';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public mod:any = {
    apiUrl: '',
    data: [],
    searchData: { 
        pageindex: 1,
        pagesize:10,
        dealerid:this._userinfo.GetDealerid()
    },
    allTotalCount:0
};
  constructor(  
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _userinfo:Storage_LoginInfo) { 
    this.mod.apiUrl = "/api/Originalclue/getlist";
  }

  ngOnInit() {
    debugger;
    this.listOnBind();
  }
  searchOnClick() {
    this.listOnBind();
}
listOnBind() {
  this._page.loadingShow();
  this.mod.data = [];
  this._http.get(
      this.mod.apiUrl,
      {
          params: {
              pagesize: this.mod.searchData.type,
              pageindex: this.mod.searchData.pageindex,
              dealerid: "344101CE-29EB-E911-A821-F2106C4094A1"//this.mod.searchData.dealerid,
          }
      },
      (res: any) => {
        debugger;
          if (res.Results !== null) {
       
              for (var key in res.Results) {
                  var obj = {}; 

                  this.mod.data.push(obj);
              }

              this.mod.allTotalCount = res.ALLTotalCount;


              this._page.loadingHide();
          }
          else {
              this._page.alert("消息提示", "客户数据加载异常");
              this._page.loadingHide();
          }
      },
      (err: any) => {
          this._page.alert("消息提示", "客户数据加载异常");
          this._page.loadingHide();
      }
  );
}
}
