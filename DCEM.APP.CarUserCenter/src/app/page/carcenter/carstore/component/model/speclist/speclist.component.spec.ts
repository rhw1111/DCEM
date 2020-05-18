import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeclistComponent } from './speclist.component';

describe('SpeclistComponent', () => {
    let component: SpeclistComponent;
    let fixture: ComponentFixture<SpeclistComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SpeclistComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SpeclistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
