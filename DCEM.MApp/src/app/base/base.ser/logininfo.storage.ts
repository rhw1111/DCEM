
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
/*
用户信息
*/
export class Storage_LoginInfo {

    private userinfo: string = "logo_userinfo";
    SetInfo(data: any) {
        window.localStorage.setItem(this.userinfo, data);
    }
    GetUserInfo() {
        var data = window.localStorage.getItem(this.userinfo);
        return JSON.parse(data);
    }
    //获取token
    GetToken() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.access_token;
        return null;
    }
    //获取用户userid
    GetSystemUserId() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.systemuserid;
        return null;
    }
    //获取用户名称
    GetDomainname() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.domainname;
        return null;
    }
    //用户名
    GetLastname() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.lastname;
        return null;
    }
    //姓
    GetFirstname() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.firstname;
        return null;
    }
    //工号
    GetStaffid() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.mcs_staffid;
        return null;
    }
    //经销商编码
    GetDealerid() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.mcs_dealerid;
        return null;
    }
    //经销商名称
    GetDealername() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.mcs_dealername;
        return null;
    }
    //获取拥有角色名称
    GetRoleNames() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.rolenames;
        return null;
    }
    //验证是否是销售顾问
    IsSalingManager() {
        var result=false;
        var data = this.GetUserInfo();
        if (data != null){
            if(data.rolenames.indexOf('系统管理员')!=-1){
                result= true;
            }
            else if(data.rolenames.indexOf('厅店销售机会跟进人员')!=-1){
                result= true;
            }
        }
        return result;
    }
    //验证是否是服务顾问
    IsServingManager() {
        var result=false;
        var data = this.GetUserInfo();
        if (data != null){
            if(data.rolenames.indexOf('系统管理员')!=-1){
                result= true;
            }
            else if(data.rolenames.indexOf('维保-服务顾问')!=-1){
                result= true;
            }
        }
        return result;
    }
}


