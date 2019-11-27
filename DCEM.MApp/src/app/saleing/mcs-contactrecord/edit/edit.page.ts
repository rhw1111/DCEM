import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  model={
  postApiUrl:'/api/only-lead/AddOrEditLogcall',
  detailApiUrl:'/api/only-lead/GetLogCallById',

  postData:{
    mcs_content:"",
    mcs_results:"",
    mcs_visittime:null,
    systemUserId: "",//当前用户id
    mcs_logcallid:"",
    mcs_onlyleadid:""  //唯一线索ID
  }
}
  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid,
    private activeRoute: ActivatedRoute,
    private _logininfo: Storage_LoginInfo

  ) { }

  ngOnInit() {
    //debugger;
    this.activeRoute.queryParams.subscribe((params: Params) => {

      this.model.postData.systemUserId = this._logininfo.GetSystemUserId(); 
      if (params['id'] != null && params['id'] != undefined) {  //唯一线索主键id

          this.model.postData.mcs_onlyleadid = params['id'];         
      }
      if (params['mcslogcallid'] != null && params['mcslogcallid'] != undefined) {  //联络任务 主键id

        this.model.postData.mcs_logcallid = params['mcslogcallid'];
        this.pageOnBind(params['mcslogcallid']);  
    }

   });
  
  }
   
//根据主键加载联络记录(logcall)
pageOnBind(id: any) {
   //debugger;
  this._page.loadingShow();
  this._http.get(
      this.model.detailApiUrl,
      {
          params: {
             mcs_logcallid: id,            
             systemuserid: this.model.postData.systemUserId,
          }
      },
      (res: any) => {
          debugger;
          if (res !== null) {
              if (res.Results !== null) {                                   
                      this.model.postData.mcs_content = res.Results[0]["Attributes"]["mcs_content"];
                      this.model.postData.mcs_visittime = res.Results[0]["Attributes"]["mcs_visittime"];
                      this.model.postData.mcs_results = res.Results[0]["Attributes"]["mcs_results"];                      
                      this.model.postData.mcs_onlyleadid = res.Results[0]["Attributes"]["_mcs_onlyleadid_value"];                                  
              }
              else{
                this._page.alert("消息提示", "数据加载异常");

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


   public saveLogcall(){

     var errMessage = "";
      if (this._valid.isNullOrEmpty(this.model.postData.mcs_content)) {
      errMessage += "请输入回访内容<br>";
      }
      if (this._valid.isNullOrEmpty(this.model.postData.mcs_results)) {
          errMessage += "请输入回访结果<br>";
      }
      if (this._valid.isNullOrEmpty(this.model.postData.mcs_visittime)) {
          errMessage += "请选择回访时间<br>";
      }
       
      if (errMessage !== "") {
        this._page.presentToastError(errMessage);
        return;
      }

      this._page.loadingShow();
      this._http.postForToaken(
          this.model.postApiUrl, this.model.postData,
          (res: any) => {
              //debugger;
              this._page.loadingHide();
              if (res.Result == true) {              
                  console.log(res);              
                  //this._shareData.delete(this.mod.shareDataKey);
                  this._page.goto("/saleing/contactrecord/success", {id: this.model.postData.mcs_onlyleadid });
              }
              else {
                  this._page.alert("消息提示", res.Description);
              }
          },
          (err: any) => {
              this._page.loadingHide();
              this._page.alert("消息提示", "操作失败");
          }
      );

   }

}
