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
    info: {
        id:"",
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
          this.model.info.id = data['id'];
          this.pageOnBind(this.model.info.id);
      } 
  });
  }
  pageOnBind(id: any) {
    this._page.loadingShow();
    this._http.get(
        this.model.apiUrlDetail,
        {
            params: {
                entityid: id,
            }
        },
        (res: any) => {
            if (res !== null) {
                
            }
            else {
                this._page.alert("消息提示", "预约单加载异常");
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
