import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomerEditComponent } from './select-customer-edit.component';

describe('SelectCustomerEditComponent', () => {
    let component: SelectCustomerEditComponent;
    let fixture: ComponentFixture<SelectCustomerEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectCustomerEditComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectCustomerEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
