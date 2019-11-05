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
        userId:this._userinfo.GetSystemUserId(),
        dealerid:"3EFBFFF6-EF1A-E911-A821-A4A314186A20",//this._userinfo.GetDealerid()
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
    this.listOnBind();
  }
  searchOnClick() {
    this.listOnBind();
  }  
  searchOnKeyup(event: any) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
        this.listOnBind();
    }
  }
listOnBind() {
  this._page.loadingShow();
  this.mod.data = [];
  this._http.post(
      this.mod.apiUrl,
      this.mod.searchData,
      (res: any) => { 
          if (res.Results !== null) {
            var data=res.originalclues;
              for (var i in data) { 
                var attr=data[i]["Attributes"];
                  var obj = {}; 
                  obj["username"]=attr["fullname"];
                  if(attr["mcs_gender@OData.Community.Display.V1.FormattedValue"]==null)
                  {
                    obj["gender"]="--";
                  }
                  else{ 
                  obj["gender"]=attr["mcs_gender@OData.Community.Display.V1.FormattedValue"];
                  }
                  obj["mobilephone"]=attr["mobilephone"];
                  obj["clues"]=attr["_mcs_terminalid_value@OData.Community.Display.V1.FormattedValue"];
                  obj["id"]=attr["Id"];
                  this.mod.data.push(obj);
              }
              this._page.loadingHide();
          }
          else {
              this._page.alert("消息提示", "原始线索数据加载异常");
              this._page.loadingHide();
          }
      },
      (err: any) => {
          this._page.alert("消息提示", "原始线索数据加载异常");
          this._page.loadingHide();
      }
  );
}
}
