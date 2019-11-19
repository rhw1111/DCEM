import { Component, OnInit } from '@angular/core';

import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { from } from 'rxjs';
import { Dateformat } from 'app/base/base.ser/dateformat'

const extra = { 
};

const now = new Date(); 

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  state: any = {
    en: false,
    date: null,
    show: false,
    pickTime: false,
    now: new Date(+now - 7776000000),
    type: 'one',
    enterDirection: '',
    rowSize: 'normal',
    showShortcut: false,
    infinite: true,
    defaultValue: undefined,
    minDate: new Date(+now - 7776000000),
    maxDate: new Date(+now + 2592000000),
    onSelect: undefined,
    getDateExtra: date => {
      return extra[+date];
    }
  };
  model = {
    apiUrl: "/api/drive-record/queryList",
    data: [],
    params: {
      OrderTime: "",
      PageSize: 100,
      PageIndex: 1
    }
  };
  constructor(private _http: DCore_Http,
    private _page: DCore_Page,
    private _shareData: DCore_ShareData,
    private _valid: DCore_Valid,
    private _dateformat: Dateformat
  ) {
  }

  ngOnInit() {
  }
  triggerConfirm(value) {
    const { startDate, endDate } = value;
    this.model.params.OrderTime = this._dateformat.FormatToDate(startDate);
    this.pageOnBind();
    console.log('onConfirm', startDate);
  }
  onClick_3() {
    this.state.show = true;
    this.state.type = 'one';
  }

  triggerCancel() {
    this.state.show = false;
  }
  triggerSelectHasDisableDate(dates) {
    console.warn('onSelectHasDisableDate', dates);
  }
  pageOnBind() {
    this.model.data = [];
    this._page.loadingShow();
    this._http.getForToaken(
      this.model.apiUrl,
      {
        "OrderTime": this.model.params.OrderTime,
        "PageSize": this.model.params.PageSize,
        "PageIndex": this.model.params.PageIndex
      },
      (res: any) => {
        if (res != null) {
          if (res.Results.length > 0) {
            for (var i in res.Results) {
              var attr = res.Results[i]["Attributes"];
              var obj = {}; 
              obj["fullname"]=attr["mcs_fullname"];
              obj["mobilephone"]=attr["mcs_mobilephone"];
              obj["testdrivetime"]=attr["_mcs_testdrivetime_value@OData.Community.Display.V1.FormattedValue"];
              this.model.data.push(obj);
            }
          }
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }
}
