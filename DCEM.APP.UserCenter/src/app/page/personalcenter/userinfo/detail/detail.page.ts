import { Component, OnInit } from '@angular/core';
import { DCore_Http,DCore_Page } from '../../../../component/typescript/dcem.core';
import { Storage_LoginInfo } from "../../../../component/typescript/logininfo.storage";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor( private _http: DCore_Http,
    private _page: DCore_Page,
    private _logininfo: Storage_LoginInfo){ }

  ngOnInit() {
    this.pageOnBind();
  }
  public model = { 
    apiUrlDetail: 'api/user/getuserdetail', 
    id:"",
    info: { 
        username:"",
        mobile: "",
        clues: "", 
        gender:"",
        mail:"",
        province: "",
        city: "",
        area:"", 
        describe:""
    }
};

pageOnBind() { 
  this._page.loadingShow();
  this._http.postForToaken(
    this.model.apiUrlDetail,
    {'id':"804BD218-C35B-4300-AEC8-985DE405CBC6"},//this._logininfo.GetSystemUserId()}, 
      (res: any) => { 
          if (res !== null) {
            var attr=res["Attributes"];
             this.model.info.gender=attr["mcs_gender@OData.Community.Display.V1.FormattedValue"];
             this.model.info.mobile=attr["mcs_phone"];
             this.model.info.mail=attr["mcs_email"];
             this.model.info.username=attr["mcs_nickname"];
          }
          else {
              this._page.alert("消息提示", "原始线索编辑信息加载异常");
          }
          this._page.loadingHide(); 
      },
      (err: any) => {
          this._page.alert("消息提示", "原始线索编辑信息加载异常");
          this._page.loadingHide();
      }
  );

}

saveOnClick()
{
  this._page.goto("/personalcenter/userinfo/edit");
}
}
