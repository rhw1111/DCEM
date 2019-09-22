"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('new App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.AppPage();
    });
    it('should be blank', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toContain('The world is your oyster.');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map