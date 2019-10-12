import * as tslib_1 from "tslib";
var _a;
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { HttpService } from '../services/http-service.service';
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
    login(token) {
        this.httpService.setToken(token);
        return this.storage.set(TOKEN_KEY, token).then(res => {
            this.authenticationState.next(true);
        });
    }
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
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof Storage !== "undefined" && Storage) === "function" ? _a : Object, Platform, HttpService])
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map