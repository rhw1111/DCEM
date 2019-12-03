import * as tslib_1 from "tslib";
import { NgModule, ErrorHandler } from '@angular/core';
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
import { GlobalErrorHandler } from "app/base/base.ser/global.error.handler";
//自定义组件
import { ScSelectComponent } from './serving/serving.ser/components/sc-select/sc-select.component';
import { SelectCustomerComponent } from 'app/serving/serving.ser/components/select-customer/select-customer.component';
import { SelectCustomerEditComponent } from 'app/serving/serving.ser/components/select-customer-edit/select-customer-edit.component';
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
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { SelectRepairitemtypeComponent } from 'app/serving/serving.ser/components/select-repairitemtype/select-repairitemtype.component';
import { SelectRepairitemtypedetailComponent } from 'app/serving/serving.ser/components/select-repairitemtypedetail/select-repairitemtypedetail.component';
import { SelectAppointmentinfoComponent } from 'app/serving/serving.ser/components/select-appointmentinfo/select-appointmentinfo.component';
import { SelectFileEditComponent } from 'app/serving/serving.ser/components/select-file-edit/select-file-edit.component';
import { DragrouteComponent } from 'app/base/base.ser/components/map/dragroute/dragroute.component';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FileUploadModule } from 'ng2-file-upload';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            ScSelectComponent,
            SelectCustomerComponent,
            SelectCustomerEditComponent,
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
            SelectVehiclecolorComponent,
            SelectRepairitemtypeComponent,
            SelectRepairitemtypedetailComponent,
            SelectAppointmentinfoComponent,
            SelectFileEditComponent,
            DragrouteComponent
        ],
        entryComponents: [
            ScSelectComponent,
            SelectCustomerComponent,
            SelectCustomerEditComponent,
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
            SelectVehiclecolorComponent,
            SelectRepairitemtypeComponent,
            SelectRepairitemtypedetailComponent,
            SelectAppointmentinfoComponent,
            SelectFileEditComponent,
            DragrouteComponent
        ],
        imports: [BrowserModule,
            IonicModule.forRoot({ mode: 'ios' }),
            FileUploadModule,
            AppRoutingModule,
            HttpClientModule,
            IonicStorageModule.forRoot(),
            FormsModule,
            ReactiveFormsModule,
            NgZorroAntdMobileModule
        ],
        providers: [
            DragrouteComponent,
            StatusBar,
            SplashScreen,
            ImagePicker,
            FileTransfer,
            Camera,
            ScreenOrientation,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
            { provide: ErrorHandler, useClass: GlobalErrorHandler }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map