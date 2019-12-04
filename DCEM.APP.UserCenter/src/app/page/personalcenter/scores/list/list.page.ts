import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from '../../../../component/typescript/dcem.core';
import { Storage_LoginInfo } from "../../../../component/typescript/logininfo.storage";
import { OptionSetService } from "../../../../component/typescript/optionset.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private _http: DCore_Http,
    private _page: DCore_Page,
    private _optionset: OptionSetService,
    private _logininfo: Storage_LoginInfo) { }

  public model=
  {
    apiUrl:"api/user/getuserscore",
    isending:false,
    data:[],
    balance:0,
    search:{
      id: "0010D704-7723-4B75-B334-4A9620769F68",//this._logininfo.GetSystemUserId()}, 
      pageindex: 1,
      pagesize:10,
    }
  }
  public scorerecord=[];
  ngOnInit() {
    this.listOnBind(null);
  }
  //加载下一页
doLoading(event) {  
  this.model.isending = false; 
  this.listOnBind(event); 
}
listOnBind(event) {
    this._http.postForToaken(
      this.model.apiUrl,
     this.model.search,
      (res: any) => {
        if (res !== null) {
          var data = res.scores;
          for (var i in data) {
            var attr = data[i]["Attributes"];
            var obj = {};
            obj["id"] = data[i]["Id"];
            obj["name"] = attr["mcs_integraltype@OData.Community.Display.V1.FormattedValue"];
            var optvalue = this._optionset.GetOptionSetValueByName("mcs_integraltype",obj["name"]);
            obj["num"] = optvalue+""+attr["mcs_num"];
            obj["time"] = attr["createdon@OData.Community.Display.V1.FormattedValue"]; 
            this.model.data.push(obj);
          }
          this.model.balance = res.balance;
        }
        else {
          this._page.alert("消息提示", "用户积分信息加载异常");
        }
       
      },
      (err: any) => {
        this._page.alert("消息提示", "用户积分信息加载异常"); 
      }
    );

  }
}
