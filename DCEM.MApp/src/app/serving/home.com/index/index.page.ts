import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

    constructor(private menuController: MenuController,private statusBar: StatusBar) { }

    ngOnInit() {
         //是否重叠
         //this.statusBar.overlaysWebView(true);
    }

    
}
