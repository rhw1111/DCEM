
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
}


