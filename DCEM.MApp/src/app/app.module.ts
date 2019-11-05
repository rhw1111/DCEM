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
//自定义组件
import { ScSelectComponent } from './serving/serving.ser/components/sc-select/sc-select.component';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { SelectRepairlocationComponent } from 'app/serving/serving.ser/components/select-repairlocation/select-repairlocation.component';
import { SelectCarmodelComponent } from 'app/serving/serving.ser/components/select-carmodel/select-carmodel.component';
import { SelectMaintenanceComponent } from 'app/serving/serving.ser/components/select-maintenance/select-maintenance.component';
import { SelectPartsComponent } from 'app/serving/serving.ser/components/select-parts/select-parts.component';
import { SelectRepairitemComponent } from 'app/serving/serving.ser/components/select-repairitem/select-repairitem.component';
import { SelectMalFunctionTypeComponent } from 'app/serving/serving.ser/components/select-malfunctiontype/select.malfunctiontype.component';
import { SelectReceptioncommissionerComponent } from 'app/serving/serving.ser/components/select-receptioncommissioner/select-receptioncommissioner.component';
import { SelectReservationconfigurationComponent } from 'app/serving/serving.ser/components/select-reservationconfiguration/select-reservationconfiguration.component';
import { SelectSysareaComponent } from 'app/serving/serving.ser/components/select-sysarea/select-sysarea.component';
import { SelectVehiclecolorComponent } from 'app/serving/serving.ser/components/select-vehiclecolor/select-vehiclecolor.component';
import { SelectVehicletypeComponent } from 'app/serving/serving.ser/components/select-vehicletype/select-vehicletype.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        ScSelectComponent,
        SelectCustomerComponent,
        SelectRepairlocationComponent,
        SelectCarmodelComponent,
        SelectMaintenanceComponent,
        SelectPartsComponent,
        SelectRepairitemComponent,
        SelectMalFunctionTypeComponent,
        SelectVehicletypeComponent,
        SelectReceptioncommissionerComponent,
        SelectReservationconfigurationComponent,
        SelectSysareaComponent,
        SelectVehiclecolorComponent


    ],
    entryComponents: [
        ScSelectComponent,
        SelectCustomerComponent,
        SelectRepairlocationComponent,
        SelectCarmodelComponent,
        SelectMaintenanceComponent,
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
