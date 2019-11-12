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
    apiUrlDetail: '/api/delivery/getorderpay', 
    id:"",
    info: { 
        code:"",
        paycategory: "",
        amount: "", 
        payon:"",
        batchcode:"",
        itemname: "",
        itemcode: "",
        remark:""
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
                this.model.info.amount=attr["mcs_amount@OData.Community.Display.V1.FormattedValue"];
                this.model.info.code=attr["mcs_code"];
                this.model.info.paycategory=attr["mcs_paycategory@OData.Community.Display.V1.FormattedValue"];
                this.model.info.payon=attr["mcs_payon@OData.Community.Display.V1.FormattedValue"];
                this.model.info.batchcode=attr["mcs_batchcode"];
                this.model.info.itemname=attr["mcs_itemname"];
                this.model.info.itemcode=attr["mcs_itemcode"];
                this.model.info.remark=attr["mcs_remark"];
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

}
