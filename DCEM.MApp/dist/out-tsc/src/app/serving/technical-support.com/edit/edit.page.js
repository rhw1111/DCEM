import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DCore_Http, DCore_Page } from 'app/base/base.ser/Dcem.core';
import { ModalController } from '@ionic/angular';
import { ScSelectComponent } from '../../serving.ser/components/sc-select/sc-select.component';
let EditPage = class EditPage {
    constructor(_http, _page, modelCtr) {
        this._http = _http;
        this._page = _page;
        this.modelCtr = modelCtr;
    }
    ngOnInit() {
    }
    presentModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modelCtr.create({
                component: ScSelectComponent
            });
            return yield modal.present();
        });
    }
};
EditPage = tslib_1.__decorate([
    Component({
        selector: 'app-edit',
        templateUrl: './edit.page.html',
        styleUrls: ['./edit.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [DCore_Http,
        DCore_Page,
        ModalController])
], EditPage);
export { EditPage };
//# sourceMappingURL=edit.page.js.map