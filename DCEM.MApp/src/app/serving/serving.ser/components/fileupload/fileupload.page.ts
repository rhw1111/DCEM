import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid, DCore_Config } from 'app/base/base.ser/Dcem.core';
import { NavParams } from '@ionic/angular';

@Component({
    selector: 'app-fileupload',
    templateUrl: './fileupload.page.html',
    styleUrls: ['./fileupload.page.scss'],
})
export class FileuploadPage implements OnInit {

    mod = {
        data: {
            filesMap: {
            }
        }
    };

    constructor(private _config: DCore_Config) {
    }

    objectKeys = Object.keys;

    public uploader: FileUploader = new FileUploader({});

    selectedFileOnChanged(event: any) {
        console.log("go");
        console.log(event);
        console.log(event.target.value);
    }
    ngOnInit() {
        this.uploadInit();
    }

    selectFiles() {
        document.getElementById('fileInput').click();
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


}
