import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as echarts from 'echarts';
let AppointmenttrendPage = class AppointmenttrendPage {
    constructor() { }
    ngOnInit() {
    }
    ionViewDidEnter() {
        const ec = echarts;
        const container = document.getElementById('chart');
        const chart = ec.init(container);
        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c}'
            },
            legend: {
                left: 'left',
                data: ['2的指数', '3的指数']
            },
            xAxis: {
                type: 'category',
                name: 'x',
                splitLine: { show: false },
                data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'log',
                name: 'y'
            },
            series: [
                {
                    name: '3的指数',
                    type: 'line',
                    data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
                },
                {
                    name: '2的指数',
                    type: 'line',
                    data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
                },
                {
                    name: '1/2的指数',
                    type: 'line',
                    data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
                }
            ]
        };
        chart.setOption(option);
    }
};
AppointmenttrendPage = tslib_1.__decorate([
    Component({
        selector: 'app-appointmenttrend',
        templateUrl: './appointmenttrend.page.html',
        styleUrls: ['./appointmenttrend.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppointmenttrendPage);
export { AppointmenttrendPage };
//# sourceMappingURL=appointmenttrend.page.js.map