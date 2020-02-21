import { Component, OnInit } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
    selector: 'app-berecorded',
    templateUrl: './berecorded.page.html',
    styleUrls: ['./berecorded.page.scss'],
})
export class BerecordedPage implements OnInit {

    constructor(
        private _media: Media,
        private _file: File
    ) { }



    public filePath: any; //录音文件的名字
    public filePath2:any;
    public mediaObj: MediaObject; //录音对象
    public mediaStatusInfo: string;
    public storageDirectory:any;

    ngOnInit() {

    }


    refreshStatusInfo() {
        console.log("Duration:" + this.mediaObj.getDuration())
        this.mediaObj.getCurrentPosition().then((position) => {
            console.log("position:" + position);
        });
        this.mediaObj.getCurrentAmplitude().then((Amplitude) => {
            console.log("Amplitude:" + Amplitude);
        });
    }
    record(){
        // if (this.platform.is('ios')) {
        //     this.storageDirectory = file.documentsDirectory.replace(/^file:\/\//, '');
        //   }
        //   else if (this.platform.is('android')) {
        //     this.storageDirectory = file.dataDirectory;
        // }
        // var fileName="爱车APP录音.mp3";
        // //this.storageDirectory=this._file.dataDirectory;
        // this.storageDirectory="";
        // this._file.createFile(this.storageDirectory, fileName, true).then(() => {
        //     this.mediaObj = this._media.create(this.storageDirectory + fileName);
        //     console.log(this.mediaObj);
        //     this.mediaObj.startRecord();
        //     console.log('cache dir: ' + this._file.cacheDirectory);
        //     console.log(`start recording ${fileName}`);
        //     this.filePath=this.storageDirectory + fileName;
        //   });
    }


    startReocrd() {  //开始录音

        var directory=this._file.tempDirectory;
        var fileName = "爱车APP录音.mp3";
        //var filePath=this._file.externalApplicationStorageDirectory+"爱车APP录音.mp3";
        //var filePath=this._file.externalDataDirectory+"爱车APP录音.mp3";
        //var filePath="爱车APP录音.mp3"

        // this._file.createFile(directory, fileName, true).then(() => {
        //     this.mediaObj = this._media.create(directory + fileName);
        //     console.log(this.mediaObj);
        //     this.mediaObj.startRecord();
        //     console.log('cache dir: ' + this._file.cacheDirectory);
        //     console.log(`start recording ${fileName}`);
        //     this.filePath=directory + fileName;
        //  });
        this.mediaObj = this._media.create(directory+fileName);
        //this._file.createFile
        // this.mediaObj.onStatusUpdate.subscribe(
        //     status => console.log(status)
        // );
        // this.mediaObj.onSuccess.subscribe(
        //     () => console.log('Action is successful')
        // );
        // this.mediaObj.onError.subscribe(
        //     error => console.log('Error!', error)
        // );
        this.filePath=directory+fileName;
        this.mediaObj.startRecord();
    }

    pauseRecord() { //暂停录音
        this.mediaObj.pauseRecord();
    }

    resumeRecord() { //恢复录音(*)
        this.mediaObj.resumeRecord();
    }

    stopRecord() {  //停止录音
        this.mediaObj.stopRecord();

        //window.requestFileSystem(LocalFileSystem.TEMPORARY, 0, this.nFileSystemSuccess, fail);

    }

    nFileSystemSuccess(filesystem){

        var filePath=filesystem.root.nativeURL+this.filePath;
        this.filePath2=filePath;
    }

    release() { //释放资源
        this.mediaObj.release();
    }

    play() { //播放录音
        this.mediaObj.play();
    }

    pause() { //暂停播放
        this.mediaObj.pause();
    }

    stop() { //停止播放
        this.mediaObj.stop();
        this.mediaObj.release();
    }









}
