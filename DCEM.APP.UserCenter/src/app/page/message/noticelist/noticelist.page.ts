import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page,DCore_String } from 'app/component/typescript/dcem.core';
import { OptionSetService } from 'app/component/typescript/optionset.service';
import { Storage_LoginInfo } from 'app/component/typescript/logininfo.storage';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-noticelist',
  templateUrl: './noticelist.page.html',
  styleUrls: ['./noticelist.page.scss'],
})
export class NoticelistPage implements OnInit {

  constructor(private _http: DCore_Http,
    private _page: DCore_Page,
    private optionset: OptionSetService,
    private _loginInfo: Storage_LoginInfo,
    private _string:DCore_String,
    private router:Router,) { }

  public model = {
    apiUrl: 'api/user/notices',//请求地址
    isending: false,
    datalist: [],//列表数据
    params: {
      UserId: this._loginInfo.GetSystemUserId(),
      Sort: '',
      Search: '',
      PageSize: 10,
      PageIndex: 1,
    }
  };

  ngOnInit() {
    this._page.loadingShow();
    this.getList(null);
  }

  //加载下一页
  doLoading(event) {
    this.model.params.PageIndex++;
    this.getList(event);
  }

  goDetail(url){
    this.router.parseUrl(url);
  }

  //获取列表数据
  getList(event) {
    this._http.post(this.model.apiUrl,
      this.model.params
      ,
      (res: any) => {
        if (res.Results !== null) {
          //绑定数据
          res.Results.forEach(item => {
            var obj = {};
            obj["mcs_user_msgid"] = item["Attributes"].mcs_user_msgid;
            obj["mcs_name"] = item["Attributes"].mcs_name;
            obj["mcs_readstatus"] = this.optionset.GetOptionSetNameByValue("mcs_readstatus", item["Attributes"].mcs_readstatus);
            //obj["mcs_type"] = this.optionset.GetOptionSetNameByValue("mcs_type", item["Attributes"].mcs_type);
            obj["mcs_type"] = item["Attributes"].mcs_type;
            obj["mcs_user"] = item["Attributes"]["mcs_user.mcs_name"];
            obj["mcs_content"] = item["Attributes"].mcs_content;
            obj["mcs_url"] = item["Attributes"].mcs_url;
            if(item["Attributes"].mcs_head_imageurl==null || item["Attributes"].mcs_head_imageurl==""){
              //obj["mcs_head_imageurl"]="assets/img/questionsetting.png";
            }
            else{
              obj["mcs_head_imageurl"] = item["Attributes"].mcs_head_imageurl;
            }
            
            obj["createdon"] = item["Attributes"].createdon;
            this.model.datalist.push(obj);
          });

          event ? event.target.complete() : '';
          //判断是否有新数据
          if (res.Results.length < this.model.params.PageSize) {
            event ? event.target.disabled = true : "";
            if (this.model.params.PageIndex > 1) {
              this.model.isending = true;
            }
          }
        }
        else {
          this._page.alert("消息提示", "数据加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "请求异常，请检查网络！");
        this._page.loadingHide();
      }
    );
  }

  FormatToDate(date:any) {
    if (date != null && date != undefined) {
        return this._string.GetDateFormat(new Date(date), 'yyyy-MM-dd');
    }
    else {
        return '--';
    }
}
}
