import { Component, OnInit } from '@angular/core';

declare var AMap;
@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {

  constructor() { }

  ngOnInit() { 
    var map, route, marker;
    //基本地图加载
    map = new AMap.Map("container", {
        resizeEnable: true
    });
    //绘制初始路径
    var path = [];
    path.push([116.303843, 39.983412]);
    path.push([116.321354, 39.896436]);
    path.push([116.407012, 39.992093]);
    map.plugin("AMap.DragRoute", function() {
        route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE); //构造拖拽导航类
        route.search(); //查询导航路径并开启拖拽导航
    });
  }

}
