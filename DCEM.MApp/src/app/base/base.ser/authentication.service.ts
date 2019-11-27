import { Platform,NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { HttpService } from './http-service.service';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform,
    private httpService:HttpService,
    private navCtr:NavController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
  //登录设置登录状态
  login(token) {
    this.httpService.setToken(token);
    return this.storage.set(TOKEN_KEY, token).then(
      res => {
         this.authenticationState.next(true);
      }
    );
  }

  //注销，清空登录状态
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
      this.navCtr.navigateRoot("/base/uc/login", {});
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
}