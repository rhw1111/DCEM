import { AppPage } from './app.po';
describe('new App', () => {
    let page;
    beforeEach(() => {
        page = new AppPage();
    });
    it('should be blank', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toContain('The world is your oyster.');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map