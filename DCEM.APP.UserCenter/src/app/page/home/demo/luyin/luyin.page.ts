import { Component, OnInit } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';
import { DCore_Http, DCore_Page } from 'app/component/typescript/dcem.core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject, FileUploadResult } from '@ionic-native/file-transfer/ngx';	
import 'hammerjs';
@Component({
  selector: 'app-luyin',
  templateUrl: './luyin.page.html',
  styleUrls: ['./luyin.page.scss'],
  providers: [FileTransfer, FileTransferObject]	
})
export class LuyinPage implements OnInit {

  constructor(
    private _media: Media,
    private _file: File,
    private ft:FileTransfer,
    private _http: DCore_Http,
    private _page: DCore_Page,
) { }

    public filePath: any; //录音文件的名字
    public mediaObj: MediaObject; //录音对象
    public fileName:any="aicheappvoice.wav";
    public base64File:any;//文件的base64
    public directory:any;
    public entry:any;

    public phone="13544290760";
    public VoiceContent:any="";//语音识别内容
    public _startVoice=false;//是否开始录音
    public voiceTit="长按录音";
    public style:any={
      ico1:true,
      ico2:false,
      click:false,
      loading:false
    }

  ngOnInit() {
    //this.addLogcall();
  }

  //开始录音
  startVoice(){
    if(!this._startVoice){
      this.style.ico1=false;
      this.style.ico2=true;
      this.style.click=true;
      this._startVoice=true;
      this.voiceTit="正在录音…";
      this.fileName="aiche-"+this.guid()+".wav";
      this.startRecord();
    }
  }
  //结束录音
  stopVoice(){
    
    this.style.ico1=true;
    this.style.ico2=false;
    this.style.click=false;
    this._startVoice=false;
    this.voiceTit="长按录音";
    setTimeout(() => {
      this.stopRecord();
      this.uploadRecord();
    }, 200);
  }
  blurVoie(){
    this.style.ico1=true;
    this.style.ico2=false;
    this.style.click=false;
    this._startVoice=false;
    this.stopRecord();
    this.uploadRecord();
    this.voiceTit="长按录音";
  }

  startRecord(){
    this.directory=this._file.externalApplicationStorageDirectory;
    // this._file.createFile(directory, fileName, true).then(() => {
    //     this.mediaObj = this._media.create(directory + fileName);
    //     this.mediaObj.startRecord();
    //     this.filePath=directory + fileName;
    // });


    this.mediaObj = this._media.create(this.directory+this.fileName);
    this.filePath=this.directory+this.fileName;
    this.mediaObj.startRecord();
  }
  stopRecord(){
    this.mediaObj.stopRecord();
    this.mediaObj.release();
  }
  payRecord(){
    this.mediaObj.play();
  }
  uploadRecord(){

    this.style.loading=true;

    let options: FileUploadOptions = {											
      fileKey: "file",											
      fileName: this.fileName,											
      mimeType: "audio/wav"											
    };
    const ftObj: FileTransferObject = this.ft.create();			
    //this.entry=ftObj;								
    ftObj.upload(this.directory.replace(/^file:\/\//, '') + this.fileName,											
      encodeURI("http://106.14.121.65:8082/dcem/Api/Files/Upload"), options).then(											
      (data) => {		
        this.base64File="http://106.14.121.65:8082/dcem/FilesDir/"+this.fileName;
        this.voice();
        //alert("File upload success!");											
      },											
      (err) => {											
        alert("File upload fail!");	
        this.style.loading=false;										
      });	
  }
  //语音文本证识别方法
  voice(){
    var json={
      FileUrl:this.base64File
    }
    //this._page.loadingShow();
    this._http.postCustom(
        "https://subcrmuatapi.sokon.com/ocr/api/ocr/Voice",
        json,
        (res: any) => {
            console.log(res);
            if(res!=null && res.Code=="000"){
              this.entry=res.Data;
              this.VoiceContent=res.Data;
              this.addLogcall();
            }
            else {
              this._page.alert("消息提示", res.Message);
            }

            this.style.loading=false;	
        },
        (err: any) => {
            console.log(err);
            this._page.alert("消息提示", "语音信息识别错误");
            this.style.loading=false;	
        }
    );
  }
  guid() {
    function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  //插入logcall
  addLogcall(){
    var json={
      phone:this.phone,
      content:this.VoiceContent
    }
    this._http.post(
      "/api/vehnetwork/voice",
      json,
      (res: any) => {
          console.log("logcall数据插入成功："+res);
      },
      (err: any) => {
          this._page.alert("消息提示", "logcall数据插入失败");
      }
  );

  }
}
