import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { DCore_Http, DCore_Page } from '../../../../../app/component/typescript/dcem.core';
import sd from 'silly-datetime';
import { Storage_LoginInfo } from '../../../../component/typescript/logininfo.storage';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  model = {
    apiUrl: 'Api/UC_Serviceproxy/UcQueryList',
    seachkey: '',//搜索关键字
    status: 0,//预约状态
    data: [],//列表数据
    pageSize: 10,//页数
    page: 1,//分页
    isending: false,//是否加载完成
    nodata: false,
    ifDoLoading: false,//是否初始加载
    mobilephone: "",//手机号

  };
  constructor(
    public router: Router,
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _logininfo: Storage_LoginInfo,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //  debugger;
    this.model.mobilephone = this._logininfo.GetPhone();
    this.model.page = 1;
    this.showlist(null);
  }

  //展示数据
  showlist(event) {
    if (!this.model.ifDoLoading) {
      this._page.loadingShow();
    }
    this._http.get(this.model.apiUrl,
      {
        params: {
          phone: "",
          status: 180,//只查询交车完成的
          pageindex: this.model.page,
          pagesize: this.model.pageSize,
        }
      },
      (res: any) => {
        if (res.Results !== null) {
          for (var key in res.Results) {
            var obj = {};
            obj["mcs_serviceproxyid"] = res.Results[key]["Id"];
            obj["mcs_carplate"] = res.Results[key]["Attributes"]["mcs_carplate"];
            obj["mcs_name"] = res.Results[key]["Attributes"]["mcs_name"];
            obj["mcs_testresult"] = res.Results[key]["Attributes"]["mcs_testresult"];
            obj["mcs_status"] = res.Results[key]["Attributes"]["mcs_status"];
            obj["mcs_statusvalue"] = res.Results[key]["Attributes"]["mcs_status@OData.Community.Display.V1.FormattedValue"];
            obj["createdon"] = res.Results[key]["Attributes"]["createdon@OData.Community.Display.V1.FormattedValue"];
            obj["_mcs_dealerid_value"] = res.Results[key]["Attributes"]["_mcs_dealerid_value@OData.Community.Display.V1.FormattedValue"];
            this.model.data.push(obj);
          }
         
        }
        else {
          this._page.alert("消息提示", "维修单数据加载异常");
        }
        event ? event.target.complete() : '';
        //判断是否有新数据
        if (res.Results.length < this.model.pageSize) {
          event ? event.target.disabled = true : "";
          this.model.isending = true;
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "维修单数据加载异常");
        this._page.loadingHide();
      }
    );
  }

  //加载下一页
  doLoading(event) {
    this.model.page++;
    this.model.ifDoLoading = true;
    this.showlist(event);
  }

  //日期格式
  FormatToDate(date) {
    if (date != null && date != undefined) {
      return sd.format(date, 'YYYY-MM-DD');
    }
    else {
      return '';
    }
  }
}
