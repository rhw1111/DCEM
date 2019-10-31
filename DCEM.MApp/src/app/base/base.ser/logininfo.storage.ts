 
import { Injectable } from '@angular/core';

 
@Injectable({
    providedIn: 'root'
})
export class  Storage_LoginInfo{
    private access_token: string="access_token";
    private systemuserid: string="systemuserid";
    private domainname: string="domainname";
    private lastname: string="lastname";
    private firstname: string="firstname";
    private mcs_staffid: string="mcs_staffid";
    private mcs_dealerid: string="mcs_dealerid";
    private mcs_dealername: string="mcs_dealername";
     SetInfo(data: any) { 
        window.localStorage.setItem(this.access_token, data.access_token); 
        window.localStorage.setItem(this.systemuserid, data.systemuserid); 
        window.localStorage.setItem(this.domainname, data.domainname); 
        window.localStorage.setItem(this.lastname, data.lastname); 
        window.localStorage.setItem(this.firstname, data.firstname); 
        window.localStorage.setItem(this.mcs_staffid, data.mcs_staffid); 
        window.localStorage.setItem(this.mcs_dealerid, data.mcs_dealerid);  
        window.localStorage.setItem(this.mcs_dealername, data.mcs_dealername); 
    }
    //获取token
     GetToken() {
        return window.localStorage.getItem(this.access_token); 
    } 
     //获取用户userid
    GetSystemUserId( ) {
        return window.localStorage.getItem(this.systemuserid); 
    } 
    //获取用户名称
    GetDomainname( ) {
        return window.localStorage.getItem(this.domainname); 
    }
    //用户名
     GetLastname( ) {
        return window.localStorage.getItem(this.lastname); 
    } 
    //姓
    GetFirstname( ) {
        return window.localStorage.getItem(this.firstname); 
    }
     //工号
     GetStaffid( ) {
        return window.localStorage.getItem(this.mcs_staffid); 
    }
    //经销商编码
    GetDealerid( ) {
        return window.localStorage.getItem(this.mcs_dealerid); 
    }
    //经销商名称
    GetDealername( ) {
        return window.localStorage.getItem(this.mcs_dealername); 
    }
}
 

