import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFileEditComponent } from './select-file-edit.component';

describe('SelectFileEditComponent', () => {
    let component: SelectFileEditComponent;
    let fixture: ComponentFixture<SelectFileEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SelectFileEditComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectFileEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
