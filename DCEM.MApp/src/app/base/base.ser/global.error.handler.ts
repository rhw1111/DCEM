
// import {ErrorHandler, Injectable} from "@angular/core";
// import {Events} from "@ionic/angular";

// @Injectable({
//     providedIn: 'root'
// })

// export class GlobalErrorHandler implements ErrorHandler {

//   constructor(private events: Events) {
//   }

//   handleError(err: any): void {
//     if (err.status === 401) {
//       this.events.publish('userCheck');
//       alert("接口请求异常，无权限");
//     }
//     console.log("请求异常：err.status："+err.status);
//     // do something with the errorswitch
//   }
// }
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import {Events,AlertController } from "@ionic/angular";
import { DCore_Page } from 'app/base/base.ser/Dcem.core';
import { MessageService } from 'app/base/base.ser/message.service';
// import { NGXLogger } from 'ngx-logger';
// import * as StackTrace from 'stacktrace-js';

/**
 * 全局异常处理
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private injector: Injector,
    private events: Events,
    public _page: DCore_Page) { }

  handleError(error) {
    this.events.publish('userCheck');
    const message = error.message ? error.message : error.toString();
    const status= error.status ? error.status : error.toString();
    if (status === 0 
      && error.name === 'HttpErrorResponse' 
      && error.statusText === 'Unknown Error') {
      this._page.alert(MessageService.ErrorRequestException,MessageService.ErrorRequestServer);
    }
    else if (status === 401) {
      this.events.publish('userCheck');
      this._page.alert(MessageService.ErrorRequestException,MessageService.ErrorNoAuth);
    }
    //this._page.alert(MessageService.ErrorRequestException,message);
  }
}
