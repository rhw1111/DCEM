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
                this.presentAlert('消息提示', '请输入手机号码');
            },
            (err: any) => {


            });
    }


    // 弹出提示
    presentAlert(header: any, message: any) {
        const alert = this.alertCtr.create({
            header,
            message,
            buttons: ['确定']
        });
        alert.then(a => {
            a.present();
        });
    }
}
