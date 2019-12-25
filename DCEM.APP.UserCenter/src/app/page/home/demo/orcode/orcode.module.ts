import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrcodePageRoutingModule } from './orcode-routing.module';
import { OrcodePage } from './orcode.page';
import { TopheadModule } from 'app/component/assembly/tophead/tophead.module';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


@NgModule({
    imports: [
        TopheadModule,
        CommonModule,
        FormsModule,
        IonicModule,
        OrcodePageRoutingModule
    ],
    declarations: [OrcodePage],
    providers: [QRScanner]
})
export class OrcodePageModule { }
