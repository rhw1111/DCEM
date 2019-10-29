import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sc-select',
  templateUrl: './sc-select.component.html',
  styleUrls: ['./sc-select.component.scss'],
})
export class ScSelectComponent implements OnInit {

  public selectItemValue:any='';
  public seachkey:string='';
  public dataList:any=[];

  constructor(
    private modalCtrl:ModalController
    ) { }

  ngOnInit() {
    //搜索功能实现

  }

  search(event){
    // this._page.loadingShow();
    //     this.mod.data = [];
    //     this._http.get(
    //         this.mod.apiUrl,
    //         {
    //             params: {
    //                 type: this.mod.searchData.type,
    //                 pageindex: this.mod.searchData.pageindex,
    //                 search: this.mod.searchData.search
    //             }
    //         },
    //         (res: any) => {
    //             if (res.Results !== null) {
             
    //                 for (var key in res.Results) {
    //                     var obj = {};
    //                     obj["Id"] = res.Results[key]["Id"];
    //                     obj["fullname"] = res.Results[key]["Attributes"]["a_x002e_mcs_fullname"];
    //                     obj["gender"] = res.Results[key]["Attributes"]["a_x002e_mcs_gender@OData.Community.Display.V1.FormattedValue"];
    //                     obj["genderval"] = res.Results[key]["Attributes"]["a_x002e_mcs_gender"];
    //                     obj["mobilephone"] = res.Results[key]["Attributes"]["a_x002e_mcs_mobilephone"];
    //                     obj["vehplate"] = res.Results[key]["Attributes"]["a_x002e_mcs_vehplate"];
    //                     obj["vehtype"] = res.Results[key]["Attributes"]["a_x002e_mcs_vehtype@OData.Community.Display.V1.FormattedValue"];

    //                     this.mod.data.push(obj);
    //                 }

    //                 this.mod.allTotalCount = res.ALLTotalCount;
    //                 this.mod.warrantyTotalCount = res.WarrantyTotalCount;
    //                 this.mod.insuranceTotalCount = res.InsuranceTotalCount;


    //                 this._page.loadingHide();
    //             }
    //             else {
    //                 this._page.alert("消息提示", "客户数据加载异常");
    //                 this._page.loadingHide();
    //             }
    //         },
    //         (err: any) => {
    //             this._page.alert("消息提示", "客户数据加载异常");
    //             this._page.loadingHide();
    //         }
    //     );
  }
  
  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed':true
    });
  }
  //保存所选项
  selectSave(){
    this.modalCtrl.dismiss({
      'id': this.selectItemValue.split(':')[0],
      'name': this.selectItemValue.split(':')[1]
    });
  }
}
