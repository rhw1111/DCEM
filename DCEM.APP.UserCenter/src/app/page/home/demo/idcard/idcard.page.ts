import { Component, OnInit } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DCore_Http, DCore_Page } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';
@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.page.html',
  styleUrls: ['./idcard.page.scss'],
})
export class IdcardPage implements OnInit {

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
  ) { }

  data={
      url:"http://106.14.27.132:8082/ocr/api/ocr/IdCard",
    json1:{
      FileUrl:"D:\\Publish\\WebSite\\API\\OCR\\img\\身份证-正面.jpg",
      Type:1
    },
    json2:{
      FileUrl:"D:\\Publish\\WebSite\\API\\OCR\\img\\身份证-背面.jpg",
      Type:2
    },
    mod:{
      xm:"",
      idcard:"",
      sex:"",
      sr:"",
      minzu:"",
      zz:"",
      qfrq:"",
      sxrq:"",
      qfjg:""
    }

  }

  ngOnInit() {
    //身份证正面
    this.idCard(this.data.json1);
    //身份证背面
    this.idCard(this.data.json2);
  }
  //身份证识别方法
  idCard(json){
        //this._page.loadingShow();
        this._http.postCustom(
            this.data.url,
            json,
            (res: any) => {
                console.log(res);
                if(res!=null && res.Code=="000"){
                  var item=res.Data;
                  if(json.Type==1){
                    this.data.mod.xm=item["姓名"];
                    this.data.mod.idcard=item["公民身份号码"];
                    this.data.mod.sex=item["性别"];
                    this.data.mod.sr=item["出生"];
                    this.data.mod.zz=item["住址"];
                    this.data.mod.minzu=item["民族"];
                  }
                  if(json.Type==2){
                    this.data.mod.qfrq=item["签发日期"];
                    this.data.mod.sxrq=item["失效日期"];
                    this.data.mod.qfjg=item["签发机关"];

                  }


                }
                else {
                  this._page.alert("消息提示", res.Message);
                }

                //this._page.loadingHide();
            },
            (err: any) => {
                console.log(err);
                this._page.alert("消息提示", "身份证信息识别错误");
                //this._page.loadingHide();
            }
        );

  }

}
