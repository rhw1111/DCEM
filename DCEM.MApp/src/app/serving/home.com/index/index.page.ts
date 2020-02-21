import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { DCore_Http, DCore_Page,DCore_Window} from 'app/base/base.ser/Dcem.core';

@Component({
    selector: 'app-index',
    templateUrl: './index.page.html',
    styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

    public IsSalingManager:any=true;
    public IsSerlingManager:any=true;
    public MyTaskCount:number=0;
    constructor(private menuController: MenuController,
        private statusBar: StatusBar,
        private _http: DCore_Http,
        private _loginInfo:Storage_LoginInfo,
        private _page:DCore_Page,
        private _window: DCore_Window) { }

    ngOnInit() {
         //是否重叠
         //this.statusBar.overlaysWebView(true);
         this.IsSalingManager=this._loginInfo.IsSalingManager();
         this.IsSerlingManager=this._loginInfo.IsServingManager();
debugger;
         var welcomeisloading= this._window.storageGet("welcomeisloading");
         if(welcomeisloading==null || welcomeisloading==""){
           this._page.goto("/base/uc/welcome");
         }

         var token = this._http.getToken();
         if (token == undefined || token == "") {
             this._page.goto("/base/uc/login");
         }

         this.LoadTaskCount();
    }
    //加载计算培育任务数量
    LoadTaskCount(){
        if(this.IsSalingManager){
            this._http.getForToaken("/api/only-lead/GetMyActivityList",
            {
                mcs_activitystatus: 0,
                seachkey: "",
                sort: "",
                pageSize: 999999999,
                page: 1,
            },
            (res: any) => {
              if (res.Results !== null) {
                this.MyTaskCount=res.Results.length;
              }
            },
            (err: any) => {
              
            }
          );
        }
    }
}
