import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/component/typescript/Dcem.core';
import { ActivatedRoute, Params } from '@angular/router';
import dateformat from 'silly-datetime';
import { OptionSetService } from 'app/component/typescript/optionset.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
 
  model = {
    apiUrlInfo: 'api/testdrive/GetDriveFeedbackDetail',
  
    data: {
      mcs_testdrivefeedbackmasterid:"", //主键id
      mcs_username: "", //姓名
      mcs_userphone: "", //手机号
      mcs_surveytime: "", //反馈时间
      mcs_score: "", //综合评分
      mcs_averagescore: "", //平均分
    },

    DrivefeedbackList: [],
   

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
          this.model.data.mcs_testdrivefeedbackmasterid=params['id'];
          this.pageOnBind(params['id']);
      }
   });
  }

  //加载详情
  pageOnBind(id:any) {
    
    this._page.loadingShow();
    this._http.get(
      this.model.apiUrlInfo,
      {
        params: {
          testdrivefeedbackmasterid: this.model.data.mcs_testdrivefeedbackmasterid,
        }
      },
      (res: any) => {
        //debugger;
       //绑定基本信息
        if (res.TestDriveFeedbackInfo != null) { 
          this.model.data.mcs_username = res["TestDriveFeedbackInfo"]["Attributes"]["mcs_username"]; 
          this.model.data.mcs_userphone = res["TestDriveFeedbackInfo"]["Attributes"]["mcs_userphone"]; 
          this.model.data.mcs_surveytime =this.FormatToDateTime(res["TestDriveFeedbackInfo"]["Attributes"]["mcs_surveytime"]); 
          this.model.data.mcs_score = res["TestDriveFeedbackInfo"]["Attributes"]["mcs_score"]; 
          this.model.data.mcs_averagescore = res["TestDriveFeedbackInfo"]["Attributes"]["mcs_averagescore"];        
        }
        
        //问题项
        if (res.DrivefeedbackList != null) {
          for (var key in res.DrivefeedbackList) {
            var obj = {};
            obj["mcs_surveyquestion"] = res.DrivefeedbackList[key]["Attributes"]["mcs_surveyquestion"];        
            obj["mcs_suveryanswer"] =res.DrivefeedbackList[key]["Attributes"]["mcs_suveryanswer"];  
            this.model.DrivefeedbackList.push(obj);

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


  FormatToDateTime(date) {
    if (date != null && date != undefined) {
        return dateformat.format(date, 'YYYY-MM-DD');
    }
    else {
        return '';
     }
  }

  
}
