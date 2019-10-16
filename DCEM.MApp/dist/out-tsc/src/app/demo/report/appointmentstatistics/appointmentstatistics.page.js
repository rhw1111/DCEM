import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as echarts from 'echarts';
let AppointmentstatisticsPage = class AppointmentstatisticsPage {
    constructor() { }
    ngOnInit() {
    }
    ionViewDidEnter() {
        const ec = echarts;
        const container = document.getElementById('chart');
        const chart = ec.init(container);
        const option = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        chart.setOption(option);
    }
};
AppointmentstatisticsPage = tslib_1.__decorate([
    Component({
        selector: 'app-appointmentstatistics',
        templateUrl: './appointmentstatistics.page.html',
        styleUrls: ['./appointmentstatistics.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AppointmentstatisticsPage);
export { AppointmentstatisticsPage };
//# sourceMappingURL=appointmentstatistics.page.js.map