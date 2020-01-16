import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_Valid } from 'app/component/typescript/dcem.core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-activityintro',
  templateUrl: './activityintro.page.html',
  styleUrls: ['./activityintro.page.scss'],
})
export class ActivityintroPage implements OnInit {

  model = {
    contentManagementApiUrl: 'api/ContentManagement/GetContentDetail',
    params: {
      Type: 1,
      Id: ""
    },
    activityEntity: {
      Id: "",
      Title: "",
      Content: "",
      PicPath: "",
      status: ""
    }
  }

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
            this.model.activityEntity.Id = res.Content["Attributes"]["mcs_activitycontentsid"];
            this.model.activityEntity.Title = res.Content["Attributes"]["mcs_name"];
            this.model.activityEntity.Content = res.Content["Attributes"]["mcs_activitydetail"];

            this.model.activityEntity.PicPath = res.PicPathPre + res.Content["Attributes"]["mcs_thumbnail"];
            this.model.activityEntity.status = res.Content["Attributes"]["mcs_contentstatus"];
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

  RenderHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }
}
