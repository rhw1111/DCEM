import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//自定义组件
import { ScSelectComponent } from './serving/serving.ser/components/sc-select/sc-select.component';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import{SelectMalFunctionTypeComponent} from'app/serving/serving.ser/components/select-malfunctiontype/select.malfunctiontype.component';
import { SelectRepairlocationComponent } from 'app/serving/serving.ser/components/select-repairlocation/select-repairlocation.component';
import { SelectAppointmentconfigComponent } from 'app/serving/serving.ser/components/select-appointmentconfig/select-appointmentconfig.component';
import { SelectSystemuserComponent } from 'app/base/base.ser/components/select-systemuser/select-systemuser.component';

@NgModule({
    declarations: [AppComponent, ScSelectComponent, SelectCustomerComponent, SelectRepairlocationComponent, SelectAppointmentconfigComponent, SelectMalFunctionTypeComponent, SelectSystemuserComponent],//申明组件
    entryComponents: [AppComponent, ScSelectComponent, SelectCustomerComponent, SelectRepairlocationComponent, SelectAppointmentconfigComponent, SelectMalFunctionTypeComponent, SelectSystemuserComponent],
    
    imports: [BrowserModule,
        IonicModule.forRoot({ mode: 'ios' }),
        AppRoutingModule,
        HttpClientModule,
        IonicStorageModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
