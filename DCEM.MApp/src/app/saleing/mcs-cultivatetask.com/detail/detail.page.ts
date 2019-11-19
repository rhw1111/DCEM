import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Dateformat } from '../../../base/base.ser/dateformat';
import { OptionSetService } from '../../saleing.ser/optionset.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  model = {
    apiUrlInfo: '/api/only-lead/GetAcvitityDetail',
    activityData: {
      mcs_activityid: "", //主键id
      mcs_name: "", //主题
      mcs_importantlevel: "", //重要级别
      mcs_endtime: "", //结束时间
      mcs_thisfollowupcontent: "", //本次跟进内容
      mcs_nextfollowuptime: "", //下次跟进时间
      mcs_nextfollowupcontent: "" //下次跟进内容
     
    },

    onlyLeadData: {
      mcs_onlyleadid:"",
      mcs_name:"", //姓名
      mcs_mobilephone: "",//手机
      mcs_leadorigin: "",//线索来源
      mcs_gender: "",//称呼
      mcs_accountpoints:"",    //评分
      mcs_usecarprovince: "",//用车省份
      mcs_usecarcity: ""   //用车城市

    }
 

  }

  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private activeRoute: ActivatedRoute,
    private optionset:OptionSetService,
    private dateformat:Dateformat
  ) { }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['id'] != null && params['id'] != undefined) {
          this.model.activityData.mcs_activityid=params['id'];
          this.pageOnBind(params['id']);
      }
   });
  }
  
  //加载培育任务详情
  pageOnBind(id:any) {
    //debugger;
    this._page.loadingShow();
    this._http.get(
      this.model.apiUrlInfo,
      {
        params: {
          mcs_activityid: id,
        }
      },
      (res: any) => {
        //debugger;
       //绑定培育信息
        if (res.ActivityInfo !== null) { 
          this.model.activityData.mcs_name = res["ActivityInfo"]["Attributes"]["mcs_name"]; 
          this.model.activityData.mcs_importantlevel = this.optionset.GetOptionSetNameByValue("mcs_importantlevel",res["ActivityInfo"]["Attributes"]["mcs_importantlevel"]); 
          this.model.activityData.mcs_endtime = this.dateformat.FormatToDateTime(res["ActivityInfo"]["Attributes"]["mcs_endtime"]); 
          this.model.activityData.mcs_thisfollowupcontent =res["ActivityInfo"]["Attributes"]["mcs_thisfollowupcontent"]; 
          this.model.activityData.mcs_nextfollowuptime = this.dateformat.FormatToDateTime(res["ActivityInfo"]["Attributes"]["mcs_nextfollowuptime"]); 
          this.model.activityData.mcs_nextfollowupcontent = res["ActivityInfo"]["Attributes"]["mcs_nextfollowupcontent"];
              
        }
      
        //绑定唯一线索信息
        if (res.OnlyLeadInfo != null) {
             
          this.model.onlyLeadData.mcs_name = res["OnlyLeadInfo"]["Attributes"]["mcs_name"];
          this.model.onlyLeadData.mcs_mobilephone = res["OnlyLeadInfo"]["Attributes"]["mcs_mobilephone"];     
          this.model.onlyLeadData.mcs_leadorigin =this.optionset.GetOptionSetNameByValue("mcs_leadorigin",res["OnlyLeadInfo"]["Attributes"]["mcs_leadorigin"]);
          this.model.onlyLeadData.mcs_gender = this.optionset.GetOptionSetNameByValue("mcs_gender",res["OnlyLeadInfo"]["Attributes"]["mcs_gender"]);
          this.model.onlyLeadData.mcs_accountpoints = this.optionset.GetOptionSetNameByValue("lead_mcs_accountpoints",res["OnlyLeadInfo"]["Attributes"]["mcs_accountpoints"]);
          this.model.onlyLeadData.mcs_usecarprovince = res["OnlyLeadInfo"]["Attributes"]["mcs_usecarprovince"];     
          this.model.onlyLeadData.mcs_usecarcity = res["OnlyLeadInfo"]["Attributes"]["mcs_usecarcity"];
           
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
