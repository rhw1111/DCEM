import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
/**
 * 选项集定义，后续优化通过接口获取
 */
export class OptionSetService {
    /**
     * 通过选项名称,及value值获取option显示名称
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
     * 通过选项名称获取option值
     * @param optionname 选项集名称
     * @param name 选项名称
     */
    GetOptionSetValueByName(optionname, name: string) {
        var result = "";
        var obj = this.Get(optionname);
        if (obj != null && obj.length > 0) {
            for (var i = 0; i < obj.length; i++) {
                if (name == obj[i]["name"]) {
                    return obj[i]["value"];
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
            case "mcs_customerstatus"://销售机会状态
                optionlist = [
                    { "name": "待指派", "value": 1 },
                    { "name": "已指派", "value": 2 },
                    { "name": "申请战败", "value": 3 },
                    { "name": "已成交", "value": 4 },
                    { "name": "已战败", "value": 5 },
                    { "name": "已关闭", "value": 6 }
                ];
                break;
            case "mcs_deliverystatus"://整车销售-交车单-交车单状态
                optionlist = [
                    { "name": "待预约", "value": 1 },
                    { "name": "待检测", "value": 2 },
                    { "name": "已检测", "value": 3 },
                    { "name": "已预约", "value": 4 },
                    { "name": "已收尾款", "value": 5 },
                    { "name": "车联网已开通", "value": 6 },
                    { "name": "交车完成", "value": 7 },
                    { "name": "作废", "value":99 }
                ];
                break;

             case "mcs_rostatus"://整车销售-整车订单状态
                optionlist = [
                    { "name": "订金待支付", "value": 1 },
                    { "name": "订金已支付", "value": 2 },
                    { "name": "订单确认", "value": 3 },
                    { "name": "等待排产", "value": 4 },
                    { "name": "生产中", "value": 5 },
                    { "name": "车辆在途", "value": 6 },
                    { "name": "等待交车", "value": 7 },
                    { "name": "车联网已开通", "value":8 },
                    { "name": "交车完成", "value": 9 },
                    { "name": "作废", "value":99 }

                ];
                break;
        }
        return optionlist;
    }
}
