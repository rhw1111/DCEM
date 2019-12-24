import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { DCore_Page, DCore_Http, DCore_Valid } from '../../../../component/typescript/dcem.core'
import { SelectSysareaComponent } from '../../../../component/modal/select-sysarea/select-sysarea.component'
import { ActionSheetController } from '@ionic/angular';
declare var AMap;

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private _http: DCore_Http,
    private _page: DCore_Page,
    private _modalCtrl: ModalController,
    private actionSheetController: ActionSheetController) { }
  public state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false
  };
  public model: any = {
    apiUrl: 'api/dealer/getlist', 
    countryId: "DD0D2AE0-E414-EA11-B394-86D989685D12",//UAT:"7E83801C-795B-E911-A824-B53F780FAC1C",
    level: 2,//行政区域级别 0:全球、1:国家、2:省、3:市、4:地区 
    info: {
      provincename: "广东省",
      cityname: "广州市",
    },
    paramets:
    {
      provinceid: "ebf929e0-e414-ea11-b394-86d989685d12",
      cityid: "07fa29e0-e414-ea11-b394-86d989685d12",
      dealertype: "0"//1：体验中心，3：服务中心
    },
    data: []
  }
  onClose(key) {
    this.state[key] = false;
  }
  showModal(key) {
    if (this.model.data.length > 0) {
      this.state[key] = true;
    }
  }
  public map: any = {};
  public markers: any = [];
  ngOnInit() {
    this.map = new AMap.Map("container", {
      resizeEnable: true,
      center: [116.397428, 39.90923],
      zoom: 8
    });
    var marker = new AMap.Marker({
      position: new AMap.LngLat(116.39, 39.9),
      title: '北京'
    });
    this.markers.push(marker);
    this.map.add(marker); 
    this.markLocation(this.map, this.markers, this.model.info.provincename + this.model.info.cityname)
    this.searchData();
  }
  //获取省组件
  async provinceModal() {
    this.model.level = 2;
    const modal = await this._modalCtrl.create({
      component: SelectSysareaComponent,
      componentProps: {
        'pid': this.model.countryId,
        'level': this.model.level,
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != undefined) {
      if (data != null && typeof data != undefined) {
        if (data.id != null) {
          //重置省市区
          if (this.model.paramets.provinceid != data.id) {
            this.model.info.cityname = "--";
            this.model.paramets.cityid = "";
            this.model.paramets.provinceid = data.id;
            this.model.info.provincename = data.name;
          }
        }
      }
    }
  }
  //获取市组件
  async cityModal() {
    this.model.level = 3;
    const modal = await this._modalCtrl.create({
      component: SelectSysareaComponent,
      componentProps: {
        'pid': this.model.paramets.provinceid,
        'level': this.model.level,
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (data != null && typeof data != undefined) {
      if (data != null && typeof data != undefined) {
        if (data.id != null) {
          this.model.paramets.cityid = data.id;
          this.model.info.cityname = data.name;
          this.markLocation(this.map, this.markers, this.model.info.provincename + this.model.info.cityname)
          this.searchData();
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
    if (this.model.info.province != "") {
      this.cityModal()
    }
  }
  //重新定位地图
  markLocation(map, markers, address) {
    AMap.plugin('AMap.Geocoder', function () {
      var geocoder = new AMap.Geocoder();
      geocoder.getLocation(address, function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
          var lng = result.geocodes[0].location.lng;
          var lat = result.geocodes[0].location.lat;
          var marker = new AMap.Marker({
            position: new AMap.LngLat(lng, lat),
          });
          map.setCenter([lng, lat]);
          map.remove(markers);
          markers.push(marker);
          map.add(marker);
          map.setZoom(8);
        } else {
          console.log('定位失败！');
        }
      });
    });
  }
  //搜索体验店
  searchData() {
    this.model.data = [];
    this._page.loadingShow();
    this._http.postForToaken(
      this.model.apiUrl,
      this.model.paramets,
      (res: any) => {
        if (res !== null) {
          var data = res.dealers;
          for (var i in data) {
            var attr = data[i]["Attributes"];
            var obj = {};
            obj["id"] = data[i]["Id"];
            obj["mcs_name"] = attr["mcs_name"];
            obj["mcs_address"] = attr["mcs_address"];
            obj["mcsx"] = attr["mcs_x"];
            obj["mcsy"] = attr["mcs_y"];
            this.model.data.push(obj);
          }
          this.showModal('modal2');
        }
        else {
          this._page.alert("消息提示", "门店信息加载异常");
        }
        this._page.loadingHide();
      },
      (err: any) => {
        this._page.alert("消息提示", "门店信息加载异常");
        this._page.loadingHide();
      }
    );

  }

  clickmarker(lng, lat, obj) {
    this.markDealerLocation(lng, lat, obj, this.model, this.state)
  }
  //重新定位体验店地图
  markDealerLocation(lng, lat, obj, model, state) {
    var marker = new AMap.Marker({
      position: new AMap.LngLat(lng, lat),
      extData: obj,
      cursor: "pointer"
    });
    var markerContent = document.createElement("div");
    var markerImg = document.createElement("img");
    markerImg.className = "markerlnglat";
    markerImg.src = "/assets/img/car.png";
    markerContent.appendChild(markerImg);
    marker.setContent(markerContent);
    this.map.setCenter([lng, lat]);
    this.map.remove(this.markers);
    this.markers.push(marker);
    this.map.add(marker);
    this.map.setZoom(14);
    this.onClose('modal2');
    AMap.event.addListener(marker, 'click', function (e) {
      var obj = e.target.B.extData;
      model.data = [];
      model.data.push(obj);
      if (model.data.length > 0) {
        state['modal2'] = true;
      }
    });
  }
  saveOnClick() {
    debugger;
    // this._page.goto("/personalcenter/testdrive/edit?dealerid="+item["id"]+"&dealername="+item["mcs_name"]);
  }
}
