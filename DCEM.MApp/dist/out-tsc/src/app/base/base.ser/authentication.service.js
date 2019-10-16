import * as tslib_1 from "tslib";
var _a, _b;
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { HttpService } from './http-service.service';
const TOKEN_KEY = 'auth-token';
let AuthenticationService = class AuthenticationService {
    constructor(storage, plt, httpService) {
        this.storage = storage;
        this.plt = plt;
        this.httpService = httpService;
        this.authenticationState = new BehaviorSubject(false);
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }
    //登录设置登录状态
    login(token) {
        this.httpService.setToken(token);
        return this.storage.set(TOKEN_KEY, token).then(res => {
            this.authenticationState.next(true);
        });
    }
    //注销，清空登录状态
    logout() {
        return this.storage.remove(TOKEN_KEY).then(() => {
            this.authenticationState.next(false);
        });
    }
    isAuthenticated() {
        return this.authenticationState.value;
    }
    checkToken() {
        return this.storage.get(TOKEN_KEY).then(res => {
            if (res) {
                this.authenticationState.next(true);
            }
        });
    }
};
AuthenticationService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Storage !== "undefined" && Storage) === "function" ? _a : Object, typeof (_b = typeof Platform !== "undefined" && Platform) === "function" ? _b : Object, HttpService])
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map