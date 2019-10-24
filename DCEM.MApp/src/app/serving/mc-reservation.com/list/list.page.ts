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


    constructor(public router: Router, private navCtrl: NavController, private httpService: HttpService) { }

    ngOnInit() {
        this.showlist("");
  }

    showlist(id) {
        var response = this.httpService.getForToaken("/api/appointment-info/GetList?status=" + id +"&search=", null);
        response.subscribe((res) => {
            if (res != null && res.success == true) {
                console.log('get res=' + res.data);
                this.ListAll = res.data;
            }
        });
    }

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
