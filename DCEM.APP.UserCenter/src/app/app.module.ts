import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {SelectSysareaComponent} from './component/modal/select-sysarea/select-sysarea.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
    declarations: [AppComponent,
        SelectSysareaComponent//省市区
    ],
    entryComponents: [
        SelectSysareaComponent//省市区
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot({ mode: 'ios' }),
        AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
