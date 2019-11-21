import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectFileEditComponent } from 'app/serving/serving.ser/components/select-file-edit/select-file-edit.component';
let MyworkPage = class MyworkPage {
    constructor(_modalCtrl) {
        this._modalCtrl = _modalCtrl;
    }
    ngOnInit() {
    }
    //ѡ�񸽼�
    presentFileModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this._modalCtrl.create({
                component: SelectFileEditComponent
            });
            yield modal.present();
        });
    }
};
MyworkPage = tslib_1.__decorate([
    Component({
        selector: 'app-mywork',
        templateUrl: './mywork.page.html',
        styleUrls: ['./mywork.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], MyworkPage);
export { MyworkPage };
//# sourceMappingURL=mywork.page.js.map