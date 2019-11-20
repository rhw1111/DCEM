import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import dateformat from 'silly-datetime';
import { OptionSetService } from '../../saleing.ser/optionset.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
 public tab: any = "baseinfo";
  model = {
    apiUrlInfo: '/api/Installation/GetSurveyorderDetail',
    data: {},//数据集合
  }

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    private optionset:OptionSetService
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
          this.pageOnBind(params['id']);
      }
   });
  }


  //加载勘测单详情
  pageOnBind(id:any) {
    //debugger;
    this._page.loadingShow();
    this._http.postForToaken(
      this.model.apiUrlInfo,
      {
        Guid:id
      },
      (res: any) => {
          console.log("id:"+id);
          console.log(res);
          if(res!=null && res.Attributes!=null)
            this.model.data=res.Attributes;
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }


  FormatToDateTime(date) {
    if (date != null && date != undefined) {
        return dateformat.format(date, 'YYYY-MM-DD hh:mm:ss');
    }
    else {
        return '';
     }
  }
  FormatToDate(date) {
    if (date != null && date != undefined) {
        return dateformat.format(date, 'YYYY-MM-DD');
    }
    else {
        return '';
     }
  }
  getLookupName(name){

    return "_"+name+"_value@OData.Community.Display.V1.FormattedValue";
  }
  getOptionName(name){
    return name+"@OData.Community.Display.V1.FormattedValue";
  }
}
