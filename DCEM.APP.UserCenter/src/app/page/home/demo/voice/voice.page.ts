import { Component, OnInit } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DCore_Http, DCore_Page } from 'app/component/typescript/dcem.core';
import * as $ from 'jquery';
@Component({
  selector: 'app-voice',
  templateUrl: './voice.page.html',
  styleUrls: ['./voice.page.scss'],
})
export class VoicePage implements OnInit {

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
  ) { }

  data={
    url:"http://106.14.27.132:8082/ocr/api/ocr/Voice",
    json:{
      FileUrl:"https://subcrmdevinapi.sokon.com/vi/test/test2.mp3",
      Type:1
    },
    mod:{
      content:"13544290760",
    }

  }

  ngOnInit() {
    this.voice(this.data.json);
  }
  //语音文本证识别方法
  voice(json){
        //this._page.loadingShow();
        this._http.postCustom(
            this.data.url,
            json,
            (res: any) => {
                console.log(res);
                if(res!=null && res.Code=="000"){
                  this.data.mod.content=res.Data;


                }
                else {
                  this._page.alert("消息提示", res.Message);
                }

                //this._page.loadingHide();
            },
            (err: any) => {
                console.log(err);
                this._page.alert("消息提示", "语音信息识别错误");
                //this._page.loadingHide();
            }
        );

  }

}
