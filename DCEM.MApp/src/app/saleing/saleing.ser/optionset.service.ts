import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
/**
 * 选项集定义，后续优化通过接口获取
 */
export class OptionSetService {
    /**
     * 通过选项名称获取option值
     * @param optionname 选项集名称
     * @param value 选项集值
     */
    GetOptionSetNameByValue(optionname, value: string) {
        var result = "--";
        var obj = this.Get(optionname);
        if (obj != null && obj.length > 0) {
            for (var i = 0; i < obj.length; i++) {
                if (value == obj[i]["value"]) {
                    return obj[i]["name"];
                }
            }
        }
        return result;
    }
    /**
     * 静态数据通用
     * @param name 
     */
    Get(name) {
        let optionlist: any = [];
        switch (name) {
            case "towoption"://是否选项集
                optionlist = [
                    { "name": "否", "value": 0 },
                    { "name": "是", "value": 1 }
                ];
                break;
            case "mcs_gender"://称呼
                optionlist = [
                    { "name": "先生", "value": 0 },
                    { "name": "女士", "value": 1 },
                    { "name": "未知", "value": 2 }
                ];
                break;

            case "mcs_level"://意向等级
                optionlist = [
                    { "name": "预计90天内成交", "value": 0 },
                    { "name": "预计3~6个月内成交", "value": 1 },
                    { "name": "预计6~12个月内成交", "value": 2 },
                    { "name": "预计12个月以上成交", "value": 3 },
                    { "name": "战败", "value": 5 },
                    { "name": "订单 ", "value": 6 }
                ];
                break;
            case "mcs_purchasepurpose"://车辆用途
                optionlist = [
                    { "name": "家用", "value": 0 },
                    { "name": "运营", "value": 1 },
                    { "name": "其他", "value": 2 }
                ];
                break;
            case "mcs_purchaseway"://购买方式
                optionlist = [
                    { "name": "全款", "value": 0 },
                    { "name": "贷款", "value": 1 }
                ];
                break;
            case "mcs_generation"://年龄段
                optionlist = [
                    { "name": "18岁以下", "value": 0 },
                    { "name": "18~25岁", "value": 1 },
                    { "name": "26~35岁", "value": 2 },
                    { "name": "36~45岁", "value": 3 },
                    { "name": "46~55岁", "value": 4 },
                    { "name": "56岁以上", "value": 5 }
                ];
                break;
            case "mcs_carereason"://购买原因
                optionlist = [
                    { "name": "环保", "value": 9 },
                    { "name": "科技", "value": 10 },
                    { "name": "安全", "value": 6 },
                    { "name": "性能", "value": 11 },
                    { "name": "售后成本", "value": 12 },
                    { "name": "品牌", "value": 2 },
                    { "name": "价格", "value": 3 },
                    { "name": "配置", "value": 4 },
                    { "name": "服务", "value": 5 },
                    { "name": "舒适性", "value": 7 },
                    { "name": "残值", "value": 8 }
                ];
                break;
            case "mcs_vehicleusers"://车辆使用人
            optionlist = [
                { "name": "自己", "value": 1 },
                { "name": "妻子", "value": 2 },
                { "name": "子女", "value": 3 }
            ];
            break;
            case "mcs_leadorigin"://线索来源
            optionlist = [
                { "name": "WEB官网", "value": 1 },
                { "name": "Event-Online", "value": 2 },
                { "name": "Event-OffLine", "value": 3 },
                { "name": "Store展厅", "value": 4 },
                { "name": "400电话", "value": 5 },
                { "name": "APP", "value": 6 },
                { "name": "小程序", "value": 7 },
                { "name": "车机", "value": 8 },
                { "name": "H5落地页", "value": 9 },
                { "name": "3D展厅", "value": 10 }
            ];
            break;
         
            case "mcs_importantlevel"://培育任务-重要级别
            optionlist = [
                { "name": "高", "value": 0 },
                { "name": "中", "value": 1 },
                { "name": "低", "value": 2 }
            ];
            break;

            case "mcs_activitystatus"://培育任务-任务状态
            optionlist = [
                { "name": "open", "value": 0 },
                { "name": "closed", "value": 1 }          
            ];
            break;

            default:
                optionlist = [];
                break;
            case "lead_mcs_accountpoints"://原始线索评分
                optionlist = [
                    { "name": "1分", "value": 1 },
                    { "name": "2分", "value": 2 },
                    { "name": "3分", "value": 3 }
                ];
                break;
            case "lead_mcs_leadorigin"://原始线索来源
                optionlist = [
                    { "name": "WEB官网", "value": 1 },
                    { "name": "Event-Online", "value": 2 },
                    { "name": "Event-OffLine", "value": 3 },
                    { "name": "Store展厅", "value": 4 },
                    { "name": "400电话", "value": 5 },
                    { "name": "APP", "value": 6 },
                    { "name": "小程序", "value": 7 },
                    { "name": "车机", "value": 8 },
                    { "name": "H5落地页", "value": 9 },
                    { "name": "3D展厅", "value": 10 }
                ];
                break;
            case "lead_mcs_gender"://原始线索称呼
                optionlist = [
                    { "name": "先生", "value": 1 },
                    { "name": "女士", "value": 2 },
                    { "name": "未知", "value": 3 }
                ];
                break;
        }
        return optionlist;
    }
}
