import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
//import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//第三方组件
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
//自定义组件
import {SelectSysareaComponent} from './component/modal/select-sysarea/select-sysarea.component'
import { LoginComponent } from './component/modal/login/login.component' 
import { UserinfoComponent } from './component/modal/userinfo/userinfo.component' 
import { SelectDealerComponent } from './component/modal/select-dealer/select-dealer.component';

@NgModule({
  declarations: [AppComponent,SelectSysareaComponent,LoginComponent,SelectDealerComponent,UserinfoComponent],
  entryComponents: [SelectSysareaComponent,LoginComponent,SelectDealerComponent,UserinfoComponent],
  imports: [
      BrowserModule, 
      IonicModule.forRoot({ mode: 'ios' }),
      AppRoutingModule,      
      IonicStorageModule.forRoot(),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      NgZorroAntdMobileModule],
  providers: [
      StatusBar,
      SplashScreen,
      ScreenOrientation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouteReuseStrategy } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';


// //第三方组件
// import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
// //自定义组件
// import {SelectSysareaComponent} from './component/modal/select-sysarea/select-sysarea.component'
// import { LoginComponent } from './component/modal/login/login.component' 

// @NgModule({
//   declarations: [AppComponent,SelectSysareaComponent,LoginComponent],
//   entryComponents: [SelectSysareaComponent,LoginComponent],
//   imports: [
//       BrowserModule, 
//       IonicModule.forRoot(),
//       AppRoutingModule,         
//       FormsModule,
//      ReactiveFormsModule,
//       NgZorroAntdMobileModule],
//   providers: [
//     StatusBar,
//     SplashScreen,
//     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}
