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
    public mediaObj: MediaObject; //录音对象
    public mediaStatusInfo: string;

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


    startReocrd() {  //开始录音

        
        var filePath = this._file.tempDirectory + "test.wav";
        console.log(filePath);
        this.mediaObj = this._media.create(filePath);

        console.log(filePath);
        console.log(this.mediaObj);   
        this.mediaObj.onStatusUpdate.subscribe(
            status => console.log(status)
        );
        this.mediaObj.onSuccess.subscribe(
            () => console.log('Action is successful')
        );
        this.mediaObj.onError.subscribe(
            error => console.log('Error!', error)
        );



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
