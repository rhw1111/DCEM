import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotographPage } from './photograph.page';

describe('OrcodePage', () => {
    let component: PhotographPage;
    let fixture: ComponentFixture<PhotographPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PhotographPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(PhotographPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
