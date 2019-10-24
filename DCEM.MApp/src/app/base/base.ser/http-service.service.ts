import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { isObject, isFunction, debug } from 'util';
import { LoadingController } from '@ionic/angular';
import { AppConfig } from '../../app.config';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  isLoadingOpen: boolean = false;
  private InterfacePreURL="";
  constructor(
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private toastCtrl:ToastController
  ) {

  }
  public postForToaken(
    url: string,
    params: any,
    successCallback,
    errorCallback
  ): any {
    // 此处使用的post模式为非严格模式，如果要使用严格模式，请把参数放在第二个位置 覆盖null
    return this.http
      .post(this.getEnvironmentUrl()+url,null, {
        params: this.encodeHttpParams(params),
        headers: this.getHeaders()
      })
      .subscribe(
        (res: any) => {
          console.log(res);
          this.responseSuccess(res, function(msg) {
            if (successCallback) {
              successCallback(res, msg);
            }
          });
        },
        err => {
          if (errorCallback) {
            errorCallback(err);
          }
        }
      );
  }

  //get数据
  getForToaken(url: string, params?: any): any {
    return this.http.get(this.getEnvironmentUrl()+url, {
      params: this.encodeComplexHttpParams(params),
      headers: this.getHeaders()
    });
  }
  GET(
    url: string,
    params: any,
    callback?: (res: any, err: any) => void
  ): void {
    this.http
      .get(this.getEnvironmentUrl()+url, { params: this.encodeComplexHttpParams(params) })
      .subscribe(
        res => {
          console.log('get res=' + res);
          callback && callback(res, null);
        },
        error => {
          callback && callback(null, error);
        }
      );
  }

  POST(
    url: string,
    params: any,
    callback?: (res: any, error: any) => void
  ): void {
    console.log('POST...');
    this.http.post(this.getEnvironmentUrl()+url, this.encodeComplexHttpParams(params)).subscribe(
      (res: any) => {
        console.log('POST res=' + res);
        console.log(res);
        callback && callback(res, null);
      },
      err => {
        console.log('POST err=');
        console.log(err);
        this.requestFailed(err);
        callback && callback(null, err);
      }
    );
  }

  //对象参数请求
  private encodeHttpParams(params: any): any {
    if (!params) return null;
    return new HttpParams({fromObject: params});
  }

  //字符串参数封装
  private encodeComplexHttpParams(params: any): any {
    if (!params) return null;
    return new HttpParams({ fromString: params });
  }

  /**
   * 处理响应的事件
   * @param res
   * @param {Function} error
   */
  private responseSuccess(res: any, callback) {
    if (res.code !== '0') {
      // 失败
      if (res.msg) {
        callback({ code: res.code, msg: res.msg });
      } else {
        const data = res.datas;
        let errorMsg = res.message;
        if(data!=null){
          data.map(i => {
            errorMsg = i.errorMsg + '\n';
          });
        }  
        callback({ code: res.code, msg: errorMsg });
      }
    } else {
      callback(res);
    }
  }
  /**
   * 处理请求失败事件
   * @param url
   * @param err
   */
  private requestFailed(err) {
    let msg = '请求发生异常';
    const status = err.status;
    console.log('status=' + status);
    if (status === 0) {
      msg = '请求失败，请求响应出错';
    } else if (status === 404) {
      msg = '请求失败，未找到请求地址';
    } else if (status === 500) {
      msg = '请求失败，服务器出错，请稍后再试';
    } else {
      msg = '未知错误，请检查网络';
    }
    return msg;
  }


  /**
   * 头部信息获取，主要用于处理token
  **/
  private getHeaders() {
    const token = this.getToken();
    console.log(token);
    return token ? new HttpHeaders({ 
      token: token,
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json' 
    }) : null;
  }
  /*
   * 使用本地缓存的方式来获取token信息
   */
  getToken() {
    return window.localStorage.getItem('auth-token');
  }

  /**
   * 将token信息保存到本地缓存中 用缓存的形式实现token验证
   * @param token
   */
  setToken(token) {
    // 目前只解析token字段，缓存先只存该字段
    // JSON.stringify(token)
    window.localStorage.setItem('auth-token', token);
  }
  //获取接口请求地址
  getEnvironmentUrl() {
    console.log("sdad:"+url);
    var url=  window.localStorage.getItem('environmenturl');
    
    if(url==null || url==undefined){
      url="https://subcrmdevapi.sokon.com/dcem";
    }
    return url;
  }
  //跟进环境设置请求地址
  setEnvironmentUrl(environment) {
    let url="";
    console.log("environment:"+environment);
    switch (environment) {
      case 'Dev':
        url="https://subcrmdevapi.sokon.com/dcem";
          break;
      case 'Sit':
        url="https://subcrmdevapi.sokon.com/dcem";
          break;
      case 'Uat':
        url="https://subcrmuatapi.sokon.com/dcem";
          break;
      case 'Pro':
        url="https://mscrm.sokon.com/dcem";
          break;    
      default:
        url="http://localhost:52151";
          break;
  }
    window.localStorage.setItem('environmenturl', url);
  }
  /**
   * 清理token
   */
  clearToken() {
    window.localStorage.setItem('auth-token', null);
  }

  
  /**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  async showLoading(content: string) {
    if (!this.isLoadingOpen) {
      const loading = await this.loadingCtrl.create({
        message: content,
        duration: 300,
        translucent: false
      });
      console.log('showLoading....');
      return await loading.present();
    }
  }
  /**
   * 关闭loading
  */
  async hideLoading() {
    console.log('hideLoading....');
    if (this.isLoadingOpen) {
      await this.loadingCtrl.dismiss();
      this.isLoadingOpen = false;
    }
  }
  /**
   * Toast 提示
   * @param message 
   */
  async presentToastError(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color:"danger",
      position:"top"
    });
    toast.present();
  }

  async presentToastSucess(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 1500,
      color:"success",
      position:"middle"
    });
    toast.present();
  }

/*------------------------------------------------------- */
  /*
  api/focus  
  */
  ajaxGet(url:String) {

    var api = this.getEnvironmentUrl() + url;
    return new Promise((resove, reject) => {
      this.http.get(api).subscribe((response) => {
        resove(response);
      }, (error) => {
        reject(error);
      })
    })
  }

  /*
 api/focus  
 */
  ajaxPost(url:String, json:Object) {
    var api = this.getEnvironmentUrl() + url;
    return new Promise((resove, reject) => {
      this.http.post(api, json).subscribe((response) => {
        resove(response);
      }, (error) => {
        reject(error);
      })
    })
  }

  /*本地缓存处理*/
  /*
   * 使用本地缓存的方式来获取数据
   */
  GetDataCache(name) {
    return window.localStorage.getItem('datacache-'+name);
  }

  /**
   *  将数据存储到本地缓存中
   * @param name
   * @param data
   */
  SetDataCache(name,data) {
    window.localStorage.setItem('datacache-'+name, data);
  }
  /*
   * 清楚本地缓存数据
   */
  ClearDataCache(name) {
    return window.localStorage.setItem('datacache-'+name,"");
  }
}
