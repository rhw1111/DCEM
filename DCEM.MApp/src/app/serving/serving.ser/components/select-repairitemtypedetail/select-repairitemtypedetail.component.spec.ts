import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRepairitemtypedetailComponent } from './select-repairitemtypedetail.component';

describe('SelectRepairitemtypedetailComponent', () => {
    let component: SelectRepairitemtypedetailComponent;
    let fixture: ComponentFixture<SelectRepairitemtypedetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectRepairitemtypedetailComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectRepairitemtypedetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
