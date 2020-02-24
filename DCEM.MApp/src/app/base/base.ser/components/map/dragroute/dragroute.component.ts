import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';
declare var AMap;
@Component({
  selector: 'app-dragroute',
  templateUrl: './dragroute.component.html',
  styleUrls: ['./dragroute.component.scss'],
})
export class DragrouteComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController, 
    private _navParams: NavParams

) {
  debugger;
    this.model.startlongitude = _navParams.get('startlongitude');
    this.model.startlatitude = _navParams.get('startlatitude');
    this.model.endlongitude = _navParams.get('endlongitude');
    this.model.endlatitude = _navParams.get('endlatitude');
}

  public model: any = {
    startlongitude:116.303843,
    startlatitude:39.983412,
    endlongitude:116.407012,
    endlatitude:39.992093
  };
  ngOnInit() {
    debugger;
    var map, route;
    //基本地图加载
    map = new AMap.Map("container", {
      resizeEnable: true,
    }); 
    //绘制初始路径
    var path = []; 
    path.push([this.model.startlatitude, this.model.startlongitude]);
    path.push([this.model.endlatitude, this.model.endlongitude]);
    console.log(path);
    map.plugin("AMap.DragRoute", function () {
      route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
      route.search(); //查询导航路径并开启拖拽导航
    });
    console.log("结束");
  }
  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  } 
}
