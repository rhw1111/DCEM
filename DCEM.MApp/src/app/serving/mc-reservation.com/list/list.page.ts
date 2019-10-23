import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    public ListAll: any = [];

    private isTrue: string;
    private spanColor1: string;
    private spanColor2: string;
    private spanColor3: string;

    constructor(public router: Router, private navCtrl: NavController, private httpService: HttpService) { }

    ngOnInit() {
        this.showlist(0);
  }

    showDetail(item) {
        this.router.navigate(['detail'], {
            queryParams: {
                Item: JSON.stringify(item)
            }
        });
    }

    showlist(id) {
        var response = this.httpService.getForToaken("/api/appointment-info/GetList?status=" + id, null);
        response.subscribe((res) => {
            if (res != null && res.success == true) {
                this.ListAll = res.datas;
                this.spanColor1 = "";
                this.spanColor2 = "";
                this.spanColor3 = "";
                switch (id) {
                    case 0:
                        this.spanColor1 = "success";
                        break;
                    case 1:
                        this.spanColor2 = "success";
                        break;
                    case 2:
                        this.spanColor3 = "success";
                        break;
                }
            }
        });
    }
}
