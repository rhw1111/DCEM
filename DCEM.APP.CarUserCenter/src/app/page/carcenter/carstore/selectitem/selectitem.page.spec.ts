import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectitemPage } from './selectitem.page';

describe('SelectitemPage', () => {
    let component: SelectitemPage;
    let fixture: ComponentFixture<SelectitemPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectitemPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SelectitemPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
