import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    constructor(
        private httpClient: HttpClient,
        private alertCtr: AlertController,
    ) {
    }

    ngOnInit() {
        const httpGet = this.httpClient.get('https://subcrmdevapi.sokon.com/dcem/api/test/Test1',
            {
                params: {
                }
            });


        httpGet.subscribe(
            (res: any) => {
                this.presentAlert('��Ϣ��ʾ', '�������ֻ�����');
            },
            (err: any) => {


            });
    }


    // ������ʾ
    presentAlert(header: any, message: any) {
        const alert = this.alertCtr.create({
            header,
            message,
            buttons: ['ȷ��']
        });
        alert.then(a => {
            a.present();
        });
    }
}
