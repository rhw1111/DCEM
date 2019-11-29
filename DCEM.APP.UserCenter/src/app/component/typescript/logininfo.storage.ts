
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
/*
用户信息
*/
export class Storage_LoginInfo {

    private userinfo: string = "login_userinfo";
    SetInfo(data: any) {
        window.localStorage.setItem(this.userinfo, data);
    }
    GetUserInfo() {
        var data = window.localStorage.getItem(this.userinfo);
        return JSON.parse(data);
    }
    //获取用户userid
    GetSystemUserId() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.systemuserid;
        return null;
    }
    //获取用户名称
    GetName() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.name;
        return null;
    }
    //用户昵称
    GetNickName() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.nickname;
        return null;
    }
    //用户性别
    GetGender() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.gender;
        return null;
    }
    //用户账号
    GetAccount() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.account;
        return null;
    }
     //电话号码
     GetPhone() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.phone;
        return null;
    }
    //身份证号码
    GetCardid() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.cardid;
        return null;
    }
    //邮箱
    GetEmail() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.email;
        return null;
    }
    //出生
    GetBirthday() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.birthday;
        return null;
    }
    //婚姻状况
    GetMarriagestatus() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.marriagestatus;
        return null;
    }
    //个人签名
    GetSignature() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.signature;
        return null;
    }


    //用户编码
    GetCode() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.code;
        return null;
    }
    //会员编码
    GetMemberid() {
        var data = this.GetUserInfo();
        if (data != null)
            return data.memberid;
        return null;
    }


}


