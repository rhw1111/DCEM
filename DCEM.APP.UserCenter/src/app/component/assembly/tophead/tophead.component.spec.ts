import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopheadComponent } from './tophead.component';

describe('TopheadComponent', () => {
    let component: TopheadComponent;
    let fixture: ComponentFixture<TopheadComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TopheadComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(TopheadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
