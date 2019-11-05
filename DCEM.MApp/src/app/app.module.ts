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
import { SelectRepairlocationComponent } from 'app/serving/serving.ser/components/select-repairlocation/select-repairlocation.component';
import { SelectCarmodelComponent } from 'app/serving/serving.ser/components/select-carmodel/select-carmodel.component';
import { SelectSystemuserComponent } from 'app/base/base.ser/components/select-systemuser/select-systemuser.component';
import { SelectMaintenanceComponent } from 'app/serving/serving.ser/components/select-maintenance/select-maintenance.component';
import { SelectAppointmentconfigComponent } from 'app/serving/serving.ser/components/select-appointmentconfig/select-appointmentconfig.component';
import { SelectMalFunctionTypeComponent } from 'app/serving/serving.ser/components/select-malfunctiontype/select.malfunctiontype.component';
import { SelectPartsComponent } from 'app/serving/serving.ser/components/select-parts/select-parts.component';
import { SelectRepairitemComponent } from 'app/serving/serving.ser/components/select-repairitem/select-repairitem.component';

@NgModule({
    declarations: [//申明组件
        AppComponent, //全局公共组件
        ScSelectComponent, //服务委托书选择组件
        SelectCustomerComponent, //客户选择组件
        SelectRepairlocationComponent, //选择工位
        SelectCarmodelComponent, //选择车型
        SelectMaintenanceComponent,//选择保养项
        SelectSystemuserComponent,//选择系统用户
        SelectAppointmentconfigComponent,//选择预约记录
        SelectMalFunctionTypeComponent,
        SelectPartsComponent,
        SelectRepairitemComponent],//选择故障类别代码
    entryComponents: [
        ScSelectComponent, 
        SelectCustomerComponent, 
        SelectRepairlocationComponent, 
        SelectCarmodelComponent, 
        SelectMaintenanceComponent,
        SelectSystemuserComponent,
        SelectAppointmentconfigComponent,
        SelectMalFunctionTypeComponent,
        SelectPartsComponent,
        SelectRepairitemComponent],
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
