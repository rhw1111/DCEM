import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { DCore_Page } from 'app/component/typescript/dcem.core';




@Component({
    selector: 'app-orcode',
    templateUrl: './orcode.page.html',
    styleUrls: ['./orcode.page.scss'],
})
export class OrcodePage implements OnInit {

    constructor(
        private _qrScanner: QRScanner,
        private _page: DCore_Page
    ) {

    }

    ngOnInit() {
    }

    ionViewDidEnter() {
        this._qrScannerInit();
    }

    _qrScannerInit() {
        this._qrScanner.prepare().then((status: QRScannerStatus) => {
            if (status.authorized) {
                // 已授予照相机权限
                // 开始扫码
                const scanSub = this._qrScanner.scan().subscribe((text: string) => {
                    this._page.alert("二维码信息", JSON.stringify(text));
                    this._qrScanner.hide(); // 隐藏相机预览
                    scanSub.unsubscribe(); // 停止扫描
                });

            } else if (status.denied) {
                // 相机权限被永久拒绝
                // 必须使用qrscanner.opensettings（）方法引导用户进入设置页。
                // 然后他们可以从那里得到许可
                this._page.alert("错误信息", "权限被拒绝");
            } else {
                // 权限被拒绝，但不是永久性的。您可以稍后再次请求许可。
                this._page.alert("错误信息", "重新请求");
            }
        }).catch((e: any) => this._page.alert("错误信息", JSON.stringify(e)));
    }

    ionViewWillLeave() {
        this._qrScanner.hide();//需要关闭扫描，否则相机一直开着
        this._qrScanner.destroy();//关闭
    }
}


