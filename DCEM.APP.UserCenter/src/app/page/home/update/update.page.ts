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
        this.isUpdate();
    }

    isUpdate() {
        this.appVersion.getVersionNumber().then((value: any) => {
            this.showAlert();

        }).catch(err => {
            console.log('getVersionNumber:' + err);
        });
    }

    async showAlert() {
 
        const alert = await this.alertController.create({
            header: '����!',
            message: '�����°汾,�Ƿ�����������',
            buttons: [
                {
                    text: 'ȡ��',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {

                    }
                }, {
                    text: 'ȷ��',
                    handler: () => {
                        this.downloadApp();
                    }
                }
            ]
        });
        await alert.present();
    }

    downloadApp() {
        //4.����apk
        const targetUrl = 'http://127.0.0.1:8080/test.apk';
        const fileTransfer: FileTransferObject = this.transfer.create();

        console.log(this.file.dataDirectory);   //��ȡ��ǰӦ�õİ�װ��home��Ŀ¼     1��Ӧ�ð�����Ҫһ��   2�������İ��İ汾��Ҫ���ڵ�ǰӦ�õİ汾��   3��ǩ��Ҫһ��    4��sdk Ҫ��װ

        fileTransfer.download(targetUrl, this.file.dataDirectory + 'aaa.apk').then((entry) => {
            //6��������ɵ��ô�Ӧ��
            this.fileOpener.open(entry.toURL(),
                'application/vnd.android.package-archive')
                .then(() => {
                    console.log('File is opened')
                })
                .catch(e => {
                    console.log('Error openening file', e)
                });


        }, (error) => {
            alert(JSON.stringify(error));
        });


        //5����ȡ���ؽ���    
        var oProgressNum = document.getElementById('progressnum');
        fileTransfer.onProgress((event) => {
            let num = Math.ceil(event.loaded / event.total * 100);  //ת����1-100�Ľ���
            if (num === 100) {
                oProgressNum.innerHTML = '�������';
            } else {
                oProgressNum.innerHTML = '���ؽ��ȣ�' + num + '%';

            }
        });

    }


}
