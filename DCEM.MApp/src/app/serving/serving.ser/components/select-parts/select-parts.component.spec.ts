import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPartsComponent } from './select-parts.component';

describe('SelectPartsComponent', () => {
    let component: SelectPartsComponent;
    let fixture: ComponentFixture<SelectPartsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectPartsComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectPartsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
