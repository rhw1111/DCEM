import { Component, OnInit } from '@angular/core';
import { DCore_Http, DCore_Page, DCore_ShareData, DCore_Valid } from 'app/base/base.ser/Dcem.core';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
    
  data={
    mcs_content:"",
    mcs_results:"",
    mcs_visittime:null
  }
   
  constructor(
    private _http: DCore_Http,
    private _page: DCore_Page,
    private _valid: DCore_Valid
  ) { }

  ngOnInit() {
  }
   
   public saveLogcall(){

     var errMessage = "";
      if (this._valid.isNullOrEmpty(this.data.mcs_content)) {
      errMessage += "请输入回访内容<br>";
      }
      if (this._valid.isNullOrEmpty(this.data.mcs_results)) {
          errMessage += "请输入回访结果<br>";
      }
      if (this._valid.isNullOrEmpty(this.data.mcs_visittime)) {
          errMessage += "请选择回访时间<br>";
      }
       
      if (errMessage !== "") {
        this._page.presentToastError(errMessage);
        return;
      }



   }

}
