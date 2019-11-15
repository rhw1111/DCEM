import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../saleing.ser/optionset.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    private _valid: DCore_Valid,
    private _optionset: OptionSetService) {
  }
  public model = {
    apiUrlDetail: '/api/delivery/addorderpay',
    id: "",
    paycategoryoption: [],
    info: {
      delivery:"",
      paycategory: -1,
      amountstr: "",
      amount: 0,
      payon: "",
      batchcode: "",
      remark: ""
    }
  };
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((data: Params) => {
      if (data['id'] != null && data['id'] != undefined) {
        this.model.id = data['id'];
        this.model.info.delivery = data['id'];
        this.model.paycategoryoption = this._optionset.Get("mcs_paycategory");
      }
    });

  }
  saveOnClick() {
    if (!this._valid.isNumber(this.model.info.amountstr)) {
      this._page.alert("消息提示", "请输入正确的金额");
      return;
    }
    this.model.info.amount=parseInt(this.model.info.amountstr); 
    if (this.model.info.amount <= 0) {
      this._page.alert("消息提示", "请输入大于0的金额");
      return;
    }
    if (this._valid.isNullOrEmpty(this.model.info.payon)) {
      this._page.alert("消息提示", "请选择收款时间");
      return;
    }
    this._page.loadingShow();
    this._http.postForToaken(
      this.model.apiUrlDetail,
      this.model.info, 
        (res: any) => { 
            if (res !== null) {
              if (res.Result) {
                this._page.alert("消息提示", "新建收款记录成功",()=>{
                  this._page.goto("/saleing/delivery/detail", { 'id': this.model.id }); 
                }); 
              } else {
                this._page.alert("消息提示", res.Description);
              } 
            }
            else {
                this._page.alert("消息提示", "新建收款记录失败");
            }
            this._page.loadingHide(); 
        },
        (err: any) => {
            this._page.alert("消息提示", "原始线索编辑信息加载异常");
            this._page.loadingHide();
        }
    );

  }
}
