import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/component/typescript/Dcem.core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-activitydetail',
  templateUrl: './activitydetail.page.html',
  styleUrls: ['./activitydetail.page.scss'],
})
export class ActivitydetailPage implements OnInit {

  model = {
    contentManagementApiUrl: 'api/ContentManagement/GetContentDetail',
    params: {
      Type: 1,
      Id: ""
    },
    activityEntity: {
      Title: "",
      PageUrl: null
    }
  }

  handler: any;

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
        this.pageOnBind(params['id']);
      }
    });

    //初始化事件
    var _this = this;
    this.handler = function (event) {
      if (event != null) {
        _this.setIframeValue(event.data);
      }
    };
    this.addIFrameEvent();
  }

  ionViewWillEnter() {
  }

  pageOnBind(id: any) {
    this._page.loadingShow();
    this.model.params.Id = id;
    this._http.post(
      this.model.contentManagementApiUrl,
      this.model.params,
      (res: any) => {
        //debugger;
        if (res !== null) {
          if (res.Content !== null) {
            this.model.activityEntity.Title = res.Content["Attributes"]["mcs_name"];

            this.model.activityEntity.PageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res.Content["Attributes"]["mcs_pageurl"]);
          }
          else {
            this._page.alert("消息提示", "数据加载异常");
          }
        }
        else {
          this._page.alert("消息提示", "数据加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }

  setIframeValue(data) {
    console.log(data);
  }

  addIFrameEvent() {
    //注册新的事件
    window.addEventListener('message', this.handler);
  }

  removeIFrameEvent() {
    //移除之前的事件
    window.removeEventListener('message', this.handler);
  }
}
