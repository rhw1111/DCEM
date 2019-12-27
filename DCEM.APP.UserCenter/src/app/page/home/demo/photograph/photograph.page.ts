import { Component, OnInit } from '@angular/core';
import { IonicNativePlugin } from '@ionic-native/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
    selector: 'app-orcode',
    templateUrl: './photograph.page.html',
    styleUrls: ['./photograph.page.scss'],
})
export class PhotographPage implements OnInit {


    public img = {
        scr: ""
    }

    constructor(
        private _camera: Camera
    ) {

    }

    ngOnInit() {
        this.initCamera();
    }

    public initCamera() {
        const options: CameraOptions = {
            quality: 100,   // 图片质量
            destinationType: this._camera.DestinationType.DATA_URL, // 返回类型 .FILE_URI 返回文件地址 .DATA_URL 返回base64编码
            encodingType: this._camera.EncodingType.JPEG, // 图片格式 JPEG=0 PNG=1
            mediaType: this._camera.MediaType.PICTURE, // 媒体类型
            sourceType: this._camera.PictureSourceType.CAMERA, // 图片来源  CAMERA相机 PHOTOLIBRARY 图库
            allowEdit: true, // 允许编辑
            targetWidth: 300, // 缩放图片的宽度
            targetHeight: 300, // 缩放图片的高度
            saveToPhotoAlbum: false, // 是否保存到相册
            correctOrientation: true, // 设置摄像机拍摄的图像是否为正确的方向
        };

        this._camera.getPicture(options).then((imageData) => {
            debugger;
            let base64Image = "data:image/jpeg;base64," + imageData;
            this.img.scr = base64Image;
        }, (err) => {
            console.log("初始化错误");
            console.log(err);
        });
    }

}
