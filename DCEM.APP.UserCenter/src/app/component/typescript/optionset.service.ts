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
                    { "name": "先生", "value": 1 },
                    { "name": "女士", "value": 2 },
                    { "name": "未知", "value": 3 }
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
            case "act_mcs_excutestatus"://培育任务-线索状态
                optionlist = [
                    { "name": "下次跟进", "value": 1 },
                    { "name": "不感兴趣", "value": 2 },
                    { "name": "电话未接通", "value": 3 },
                    { "name": "会持续关注", "value": 4 },
                    { "name": "未来感兴趣", "value": 5 },
                    { "name": "空号/错号", "value": 6 },
                    { "name": "已购买竞品", "value": 7 },
                    { "name": "试乘试驾已预约", "value": 8 },
                    { "name": "非本人行为", "value": 9 },
                    { "name": "配合公司/领导", "value": 10 }
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
                    { "name": "全部", "value": -1 },
                    { "name": "待预约", "value": 1 },
                    { "name": "待检测", "value": 2 },
                    { "name": "已检测", "value": 3 },
                    { "name": "已预约", "value": 4 },
                    { "name": "已收尾款", "value": 5 },
                    { "name": "车联网已开通", "value": 6 },
                    { "name": "交车完成", "value": 7 },
                    { "name": "作废", "value": 99 }
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
                    { "name": "车联网已开通", "value": 8 },
                    { "name": "交车完成", "value": 9 },
                    { "name": "作废", "value": 99 }

                ];
                break;

            case "mcs_approvalstatus"://整车销售-整车订单审批状态
                optionlist = [
                    { "name": "待审核", "value": 0 },
                    { "name": "审核通过", "value": 1 },
                    { "name": "审核不通过", "value": 2 }
                ];
                break;
            case "mcs_vehnetworkstatus"://整车销售-发票信息
                optionlist = [
                    { "name": "草稿", "value": 0 },
                    { "name": "发票信息已上传", "value": 5 }
                ];
                break;
            case "mcs_paycategory"://整车销售-收款记录-收款类型 
            case "mcs_paycategory"://整车销售-收款记录-收款类型 
                optionlist = [
                    { "name": "贷款", "value": 0 },
                    { "name": "定金", "value": 1 },
                    { "name": "尾款", "value": 2 },
                    { "name": "抵扣", "value": 3 }
                ];
                break;
            case "mcs_deliverorderflow"://整车销售-交车单-流程 
                optionlist = [
                    { "name": "PDI检测未提交", "value": 0 },
                    { "name": "PDI检测已提交", "value": 1 },
                    { "name": "PDI检测完成", "value": 2 },
                    { "name": "预约完成", "value": 3 },
                    { "name": "已收尾款", "value": 4 },
                    { "name": "交车完成", "value": 5 }
                ];
                break;
            case "mcs_invoiceidtype"://整车销售-交车单-证件类型 
                optionlist = [
                    { "name": "身份证", "value": 1 },
                    { "name": "护照", "value": 2 },
                    { "name": "驾驶证", "value": 3 },
                    { "name": "港澳台", "value": 4 },
                    { "name": "军官证", "value": 5 }
                ];
                break;
            case "mcs_carproperty"://整车销售-交车单-车辆属性 
                optionlist = [
                    { "name": "家用", "value": 0 },
                    { "name": "营运", "value": 1 },
                    { "name": "其它", "value": 2 }
                ];
                break;
            case "mcs_leadorigin"://售前-唯一线索-主线索来源 
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
            case "mcs_businesstype"://售前-试乘试驾-业务类型
                optionlist = [
                    { "name": "试乘", "value": 10 },
                    { "name": "试驾", "value": 11 }
                ];
                break;
            //售前-试乘试驾-试驾状态(已提交 10、已预约 11、已排程 12、已取消 13、试驾开始 14、试驾结束  15、已反馈  16，已删除 17)
            case "mcs_drivestatus":
                optionlist = [
                    { "name": "已提交", "value": 10 },
                    { "name": "已预约", "value": 11 },
                    { "name": "已排程", "value": 12 },
                    { "name": "已取消", "value": 13 },
                    { "name": "试驾开始", "value": 14 },
                    { "name": "试驾结束", "value": 15 },
                    { "name": "已反馈", "value": 16 },
                    { "name": "已删除", "value": 17 }
                ];
                break;
            //维保-维保预约-取消原因(待料 10、价格太高 20、设备不足 30、堵车 40、技术不足 50、天气不好  60)
            case "mcs_cancelreasonnew":
                optionlist = [
                    { "name": "待料", "value": 10 },
                    { "name": "价格太高", "value": 20 },
                    { "name": "设备不足", "value": 30 },
                    { "name": "堵车", "value": 40 },
                    { "name": "技术不足", "value": 50 },
                    { "name": "天气不好", "value": 60 }
                ];
                break;
            //维保-维保预约-服务类型(10-汽车美容 20-钣金喷漆 30-常规保养 40-一般维修 50-保修 60-其他)
            case "mcs_ordertype":
                optionlist = [
                    { "name": "汽车美容", "value": 10 },
                    { "name": "钣金喷漆", "value": 20 },
                    { "name": "常规保养", "value": 30 },
                    { "name": "一般维修", "value": 40 },
                    { "name": "保修", "value": 50 },
                    { "name": "其他", "value": 60 }
                ];
                break;
            //C端用户-性别
            case "user_mcs_gender":
                optionlist = [
                    { "name": "男", "value": 1 },
                    { "name": "女", "value": 2 }
                ];
                break;
            //C端用户-婚姻状况
            case "user_mcs_marriagestatus":
                optionlist = [
                    { "name": "未婚", "value": 0 },
                    { "name": "已婚", "value": 1 }
                ];
                break;
        }
        return optionlist;
    }
}
