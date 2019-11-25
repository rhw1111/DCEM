import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import dateformat from 'silly-datetime';
import { OptionSetService } from '../../saleing.ser/optionset.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public tab: any = "infolist";
  model = {
    apiUrlInfo: '/api/Installation/GetInstallationorderDetail',
    infoId:"",
    data: {},//详情数据集合
    infolistFlag:true,
    userlistFlag:true,
    processlistFlag:true,
  }

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    private optionset:OptionSetService
  ) { }

  ngOnInit() {
    if(this.model.infoId==""){
      this.activeRoute.queryParams.subscribe((params: Params) => {
        if (params['id'] != null && params['id'] != undefined) {
            this.model.infoId=params['id'];
        }
     });
    }
    this.infolistFun();
 
  }
  infolistFun(){
    if(this.model.infolistFlag){
      this.model.infolistFlag=false;
      this.pageOnBind();
    }
  }
  userlistFun(){
    if(this.model.infolistFlag){
      this.model.userlistFlag=false;
    }
  }

  processlistFun(){
    if(this.model.processlistFlag){
      this.model.processlistFlag=false;
    }
  }

  //加载勘测单详情
  pageOnBind() {
    console.log("id:"+this.model.infoId);
    //debugger;
    this._page.loadingShow();
    this._http.postForToaken(
      this.model.apiUrlInfo,
      {
        Guid:this.model.infoId
      },
      (res: any) => {
        console.log("id:"+this.model.infoId);
          console.log(res);
          if(res!=null && res.Attributes!=null)
            this.model.data=res.Attributes;
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }


  FormatToDateTime(date) {
    if (date != null && date != undefined) {
        return dateformat.format(date, 'YYYY-MM-DD hh:mm:ss');
    }
    else {
        return '';
     }
  }
  FormatToDate(date) {
    if (date != null && date != undefined) {
        return dateformat.format(date, 'YYYY-MM-DD');
    }
    else {
        return '';
     }
  }
  getLookupName(name){

    return "_"+name+"_value@OData.Community.Display.V1.FormattedValue";
  }
  getOptionName(name){
    return name+"@OData.Community.Display.V1.FormattedValue";
  }
}
