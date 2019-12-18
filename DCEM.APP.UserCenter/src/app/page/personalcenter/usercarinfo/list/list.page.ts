import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/component/typescript/dcem.core';
import { IonInfiniteScroll } from '@ionic/angular';
import { OptionSetService } from 'app/component/typescript/optionset.service'; 
import { Storage_LoginInfo } from "../../../../component/typescript/logininfo.storage";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public model = { 
    apiUrl: 'api/uc-usercarinfo/querylist',//请求地址 
    isending: false,//是否加载完成
    datalist: [] ,
    datanum:0
  };
  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private optionset: OptionSetService,
    private _logininfo: Storage_LoginInfo
  ) { }


  ngOnInit() { 
    this.getList();
  }

   
  //获取列表数据
  getList() {
    this._page.loadingShow(); 
    this._http.get(
      this.model.apiUrl,
      {
          params: {
             mcs_userid: this._logininfo.GetSystemUserId()
          }
      },
      (res: any) => { 
        if (res.Results !== null) { 
          var i=0;
          //绑定数据
          res.Results.forEach(item => {
            i++;
            var obj = {};
            obj["pkid"] = i; //数量
            obj["mcs_name"] = item["Attributes"].mcs_name; //vin
            obj["mcs_activestate"] = item["Attributes"].mcs_activestate;//激活状态
            obj["mcs_plate"] = item["Attributes"].mcs_plate;//车牌
            obj["mcs_username"] = item["Attributes"]["bb.mcs_fullname"];//车主名称
            obj["mcs_cardid"] = item["Attributes"]["mcs_cardid"];//证件号码
            obj["carmodel"] = item["Attributes"]["cc.mcs_name"];//车型
            obj["mcs_salesdate"] = item["Attributes"]["bb.mcs_salesdate"];//销售日期
            obj["mcs_maintainnum"] = item["Attributes"]["bb.mcs_maintainnum"];//保养次数
            obj["mcs_nextmaintainat"] = item["Attributes"]["bb.mcs_nextmaintainat"];//下次保养时间
            obj["mcs_nextmaintainmileage"] = item["Attributes"]["bb.mcs_nextmaintainmileage"];//下次保养里程
            this.model.datalist.push(obj); 
          }); 
          this.model.datanum=i;
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
