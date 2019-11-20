import { Component, OnInit } from '@angular/core';
declare var AMap;
@Component({
  selector: 'app-dragroute',
  templateUrl: './dragroute.component.html',
  styleUrls: ['./dragroute.component.scss'],
})
export class DragrouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  draw(startlongitude, startlatitude, endlongitude, endlatitude) {
    var map, route;
    //基本地图加载
    map = new AMap.Map("container", {
      resizeEnable: true
    });
    //绘制初始路径
    var path = [];
    path.push([startlongitude, startlatitude]);
    path.push([endlongitude, endlatitude]);
    map.plugin("AMap.DragRoute", function () {
      route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
      route.search(); //查询导航路径并开启拖拽导航
    });
  }

}
