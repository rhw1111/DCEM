import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
describe('AuthenticationService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(AuthenticationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=authentication.service.spec.js.map