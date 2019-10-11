import { TestBed } from '@angular/core/testing';
import { HttpService } from './http-service.service';
describe('HttpService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(HttpService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http-service.service.spec.js.map