import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectattrPage } from './selectattr.page';

describe('SelectattrPage', () => {
    let component: SelectattrPage;
    let fixture: ComponentFixture<SelectattrPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectattrPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SelectattrPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
