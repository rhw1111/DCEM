import { Component, OnInit } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';
import { DCore_Http, DCore_Page } from 'app/component/typescript/dcem.core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject, FileUploadResult } from '@ionic-native/file-transfer/ngx';	
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
    public fileName:any="爱车APP录音.wav";
    public base64File:any;//文件的base64


  ngOnInit() {
  }

  startRecord(){
    var directory=this._file.externalApplicationStorageDirectory;
    // this._file.createFile(directory, fileName, true).then(() => {
    //     this.mediaObj = this._media.create(directory + fileName);
    //     this.mediaObj.startRecord();
    //     this.filePath=directory + fileName;
    // });


    this.mediaObj = this._media.create(directory+this.fileName);
    this.filePath=directory+this.fileName;
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

    this.getFileContentAsBase64(this.filePath,function(base64){
      var audio = base64.split(',')[1];  
      this.base64File=base64;
      
    });


    return false;
    //还没有实现上传功能，下面代码有误

    // let options: FileUploadOptions = {											
    //   fileKey: "file",											
    //   fileName: this.fileName,											
    //   mimeType: "audio/wav"											
    // };
    // const ftObj: FileTransferObject = this.ft.create();											
    // ftObj.upload(this._file.externalApplicationStorageDirectory.replace(/^file:\/\//, '') + this.fileName,											
    //   encodeURI("http://106.14.121.65:8082/dcem/Api/Files/Upload"), options).then(											
    //   (data) => {											
    //     alert("File upload success!");											
    //   },											
    //   (err) => {											
    //     alert("File upload fail!");											
    //   });	
  }

  //转base64的代码
  getFileContentAsBase64(path,callback){
    //window.resolveLocalFileSystemURL(path, gotFile, fail);
    //this._file.resolveLocalFilesystemUrl(path);
    this._file.resolveLocalFilesystemUrl(path).then((entry) => {
      gotFile(entry); 
    });

    function fail(e) {
      alert('Cannot found requested file');
    }

    function gotFile(fileEntry) {
      fileEntry.file((file) => {
        var reader = new FileReader();
        reader.onloadend = function(e) {
          var content = this.result;
          callback(content);
        };
        // The most important point, use the readAsDatURL Method from the file plugin
        reader.readAsDataURL(file);
      });
    }
  }
  

}
