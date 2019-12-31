import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';

@Component({
  selector: 'app-select-surveyorder',
  templateUrl: './select-surveyorder.component.html',
  styleUrls: ['./select-surveyorder.component.scss'],
})
export class SelectSurveyorderComponent implements OnInit {

  public model = {
    apiUrl: '/api/Installation/GetSurveyorderListAll',
    data:[],
    params: {
      PageIndex: 1,
      PageSize:10,
      SearchKey: "",
      mcs_surveystatus:19   //19
    }
  }; 

  constructor(
    private modalCtrl: ModalController,
    private _http: DCore_Http,
    private _page: DCore_Page
  ) { }

  ngOnInit() {
    this.listOnBind();
  }

  
  searchOnKeyup(event: any) {
    var keyCode = event ? event.keyCode : "";
    if (keyCode == 13) {
      this.listOnBind();
    }
  }

  listOnBind() {
    this._page.loadingShow();
    this.model.data = [];
    this._http.postForToaken(this.model.apiUrl, this.model.params,
      (res: any) => {
        console.log(res);
        if (res.Results !== null) {
          //debugger;
          for (var key in res.Results) {
            var obj = {};
            obj["mcs_surveyorderid"] = res.Results[key]["Attributes"]["mcs_surveyorderid"];
            obj["mcs_name"] = res.Results[key]["Attributes"]["mcs_name"];
            obj["mcs_username"] = res.Results[key]["Attributes"]["mcs_username"]; 
            obj["mcs_userphone"] = res.Results[key]["Attributes"]["mcs_userphone"];  
            obj["mcs_email"] = res.Results[key]["Attributes"]["mcs_email"];
            obj["mcs_carmodelid"] = res.Results[key]["Attributes"]["_mcs_carmodelid_value"];
            obj["mcs_carmodelname"] = res.Results[key]["Attributes"]["a.mcs_name"];
            obj["mcs_dealer"] = res.Results[key]["Attributes"]["_mcs_dealer_value"];
            obj["mcs_dealername"] = res.Results[key]["Attributes"]["b.mcs_name"];
            obj["mcs_salesconsultant"] = res.Results[key]["Attributes"]["_mcs_salesconsultant_value"];
            obj["mcs_salesconsultantname"] =res.Results[key]["Attributes"]["c.fullname"];
            obj["mcs_province"] = res.Results[key]["Attributes"]["_mcs_province_value"];
            obj["mcs_provincename"] = res.Results[key]["Attributes"]["d.mcs_name"];
            obj["mcs_city"] = res.Results[key]["Attributes"]["_mcs_city_value"];
            obj["mcs_cityname"] = res.Results[key]["Attributes"]["e.mcs_name"];
            obj["mcs_area"] = res.Results[key]["Attributes"]["_mcs_area_value"];
            obj["mcs_areaname"] = res.Results[key]["Attributes"]["f.mcs_name"];
            obj["mcs_installationaddress"] = res.Results[key]["Attributes"]["mcs_installationaddress"];
            obj["mcs_detailaddress"] = res.Results[key]["Attributes"]["mcs_detailaddress"];     
            obj["mcs_price"] = res.Results[key]["Attributes"]["mcs_price"];
            obj["mcs_communityname"] = res.Results[key]["Attributes"]["mcs_communityname"];
            obj["mcs_vin"] = res.Results[key]["Attributes"]["mcs_vin"];   
            
            obj["mcs_surveyprovider"] = res.Results[key]["Attributes"]["_mcs_surveyprovider_value"]; 
            obj["mcs_surveyprovidername"] = res.Results[key]["Attributes"]["g.mcs_name"]; 
            obj["mcs_contact"] = res.Results[key]["Attributes"]["mcs_contact"]; 
            obj["mcs_surveyproviderphone"] = res.Results[key]["Attributes"]["mcs_surveyproviderphone"];           
            obj["mcs_appointmentdate"] = res.Results[key]["Attributes"]["mcs_appointmentdate"]; 
            obj["mcs_surveyengineer"] = res.Results[key]["Attributes"]["_mcs_surveyengineer_value"]; 
            obj["mcs_surveyengineername"] = res.Results[key]["Attributes"]["h.mcs_name"]; 
            obj["mcs_surveyengineerphone"] = res.Results[key]["Attributes"]["mcs_surveyengineerphone"]; 
            
            this.model.data.push(obj);
          }
          this._page.loadingHide();
        }
        else {
          this._page.alert("消息提示", "数据加载异常");
          this._page.loadingHide();
        }
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed':true
    });
  }
  //保存所选项
  itemClick(item){
    //debugger;
    this.modalCtrl.dismiss({
      'mcs_surveyorderid': item.mcs_surveyorderid,
      'mcs_name': item.mcs_name,
      'mcs_username': item.mcs_username,
      'mcs_userphone': item.mcs_userphone,
      'mcs_email': item.mcs_email,
      'mcs_carmodelid': item.mcs_carmodelid,
      'mcs_carmodelname': item.mcs_carmodelname,
      'mcs_dealer': item.mcs_dealer,
      'mcs_dealername': item.mcs_dealername,
      'mcs_salesconsultant': item.mcs_salesconsultant,
      'mcs_salesconsultantname': item.mcs_salesconsultantname,
      'mcs_province': item.mcs_province,
      'mcs_provincename': item.mcs_provincename,
      'mcs_city': item.mcs_city,
      'mcs_cityname': item.mcs_cityname,
      'mcs_area': item.mcs_area,
      'mcs_areaname': item.mcs_areaname,
      'mcs_installationaddress': item.mcs_installationaddress,
      'mcs_detailaddress': item.mcs_detailaddress,
      'mcs_price': item.mcs_price,
      'mcs_communityname': item.mcs_communityname,
      'mcs_vin': item.mcs_vin,
      'mcs_surveyprovider': item.mcs_surveyprovider,
      'mcs_surveyprovidername': item.mcs_surveyprovidername,
      'mcs_contact': item.mcs_contact,
      'mcs_surveyproviderphone': item.mcs_surveyproviderphone,
      'mcs_appointmentdate': item.mcs_appointmentdate,
      'mcs_surveyengineer': item.mcs_surveyengineer,
      'mcs_surveyengineername': item.mcs_surveyengineername,
      'mcs_surveyengineerphone': item.mcs_surveyengineerphone
    });
  }

}
