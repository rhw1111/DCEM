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

  public pagetype: any = 1;//1收货地址列表 ；2 收货地址编辑页面
  public dependentColumns: any;
  public mod: any = {
    getdetailurl: 'api/shippingaddress/getdetail',
    addorupateurl: 'api/shippingaddress/addorupate',
    datalist: [],//数据集合
    isending: false,//是否加载完成
    search: {
      getlisturl: "api/shippingaddress/getlist",
      pageSize: 10,//页数
      page: 1,//分页
    },
    model: {
      id: '',
      mcs_userid: '',//用户id 
      mcs_area: '',//  地区id
      mcs_city: '',//   城市id
      mcs_province: '',//   省份id 
      mcs_areaname: '',//  地区名称
      mcs_cityname: '',//   城市名称
      mcs_provincename: '',//   省份名称
      mcs_address: '',//   详细地址
      mcs_isdefault: '',//  是否默认 
      mcs_phone: '',//  电话 
      mcs_name: '' //姓名 
    }
  }



  constructor(private modalCtrl: ModalController,
    private _logininfo: Storage_LoginInfo,
    private route: Router,
    private _page: DCore_Page,
    private _http: DCore_Http,
    private activeRoute: ActivatedRoute) { }



  //下拉刷新
  doRefresh(event) {
    this.mod.datalist = [];
    this.mod.search.page = 1;
    this.mod.isending = false;
    this.getList(event);
  }
  //加载下一页
  doLoading(event) {
    this.mod.search.page++;
    this.getList(event);
  }
  //初始化页面数据加载
  initListLoading() {
    this._page.loadingShow();
    this.getList(null);
  }

  //获取列表数据
  getList(event) {
    this._http.postForShopping(this.mod.search.getlisturl,
      {
        PageSize: this.mod.search.pageSize,
        PageIndex: this.mod.search.page,
        mcs_userid: this._logininfo.GetSystemUserId()
      },
      (res: any) => {
        if (res != null && res.Data !== null) {
          //绑定数据
          res.Data.forEach(item => {
            var dat = {
              id: item.Id,
              mcs_userid: item.Attributes["_mcs_userid_value"],
              mcs_name: item.Attributes["mcs_name"],
              mcs_province: item.Attributes["_mcs_province_value"],
              mcs_city: item.Attributes["_mcs_city_value"],
              mcs_area: item.Attributes["_mcs_area_value"],
              mcs_address: item.Attributes["mcs_address"],
              mcs_phone: item.Attributes["mcs_phone"],
              mcs_provincename: item.Attributes["_mcs_province_value@OData.Community.Display.V1.FormattedValue"],
              mcs_cityname: item.Attributes["_mcs_city_value@OData.Community.Display.V1.FormattedValue"],
              mcs_areaname: item.Attributes["_mcs_area_value@OData.Community.Display.V1.FormattedValue"],
              mcs_isdefault: item.Attributes["mcs_isdefault"]
            }
            this.mod.datalist.push(dat);
          });

          event ? event.target.complete() : '';
          //判断是否有新数据
          if (res.Data.length < this.mod.search.pageSize) {
            event ? event.target.disabled = true : "";
            this.mod.isending = true;
          }
        }
        else {
          this._page.alert("消息提示", "数据加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "数据加载异常");
        this._page.loadingHide();
      }
    );
  }

  OnselectText(id) {
    $(id).select();
  }
  ngOnInit() {
    this.initListLoading();
  }
  onRetrun() { 
    if (this.pagetype == 2)
      this.pagetype = 1;
    else
      this.route.navigate(['/tabs/personalcenter'], {
        queryParams: {
          return: "1"
        }
      });
  }


  onEdit(id: any) {
    this.mod.datalist.forEach(item => {
      if (item.id == id) {
        this.mod.model.id = item.Id;
        this.mod.model.mcs_userid = item.mcs_userid;
        this.mod.model.mcs_name = item.mcs_name;
        this.mod.model.mcs_province = item.mcs_province;
        this.mod.model.mcs_city = item.mcs_city;
        this.mod.model.mcs_area = item.mcs_area;
        this.mod.model.mcs_address = item.mcs_address;
        this.mod.model.mcs_phone = item.mcs_phone;
        this.mod.model.mcs_provincename = item.mcs_provincename;
        this.mod.model.mcs_cityname = item.mcs_cityname;
        this.mod.model.mcs_areaname = item.mcs_areaname;
        this.mod.model.mcs_isdefault = item.mcs_isdefault;
      }
    });
    this.pagetype = 2;

  }
}
