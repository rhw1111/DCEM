import { Component, OnInit } from '@angular/core'; 
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit { 

  constructor(  
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    private _userinfo:Storage_LoginInfo) { 
  }
  public model = { 
    apiUrlDetail: '/api/Originalclue/get', 
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
        score:"",
        describe:""
    }
};
  ngOnInit() { 
    this.activeRoute.queryParams.subscribe((data: Params) => {
      if (data['id'] != null && data['id'] != undefined) { 
          this.model.id = data['id'];
          this.pageOnBind(this.model.id);
      } 
  });
  }
  pageOnBind(id: any) { 
    this._page.loadingShow();
    this._http.post(
      this.model.apiUrlDetail,
      {'id':this.model.id,'userid': this._userinfo.GetSystemUserId()}, 
        (res: any) => {
            if (res !== null) {
              var attr=res["Attributes"];
                this.model.info.username=attr["fullname"];
                this.model.info.mobile=attr["mobilephone"];
                this.model.info.clues=attr["_mcs_terminalid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.info.gender=attr["mcs_gender@OData.Community.Display.V1.FormattedValue"];
                this.model.info.mail=attr["emailaddress1"];
                this.model.info.province=attr["_mcs_provinceid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.info.city=attr["_mcs_cityid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.info.area=attr["_mcs_districtid_value@OData.Community.Display.V1.FormattedValue"];
                this.model.info.describe=attr["description"];
                this.model.info.score=attr["mcs_accountpoints"];
            }
            else {
                this._page.alert("消息提示", "原始线索详情加载异常");
            }
            this._page.loadingHide(); 
        },
        (err: any) => {
            this._page.alert("消息提示", "原始线索详情加载异常");
            this._page.loadingHide();
        }
    );

}

}
