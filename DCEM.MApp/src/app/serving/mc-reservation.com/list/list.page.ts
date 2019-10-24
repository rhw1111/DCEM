import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../base/base.ser/http-service.service';
import { NavController, NavParams } from '@ionic/angular';
import { Dcem } from 'app/base/base.ser/Dcem.core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    mod = {
        apiUrl: '',
        data: []
    };

    constructor(
        public router: Router,
        private _http: Dcem.Core.Http,
        private _page: Dcem.Core.Page
    ) { this.mod.apiUrl = "/api/appointment-info/GetList";}

    ngOnInit() {
        this.showlist("");
  }

    showlist(id) {
        this._page.loadingShow();
        this._http.get(
            this.mod.apiUrl + "?status=" + id +"&search=",
            {},
            (res: any) => {
                if (res.Results !== null) {
                    //console.log('get res=' + res.data);
                    this.mod.data = res.data;
                    this._page.loadingHide();
                }
                else {
                    this._page.alert("消息提示", "客户数据加载异常");
                    this._page.loadingHide();
                }
            },
            (err: any) => {
                this._page.alert("消息提示", "客户数据加载异常");
                this._page.loadingHide();
            }
        );
    }

    //showlist(id) {
    //    this._page.loadingShow();
    //    var response = this.httpService.getForToaken("/api/appointment-info/GetList?status=" + id +"&search=", null);
    //    response.subscribe((res) => {
    //        if (res != null && res.success == true) {
    //            console.log('get res=' + res.data);
    //            this.ListAll = res.data;
    //            this._page.loadingHide();
    //        }
    //        else {
    //            this._page.alert("消息提示", "客户数据加载异常");
    //            this._page.loadingHide();
    //        }

    //    }, (err: any) => {
    //        this._page.alert("消息提示", "客户数据加载异常");
    //        this._page.loadingHide();
    //    });
    //}

    //const searchbar = document.querySelector('ion-searchbar');
    //const items = Array.from(document.querySelector('ion-list').children);
    //searchbar.addEventListener('ionInput', handleInput);
    //function handleInput(event) {
    //const query = event.target.value.toLowerCase();
    //requestAnimationFrame(() => {
    //    items.forEach(item => {
    //        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
    //        item.style.display = shouldShow ? 'block' : 'none';
    //    });
    //});
//}
}
