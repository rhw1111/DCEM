﻿import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid, DCore_Config } from 'app/base/base.ser/Dcem.core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
    selector: 'app-select-file-edit',
    templateUrl: './select-file-edit.component.html',
    styleUrls: ['./select-file-edit.component.scss'],
})
export class SelectFileEditComponent implements OnInit {

    mod = {
        data: {
            filesMap: {
            },
            fileArray: []
        }


    };

    constructor(
        private _config: DCore_Config,
        private _modalCtrl: ModalController,
        public navParams: NavParams
    ) {

        for (let fileItem of this.navParams.data.fileArray) {
            console.log(fileItem);
            var mapKey = fileItem.fileName;
            var obj = {}
            obj["fileName"] = fileItem.fileName;
            obj["fileSize"] = fileItem.fileSize;
            obj["url"] = fileItem.url;
            obj["progress"] = 1;
            this.mod.data.filesMap[mapKey] = obj;
        }

    }

    objectKeys = Object.keys;

    public uploader: FileUploader = new FileUploader({});


    selectFiles() {
        document.getElementById('fileInput').click();
    }

    selectedFileOnChanged(event: any) {
        console.log("go");
        console.log(event);
        console.log(event.target.value);
    }
    ngOnInit() {
        this.uploadInit();
    }



    public uploadInit() {
        let host = this._config.getDomain() + "/Api/Files/Upload";
        let options = {
            url: host,
            removeAfterUpload: true,
            method: "POST",
            itemAlias: 'multfile',
        };
        this.uploader = new FileUploader(options);
        // 文件上传之前监听事件
        this.uploader.onBeforeUploadItem = (fileItem: any) => {

            var mapKey = fileItem.file.name;
            fileItem.method = "POST";
            //fileItem.alias = Math.random().toString();
            fileItem.withCredentials = false //解决localhost跨域

            console.log(fileItem);
            var obj = {}
            obj["fileName"] = fileItem.file.name;
            obj["fileSize"] = fileItem.file.size;
            obj["url"] = "";
            obj["progress"] = 0;
            this.mod.data.filesMap[mapKey] = obj;
            console.log(mapKey);
        };
        // 文件上传进度监听事件
        this.uploader.onProgressItem = (fileItem: any, progress: any) => {
            console.log(progress);
            var mapKey = fileItem.file.name;
            this.mod.data.filesMap[mapKey]["progress"] = progress / 100;

        };
        // 文件上传成功监听事件
        this.uploader.onSuccessItem = (fileItem: any, response: string, status: number) => {
            var mapKey = fileItem.file.name;
            this.mod.data.filesMap[mapKey]["url"] = this._config.getDomain() + "/FilesDir/" + fileItem.file.name;

            console.log("上传成功");

        };
        this.uploader.onErrorItem = (fileItem: any, response: string, status: number, headers: any) => {
            console.log("上传失败");
            console.log(response);
            console.log(status);
        };
        // 文件上传附带的其他额外数据
        this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
            form.append('name3', "test");
        };
    }

    uploadVideo($event) {
        this.uploader.uploadAll();
    }

    dismissModal() {
        this._modalCtrl.dismiss({
            command: 2,
        });
    }

    //移除文件
    fileDeleteClick(mapkey) {
        delete this.mod.data.filesMap[mapkey];
    }

    //确定
    okClick() {
        for (var key in this.mod.data.filesMap) {
            this.mod.data.fileArray.push(this.mod.data.filesMap[key]);
        }

        this._modalCtrl.dismiss({
            command: 1,
            fileArray: this.mod.data.fileArray
        });
    }

    //取消
    cancelClick() {
        this._modalCtrl.dismiss({
            command: 2,
        });
    }
}
