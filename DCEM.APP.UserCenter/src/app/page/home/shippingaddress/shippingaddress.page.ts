import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../../component/modal/login/login.component'
import { DCore_Http, DCore_Page, DCore_Valid } from '../../../component/typescript/dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
import { ModalController } from '@ionic/angular';
//import { MultiPickerModule } from 'ion-multi-picker';
import { of } from "rxjs";
@Component({
  selector: 'app-shippingaddress',
  templateUrl: './shippingaddress.page.html',
  styleUrls: ['./shippingaddress.page.scss'],
})
export class ShippingaddressPage implements OnInit {

  public pagetype:any=2;//1收货地址列表 ；2 收货地址编辑页面
  public dependentColumns:any;
  public mod: any = {
    getuserdetailurl: 'api/user/getuserdetail',//获取用户信息url
    updateurl: 'api/user/updateuser',//修改用户url  
    getuserurl: 'api/user/getuser',
    model: {
      mcs_userId: '',//用户id 
      mcs_name: '',//姓名
      mcs_nickname: '',//昵称
      mcs_gender: '',//性别
      mcs_phone: '', //电话号码
      mcs_marriagestatus: '', //婚姻状况
      mcs_cardid: '', //身份证号码
      mcs_email: '', //邮箱
      mcs_birthday: '', //出生年月
      mcs_profession: '', //职业
      mcs_company: '', //公司
      mcs_signature: '', //个性化签名
      mcs_description: ''//个人说明
    }
  }



  constructor(private modalCtrl: ModalController,
    private _logininfo: Storage_LoginInfo,
    private route: Router,
    private _page: DCore_Page, 
    private _http: DCore_Http,
    private activeRoute: ActivatedRoute) { }




  //定义省市区数据源变量
 public cityList = {
  area:[]
}; 
//userInfo即为最终选中的省市区数据
public userInfo = {
    province:"",
   city:"",
   district:""
};
// 获取本地城市列表服务
getCityData() {
  var postData = {
    id: this._logininfo.GetSystemUserId()
  };
  this._http.get(
    "https://raw.githubusercontent.com/raychenfj/ion-multi-picker/master/example/src/assets/chinese-cities.json",
    postData,
    (res: any) => {
      debugger;
    },
    (err: any) => {
      this._page.alert("消息提示", "操作失败");
    }
  );
}
 


  OnselectText(id) {
    $(id).select();
  }
  ngOnInit() {
  }

}
