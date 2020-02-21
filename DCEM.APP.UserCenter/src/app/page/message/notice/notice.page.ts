import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DCore_Http, DCore_Page } from 'app/component/typescript/dcem.core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {

  public Url: any = null;
  public mcs_user_msgid = "";
  public mcs_readstatus = 0;
  public mcs_name="";
  public mcs_content="";
  constructor(
    private activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    private _http: DCore_Http,
    private _page: DCore_Page
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['url'] != null && params['url'] != undefined) {
        this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(params['url']);
      }

      if (params['mcs_user_msgid'] != null && params['mcs_user_msgid'] != undefined) {
        this.mcs_user_msgid = params['mcs_user_msgid'];
      }

      if (params['mcs_readstatus'] != null && params['mcs_readstatus'] != undefined) {
        this.mcs_readstatus = parseInt(params['mcs_readstatus']);
      }

      if (params['mcs_name'] != null && params['mcs_name'] != undefined) {
        this.mcs_name = params['mcs_name'];
      }

      if (params['mcs_content'] != null && params['mcs_content'] != undefined) {
        this.mcs_content = params['mcs_content'];
      }
      this.toread();
    });
  }

  toread() {
    if (this.mcs_user_msgid != "" && this.mcs_readstatus == 0) {
      this._http.post('api/user/toread',
        {
          Id: this.mcs_user_msgid,
          mcs_readstatus: 1
        },
        (res: any) => {
          if (res == false) {
            this._page.alert("消息提示", "更新阅读状态为已读失败！");
          }
          this._page.loadingHide();
        },
        (err: any) => {
          this._page.alert("消息提示", "请求异常，请检查网络！");
          this._page.loadingHide();
        }
      );
    }
  }
}
