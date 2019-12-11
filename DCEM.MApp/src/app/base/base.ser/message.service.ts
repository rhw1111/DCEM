import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * 错误信息定义
 */
export class MessageService {
  //------------标题信息-----------------
  /**消息提醒 */
  public static AlterTitleMessage:any='消息提醒';
 
  //------------错误提示-----------------
  /**请求异常*/
  public static ErrorRequestException:string='请求异常';
  /**请求超时*/
  public static ErrorRequestTimeout:string='请求超时';
  /**服务器响应失败500 */
  public static ErrorRequestServer:string="后台服务遇到了问题，目前正在修复中，请稍后访问，给您带来不便,深表歉意。";
  /**权限不够 */
  public static ErrorNoAuth:string="权限不够，请重新登录。";
  //------------信息提醒-----------------
  /**操作成功*/
  public static InfoOprationSucceed:string='操作成功';
  /**操作成功*/
  public static InfoOprationFailed:string='操作失败';
  /**保存失败！*/
  public static InfoSaveFailed:string='保存失败！';
  /**登录成功*/
  public static InfoLoginSuccess:string='登录成功';
  /**登录失败*/
  public static InfoLoginFailed:string='登录失败';
  /**退出系统成功*/
  public static InfoLoginOut:string='退出系统成功';
  public static InfoLoginOutAlter:string="退出后不会删除任何历史数据";
  //------------验证信息---------------------
  /**手机号不能为空*/
  public static ValidPhoneIsNull:string='手机号不能为空';
  /**请输入主题*/
  public static ValidTitleIsNull:string='请输入主题';
  /**请选择技术系统*/
  public static ValidTechsystemIsNull:string='请选择技术系统';
  /**请选择故障类别代码*/
  public static ValidMalfunctiontypeIsNull:string='请选择故障类别代码';

  //-------------页面标题----------------
  /**编辑技术支持申请单*/
  public static PageTitleEditTech:any='编辑技术支持申请单';
  /**新增技术支持申请单*/
  public static PageTitleAddTech:any='新增技术支持申请单';
  /**暂时没有数据 */
  public static PageNoData:any='暂时没有数据';
  /**没有更多数据了 */
  public static PageNoMore:any='没有更多数据了';
  //订单状态不允许修改！
  public static PageCannotEdit:any='订单状态不允许修改！';
}
