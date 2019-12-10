import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../../component/modal/login/login.component'
import { DCore_Http, DCore_Page, DCore_Valid } from '../../../component/typescript/dcem.core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Storage_LoginInfo } from '../../../component/typescript/logininfo.storage';
import { ModalController } from '@ionic/angular';
import { SelectSysareaComponent } from '../../../component/modal/select-sysarea/select-sysarea.component';
import * as $ from 'jquery';
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
    deleteurl: 'api/shippingaddress/delete',
    datalist: [],//数据集合
    isending: false,//是否加载完成  
    countryId: "DD0D2AE0-E414-EA11-B394-86D989685D12",//UAT:"7E83801C-795B-E911-A824-B53F780FAC1C",
    level: 2,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区
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
    private _modalCtrl: ModalController,
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
    this._http.post(this.mod.search.getlisturl,
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
        //else {
        //  this._page.alert("消息提示", "数据加载异常");
        //}
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
        this.mod.model.id = item.id;
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
        this.mod.model.mcs_isdefault = item.mcs_isdefault ? 0 : 1;
      }
    });
    if (id == null) {
      this.mod.model.mcs_isdefault = 1;
      this.mod.model.mcs_userid = this._logininfo.GetSystemUserId();
    }
    this.pagetype = 2;
  }


  onPost() {
    if(this.mod.model.mcs_city==null){
      this._page.alert("消息提示", "请选择城市");
      return false;
    }
    if(this.mod.model.mcs_area==null){
      this._page.alert("消息提示", "请选择地区");
      return false;
    }
    if(this.mod.model.mcs_province==null){
      this._page.alert("消息提示", "请选择省份");
      return false;
    }
    if(this.mod.model.mcs_address==null){
      this._page.alert("消息提示", "请输入详细地址");
      return false;
    }
    if(this.mod.model.mcs_phone==null){
      this._page.alert("消息提示", "请输入电话");
      return false;
    }
    if(this.mod.model.mcs_name==null){
      this._page.alert("消息提示", "请输入姓名");
      return false;
    }
    this._http.post(this.mod.addorupateurl,
      {
        mcs_shippingaddressid: this.mod.model.id,
        userid: this.mod.model.mcs_userid,
        mcs_area: this.mod.model.mcs_area,
        mcs_city: this.mod.model.mcs_city,
        mcs_province: this.mod.model.mcs_province,
        mcs_isdefault: this.mod.model.mcs_isdefault,
        mcs_address: this.mod.model.mcs_address,
        mcs_phone: this.mod.model.mcs_phone,
        mcs_name: this.mod.model.mcs_name
      },
      (res: any) => {
        if (res.Result) {
          this.mod.datalist = [];
          this.getList(null);
          this.pagetype = 1;
          this._page.alert("消息提示", "保存成功！");
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

//设置默认
  onIsDef(id,mcs_userid) {
    
    this._http.post(this.mod.addorupateurl,
      {
        mcs_shippingaddressid: id,
        userid: mcs_userid,
        mcs_area: null,
        mcs_city: null,
        mcs_province: null,
        mcs_isdefault: 0,
        mcs_address: null,
        mcs_phone:null,
        mcs_name: null
      },
      (res: any) => {
        if (res.Result) {
          this.mod.datalist = [];
          this.getList(null); 
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


  onDele(id) {
    this._page.confirm("确认提示", "是否删除？",()=>{
        
      this._http.post(this.mod.deleteurl,
        {
          mcs_shippingaddressid: id 
        },
        (res: any) => {
          if (res.Result) {
              this.mod.datalist = [];
              //var storage = window.localStorage;
              //var addrdata = storage.getItem("chooseaddr");
              //if (addrdata != null && addrdata.indexOf(id) >= 0) {
              //    storage.removeItem("chooseaddr");
              //} 
            this.getList(null); 
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
    
    });
   
  }



  //获取省组件
  async provinceModal() {
    this.mod.level = 2;
    const modal = await this._modalCtrl.create({
      component: SelectSysareaComponent,
      componentProps: {
        'pid': this.mod.countryId,
        'level': this.mod.level,
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != "undefined") {
      if (data != null && typeof data != "undefined") {
        //重置省市区
        if (this.mod.model.mcs_province != data.id) {
          //城市名称
          this.mod.model.mcs_cityname = "--";
          //城市ID
          this.mod.model.mcs_city = "";
          //区名称
          this.mod.model.mcs_areaname = "--";
          //区ID
          this.mod.model.mcs_area = "";
          this.mod.model.mcs_province = data.id;
          this.mod.model.mcs_provincename = data.name;
        }
      }
    }
  }

  //获取市组件
  async cityModal() {
    this.mod.level = 3;
    const modal = await this._modalCtrl.create({
      component: SelectSysareaComponent,
      componentProps: {
        'pid': this.mod.model.mcs_province,
        'level': this.mod.level,
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != "undefined") {
      if (data != null && typeof data != "undefined") {
        //重置省市区
        if (this.mod.model.mcs_city != data.id) {
          //区名称
          this.mod.model.mcs_areaname = "--";
          //区ID
          this.mod.model.mcs_area = "";
          this.mod.model.mcs_city = data.id;
          this.mod.model.mcs_cityname = data.name;
        }
      }
    }
  }

  //获取区组件
  async districtModal() {
    this.mod.level = 4;
    const modal = await this._modalCtrl.create({
      component: SelectSysareaComponent,
      componentProps: {
        'pid': this.mod.model.mcs_city,
        'level': this.mod.level,
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != "undefined") {
      if (data != null && typeof data != "undefined") {
        if (data.id != "undefined") {
          this.mod.model.mcs_area = data.id;
          this.mod.model.mcs_areaname = data.name;
        }
      }
    }
  }

  //触发省事件
  provinceOnClick() {
    this.provinceModal()
  }

  //触发市事件
  cityOnClick() {
    if (this.mod.model.mcs_province != "") {
      this.cityModal()
    }
  }

  //触发区事件
  districtOnClick() {
    if (this.mod.model.mcs_city != "") {
      this.districtModal()
    }
  }
    //选择地址
    chooseAddr(id) {
        var addr = null;
        this.mod.datalist.forEach(item => {
            if (item.id == id) {
                addr = item;
            }
        });
        //var storage = window.localStorage;
        //storage.setItem("chooseaddr", JSON.stringify(addr));
        this._page.goto("/servicecenter/preorder/preorder", { addr: JSON.stringify(addr) });
    }
}
