import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

    public IsSalingManager:any=false;
    public IsSerlingManager:any=false;
    constructor(private menuController: MenuController,private statusBar: StatusBar,private _loginInfo:Storage_LoginInfo) { }

    ngOnInit() {
         //是否重叠
         //this.statusBar.overlaysWebView(true);
         this.IsSalingManager=this._loginInfo.IsSalingManager();
         this.IsSerlingManager=this._loginInfo.IsServingManager();
    }

    
}
