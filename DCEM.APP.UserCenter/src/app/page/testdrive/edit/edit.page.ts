import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/component/typescript/Dcem.core';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  model={
    postApiUrl:'/api/changepwd/',
    postData:{
      mcs_fullname:"", //姓名
      mcs_mobilephone:"", //手机号
      mcs_carmodel:"" , // 预约车型
      mcs_businesstype: "",//业务类型
      mcs_dealerid: "",//试驾地点     
      mcs_ordertime:"", // 预约时间
      mcs_testdrivetime:"" ,// 预约时段
      isChecked:false
    },
   
  }
  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid
  ) { }

  ngOnInit() {
  }

  SureDrive(){

    debugger;
    var errMessage = "";
     if (this._valid.isNullOrEmpty(this.model.postData.mcs_fullname)) {
     errMessage += "请输入姓名<br>";
     }
     if (this._valid.isNullOrEmpty(this.model.postData.mcs_mobilephone)) {
         errMessage += "请输入手机号<br>";
     }
     if (this._valid.isNullOrEmpty(this.model.postData.mcs_carmodel)) {
         errMessage += "请选择预约车型<br>";
     }
     if (this._valid.isNullOrEmpty(this.model.postData.mcs_businesstype)) {
      errMessage += "请选择业务类型<br>";
      }
      if (this._valid.isNullOrEmpty(this.model.postData.mcs_dealerid)) {
          errMessage += "请选择试乘试驾地点<br>";
      }
      if (this._valid.isNullOrEmpty(this.model.postData.mcs_ordertime)) {
          errMessage += "请选择预约时间<br>";
      }
      if (this._valid.isNullOrEmpty(this.model.postData.mcs_testdrivetime)) {
        errMessage += "请选择预约时段<br>";
    }

      
     if (errMessage !== "") {
       this._page.presentToastError(errMessage);
       return;
     }
   
     this._page.loadingShow();
     this._http.post(
         this.model.postApiUrl, 
         this.model.postData,
         (res: any) => {
             debugger;
             this._page.loadingHide();
             if (res.Result == true) {              
                 console.log(res);                         
                 this._page.goto("/serving/home/systemsetup");
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
