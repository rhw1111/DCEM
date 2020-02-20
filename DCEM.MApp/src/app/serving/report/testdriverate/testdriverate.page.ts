import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-testdriverate',
  templateUrl: './testdriverate.page.html',
  styleUrls: ['./testdriverate.page.scss'],
})
export class TestdriveratePage implements OnInit {

  constructor(
    private menuController:MenuController,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuController.enable(true);
    const ec = echarts as any;
    const container = document.getElementById('chart');
    const chart = ec.init(container);
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ]
        }
      ]
    };
    chart.setOption(option);
  }
}
