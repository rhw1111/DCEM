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
    debugger;
    var map = new AMap.Map('container', {
      zoom: 11,//级别
      center: [116.397428, 39.90923],//中心点坐标
      viewMode: '3D'//使用3D视图
    });
    AMap.plugin('AMap.DragRoute', function () {//异步加载插件
      var toolbar = new AMap.DragRoute();
      map.addControl(toolbar);
    });
    map.plugin('AMap.DragRoute', function () {
      // path 是驾车导航的起、途径和终点，最多支持16个途经点
      var path = []

      path.push([116.303843, 39.983412])
      path.push([116.321354, 39.896436])
      path.push([116.407012, 39.992093])

      var route = new AMap.DragRoute(map, path, AMap.DrivingPolicy.LEAST_FEE)
      // 查询导航路径并开启拖拽导航
      route.search()
    })
  }

}
