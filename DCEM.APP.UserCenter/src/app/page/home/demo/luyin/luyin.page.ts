import { Component, OnInit } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-luyin',
  templateUrl: './luyin.page.html',
  styleUrls: ['./luyin.page.scss'],
})
export class LuyinPage implements OnInit {

  constructor(
    private _media: Media,
    private _file: File
) { }

    public filePath: any; //录音文件的名字
    public mediaObj: MediaObject; //录音对象
  ngOnInit() {
  }

  startRecord(){
    var directory=this._file.documentsDirectory;
    var fileName = "爱车APP录音.wav";
    this.mediaObj = this._media.create(directory+fileName);
    this.filePath=directory+fileName;
    this.mediaObj.startRecord();
  }
  stopRecord(){
    this.mediaObj.stopRecord();
  }
  payRecord(){
    this.mediaObj.play();
  }

}
