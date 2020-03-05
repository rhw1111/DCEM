import { Component, OnInit } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { File } from '@ionic-native/file/ngx';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-update',
    templateUrl: './update.page.html',
    styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

    constructor(
        private file: File,
        private transfer: FileTransfer,
        private appVersion: AppVersion,
        private fileOpener: FileOpener,
        public alertController: AlertController
    ) { }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        debugger;
        this.isUpdate();
    }

    isUpdate() {
        this.appVersion.getVersionNumber().then((value: any) => {
            console.log(value);
            this.showAlert();

        }).catch(err => {
            console.log('getVersionNumber:' + err);
        });
    }

    async showAlert() {

        const alert = await this.alertController.create({
            header: '升级!',
            message: '发现新版本,是否立即升级？',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {

                    }
                }, {
                    text: '确认',
                    handler: () => {
                        this.downloadApp();
                    }
                }
            ]
        });
        await alert.present();
    }

    downloadApp() {

        //4.下载apk
        const targetUrl = 'http://106.14.27.132:8083/app-debug.apk';
        const fileTransfer: FileTransferObject = this.transfer.create();

        console.log(this.file.dataDirectory);   //获取当前应用的安装（home）目录     1、应用包名称要一致   2、升级的包的版本号要大于当前应用的版本号   3、签名要一致    4、sdk 要安装

        fileTransfer.download(targetUrl, this.file.dataDirectory + 'dcem.apk').then((entry) => {
            debugger;
            //6、下载完成调用打开应用
            this.fileOpener.open(entry.toURL(),
                'application/vnd.android.package-archive')
                .then(() => {
                    debugger;
                    console.log('File is opened')
                })
                .catch(e => {
                    console.log('Error openening file', e)
                });


        }, (error) => {
            alert(JSON.stringify(error));
        });


        //5、获取下载进度    
        var oProgressNum = document.getElementById('progressnum');
        fileTransfer.onProgress((event) => {
            let num = Math.ceil(event.loaded / event.total * 100);  //转化成1-100的进度
            if (num === 100) {
                oProgressNum.innerHTML = '下载完成';
            } else {
                oProgressNum.innerHTML = '下载进度：' + num + '%';

            }
        });

    }


}
