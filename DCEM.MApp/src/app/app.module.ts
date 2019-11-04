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
import { SubeditworkingPage } from 'app/serving/mc-sc.com/subeditworking/subeditworking.page';
import { SubeditpartPage } from 'app/serving/mc-sc.com/subeditpart/subeditpart.page';

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
        SubeditworkingPage,
        SubeditpartPage
    ],
    entryComponents: [
        ScSelectComponent,
        SelectCustomerComponent,
        SelectRepairlocationComponent,
        SelectCarmodelComponent,
        SelectMaintenanceComponent,
        SelectPartsComponent,
        SelectRepairitemComponent,
        SubeditworkingPage,
        SubeditpartPage
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
