import { Component, OnInit } from '@angular/core';
import { DCore_Page, DCore_Http, DCore_Valid } from 'app/base/base.ser/Dcem.core';
import { Storage_LoginInfo } from 'app/base/base.ser/logininfo.storage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OptionSetService } from '../../../base/base.ser/optionset.service';

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
    apiGetTailMoney:'/api/delivery/gettailmoney',
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
        this.GetCountStr(data['id']);
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
  GetCountStr(id) {
    //this.ionInfiniteScroll.disabled=true;
    this._page.loadingShow();
    this._http.get(this.model.apiGetTailMoney, {
        params: {
            id: id,
            materielId:0
        }
    }, (res) => {
        if (res != null) {
            //初始化字段值
            this.model.info.amountstr = res["Attributes"]["name"];
            // this.model.info.amountstr = res["Attributes"]["name"];
            // this.model.info.amountstr = res["Attributes"]["accountnumber"];
            // this.mod.data.Account.mcs_onlyleadid = res["Attributes"]["_mcs_onlyleadid_value"]; //唯一线索
            // this.mod.data.Account.mcs_singleperson = res["Attributes"]["_mcs_singleperson_value@OData.Community.Display.V1.FormattedValue"]; //成单人
            // this.mod.data.Account.mcs_smallorderid = res["Attributes"]["_mcs_smallorderid_value@OData.Community.Display.V1.FormattedValue"]; //小订记录
            // this.mod.data.Account.mcs_storemanagerid = res["Attributes"]["_mcs_storemanagerid_value@OData.Community.Display.V1.FormattedValue"]; //店长
            // this.mod.data.Account.mcs_tc_order = res["Attributes"]["_mcs_tc_order_value@OData.Community.Display.V1.FormattedValue"]; //商品综合订单
            // this.mod.data.Account.mcs_vehcolorid = res["Attributes"]["_mcs_vehcolorid_value@OData.Community.Display.V1.FormattedValue"]; //意向颜色
            // this.mod.data.Account.mcs_vehorderid = res["Attributes"]["_mcs_vehorderid_value@OData.Community.Display.V1.FormattedValue"]; //整车订单
            // this.mod.data.Account.mcs_vehtypeid = res["Attributes"]["_mcs_vehtypeid_value@OData.Community.Display.V1.FormattedValue"]; //意向车型
            // this.mod.data.Account.mcs_carattention = res["Attributes"]["mcs_carattention"]; //购车关注
            // this.mod.data.Account.mcs_competingtype = res["Attributes"]["mcs_competingtype"]; //竞品车型
            // this.mod.data.Account.mcs_introducecarowner = res["Attributes"]["mcs_introducecarowner"]; //引荐车主
            // this.mod.data.Account.mcs_mobilephone = res["Attributes"]["mcs_mobilephone"]; //手机号码
            // this.mod.data.Account.mcs_estimatedtransactiondate = this.dateformat.FormatToDate(res["Attributes"]["mcs_estimatedtransactiondate"]); //预测成交日期
            // this.mod.data.Account.mcs_carereason = this.optionset.GetOptionSetNameByValue("mcs_carereason", res["Attributes"]["mcs_carereason"]); //关注原因
            // this.mod.data.Account.mcs_customerstatus = res["Attributes"]["mcs_customerstatus"]; //销售机会状态
            // this.mod.data.Account.mcs_customerstatusname = this.optionset.GetOptionSetNameByValue("mcs_customerstatus", res["Attributes"]["mcs_customerstatus"]); //销售机会状态名称
            // this.mod.data.Account.mcs_depositpaymentstatus = res["Attributes"]["mcs_depositpaymentstatus"]; //定金支付状态
            // this.mod.data.Account.mcs_gender = this.optionset.GetOptionSetNameByValue("mcs_gender", res["Attributes"]["mcs_gender"]); //称呼
            // this.mod.data.Account.mcs_generation = this.optionset.GetOptionSetNameByValue("mcs_generation", res["Attributes"]["mcs_generation"]); //年龄段
            // this.mod.data.Account.mcs_idtype = res["Attributes"]["mcs_idtype"]; //证件类型
            // this.mod.data.Account.mcs_level = this.optionset.GetOptionSetNameByValue("mcs_level", res["Attributes"]["mcs_level"]); //意向等级
            // this.mod.data.Account.mcs_purchasepurpose = this.optionset.GetOptionSetNameByValue("mcs_purchasepurpose", res["Attributes"]["mcs_purchasepurpose"]); //购买用途
            // this.mod.data.Account.mcs_purchaseway = this.optionset.GetOptionSetNameByValue("mcs_purchaseway", res["Attributes"]["mcs_purchaseway"]); //购买方式
            // this.mod.data.Account.mcs_vehicleusers = this.optionset.GetOptionSetNameByValue("mcs_vehicleusers", res["Attributes"]["mcs_vehicleusers"]); //车辆使用人
            // this.mod.data.Account.mcs_familymembernum = res["Attributes"]["mcs_familymembernum"]; //家庭成员数量    
            // this.mod.data.Account.description = res["Attributes"]["description"]; //特殊备注           
        }
        this._page.loadingHide();
    }, (err) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
    });

    }
}
