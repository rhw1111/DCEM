import { Component, OnInit,ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DCore_Page, DCore_Http, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ModalController, NavController,IonContent, IonInfiniteScroll } from '@ionic/angular';
import { OptionSetService } from '../../../base/base.ser/optionset.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild(IonContent, null) ionContent: IonContent;
  @ViewChild(IonInfiniteScroll, null) ionInfiniteScroll: IonInfiniteScroll;
  constructor(
    public _modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid,
    private _userinfo: Storage_LoginInfo,
    private _optionset: OptionSetService,
    private menuController:MenuController
  ) { }

  public model: any = {
    apiUrl: "/api/vehlisense/getlist",
    statusOptions: [],
    search: {
      type: -1,
      pageindex: 1,
      pagesize: 10,
      searchkey: "",
      status: "",
      userId: "16394506-5701-EA11-B391-8EA532941D0B",//this._userinfo.GetSystemUserId(),
      dealerid: "F9BAC0C9-AE06-EA11-B392-8030CED93B24"//this._userinfo.GetDealerid()
      // userId: this._userinfo.GetSystemUserId(),
      // dealerid: this._userinfo.GetDealerid()//"D2B7AE95-72F4-E911-A821-F2106C4094A1"
    },
    vehlisense: [],
    isending: false
  }
  ngOnInit() {
    this.model.statusOptions = this._optionset.Get("mcs_vehlisensestatus");
    this.model.data = [];
    // this.model.search = {
    //     type: 1,
    //     pageindex: 1,
    //     searchkey: ""
    // };

    this.listOnBind(null);
  }
    //每次页面加载
  ionViewWillEnter() {
    this.menuController.enable(false);

  }
  tagOnClick(type) {
    this.model.search.type = type;
    this.model.vehlisense = [];
    this.model.search.pageindex = 1;
    this.ionInfiniteScroll.disabled = false;
    this.ionContent.scrollToTop(200);

    this.listOnBind(null);
  }
  //加载下一页
  doLoading(event) {
    this.model.search.pageindex++;
    this.model.isending = false;
    this.listOnBind(event);
  }
  //搜索
  searchOnCharge() {
    this.model.vehlisense = [];
    this.listOnBind(null);
  }
  //搜索
  searchOnKeyup(event) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.model.vehlisense = [];
      this.listOnBind(null);
    }
  }
  listOnBind(event) {
    this._page.loadingShow();
    this._http.post(
      this.model.apiUrl,
      this.model.search,
      (res: any) => {  
        if (res.Results !== null) {
          var data = res.Results;
          for (var i in data) {
            var attr = data[i]["Attributes"];
            var obj = {};
            obj["id"] = data[i]["Id"];
            obj["name"] = attr["mcs_name"];
            obj["username"] = attr["mcs_fullname"];
            obj["vin"] = attr["vinname"];
            obj["mcs_lisensedate"] = attr["mcs_lisensedate"]==null?"":attr["mcs_lisensedate"].split('T')[0];
           this.model.vehlisense.push(obj);
          }
          event ? event.target.complete() : '';
          if (data.length < this.model.search.pagesize) {
            event ? event.target.disabled = true : "";
            if (this.model.search.pageindex != 1)
            this.model.isending = true;
          }
         
        }
        else {
          this.ionInfiniteScroll.disabled = true;
          //this._page.alert("消息提示", "开票数据加载异常");
        }
        this._page.loadingHide();
        this.ionInfiniteScroll.complete();
        
      },
      (err: any) => {
        this._page.loadingHide();
        this.ionInfiniteScroll.complete();
        this._page.alert("消息提示", "开票数据加载异常");
      }
    );
  }
}
