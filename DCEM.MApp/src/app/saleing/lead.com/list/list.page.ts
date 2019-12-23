import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DCore_Page, DCore_Http } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { debug } from 'util';
import { IonInfiniteScroll } from '@ionic/angular';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;
  public mod:any = {
    apiUrl: '/api/Originalclue/getlist',
    data: [],
    isending:false,
    searchData: { 
        pageindex: 1,
        pagesize:10,
        search:"",
        userId:this._userinfo.GetSystemUserId(),
        //dealerid:this._userinfo.GetDealerid()
    }
};
  constructor(  
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _userinfo:Storage_LoginInfo,
    private menuController:MenuController,
    private _optionset: OptionSetService,) { 
  }

  ngOnInit() { 
  }
    //每次页面加载
    ionViewWillEnter() {
     
  }

  ionViewDidEnter(){
    // alert("先执行");
    this.listOnBind(null);
    this.menuController.enable(false);
  }
  //下拉刷新
  doRefresh(event) { 
    this.mod.data = [];
    this.mod.isending = false;
    this.mod.searchData.pageindex = 1; 
    this.listOnBind(event);
}
//加载下一页
doLoading(event) { 
    this.mod.searchData.pageindex++;
    this.mod.isending = false; 
    this.listOnBind(event); 
}
//搜索
  searchOnKeyup(event) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.mod.data = [];
        this.listOnBind(null);
    }
  }
listOnBind(event) {
  // debugger;
  this._page.loadingShow();
  this._http.postForToaken(
      this.mod.apiUrl,
      this.mod.searchData,
      (res: any) => { 
          if (res.Results !== null) {
            console.log(res.Results);
            this.mod.data=[];
            var data=res.originalclues;
              for (var i in data) { 
                var attr=data[i]["Attributes"];
                  var obj = {}; 
                  obj["username"]=attr["fullname"]; 
                  obj["gender"]=attr["mcs_gender"]; 
                  obj["mobilephone"]=attr["mobilephone"]; 
                  obj["clues"]= this._optionset.GetOptionSetNameByValue("mcs_leadorigin",attr["mcs_leadorigin"]);
                  obj["Id"]=data[i]["Id"];
                  this.mod.data.push(obj);
              }

              event ? event.target.complete() : ''; 
              if (data.length < this.mod.searchData.pagesize) { 
                if(this.mod.searchData.pageindex>1){
                  event ? event.target.disabled = true : "";
                  this.mod.isending = true;
                }
            }
              this._page.loadingHide();
          }
          else {
              this._page.alert("消息提示", "原始线索数据加载异常");
          }
          this._page.loadingHide();
      },
      (err: any) => {
          this._page.alert("消息提示", "原始线索数据加载异常");
          this._page.loadingHide();
      }
  );
}
}
