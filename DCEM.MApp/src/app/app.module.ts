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
import { SelectPartsComponent } from 'app/serving/serving.ser/components/select-parts/select-parts.component';
import { SelectRepairitemComponent } from 'app/serving/serving.ser/components/select-repairitem/select-repairitem.component';
import { SelectMalFunctionTypeComponent } from 'app/serving/serving.ser/components/select-malfunctiontype/select.malfunctiontype.component';
import { SelectReceptioncommissionerComponent } from 'app/saleing/saleing.ser/components/select-receptioncommissioner/select-receptioncommissioner.component';
import { SelectReservationconfigurationComponent } from 'app/saleing/saleing.ser/components/select-reservationconfiguration/select-reservationconfiguration.component';
import { SelectSysareaComponent } from 'app/saleing/saleing.ser/components/select-sysarea/select-sysarea.component';
import { SelectVehiclecolorComponent } from 'app/saleing/saleing.ser/components/select-vehiclecolor/select-vehiclecolor.component';
import { SelectVehicletypeComponent } from 'app/saleing/saleing.ser/components/select-vehicletype/select-vehicletype.component';

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
        SelectRepairitemComponent,
        SelectMalFunctionTypeComponent,//故障代码选择
        SelectVehicletypeComponent,//车型选择
        SelectReceptioncommissionerComponent,//接待员选择
        SelectReservationconfigurationComponent,//预约时段选择
        SelectSysareaComponent,//省份选择
        SelectVehiclecolorComponent//车型颜色


    ],

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
        SelectRepairitemComponent,
        SelectMalFunctionTypeComponent,
        SelectVehicletypeComponent,
        SelectReceptioncommissionerComponent,
        SelectReservationconfigurationComponent,
        SelectSysareaComponent,
        SelectVehiclecolorComponent
    ],

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
