import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRepairitemtypeComponent } from './select-repairitemtype.component';

describe('SelectRepairitemtypeComponent', () => {
    let component: SelectRepairitemtypeComponent;
    let fixture: ComponentFixture<SelectRepairitemtypeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectRepairitemtypeComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectRepairitemtypeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
