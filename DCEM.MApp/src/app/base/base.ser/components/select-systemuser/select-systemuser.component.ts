import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';

@Component({
  selector: 'app-select-systemuser',
  templateUrl: './select-systemuser.component.html',
  styleUrls: ['./select-systemuser.component.scss'],
})
export class SelectSystemuserComponent implements OnInit {
  public mod: any = {
    apiUrl: '/api/basedata/QuerySystemUserList',
    data:[],
    searchData: {
      page: 1,
      pageSize:10,
      seachkey: "",
      prxyUserId:"",
      dealerId:""
    }
  };
  constructor(private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page
    ) {
  }

  ngOnInit() {
    this.listOnBind();
  }

  searchOnKeyup(event: any) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.listOnBind();
    }
  }

  listOnBind() {
    this._page.loadingShow();
    this.mod.data = [];
    this._http.get(
      this.mod.apiUrl,
      {
        params: {
          page: this.mod.searchData.page,
          pageSize: this.mod.searchData.pageSize,
          seachkey: this.mod.searchData.seachkey,
          dealerId:this.mod.searchData.dealerId
        }
      },
      (res: any) => {
        console.log(res);
        if (res.Results !== null) {
          for (var key in res.Results) {
            var obj = {};
            obj["Id"] = res.Results[key]["Id"];
            obj["fullname"] = res.Results[key]["Attributes"]["fullname"];
           
            this.mod.data.push(obj);
          }
          this._page.loadingHide();
        }
        else {
          this._page.alert("消息提示", "数据加载异常");
          this._page.loadingHide();
        }
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }


  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed':true
    });
  }
  //保存所选项
  itemClick(item){
    this.modalCtrl.dismiss({
      'Id': item.Id,
      'fullname': item.fullname
    });
  }
}
