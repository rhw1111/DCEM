import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Edit2Page } from './edit2.page';

describe('Edit2Page', () => {
    let component: Edit2Page;
    let fixture: ComponentFixture<Edit2Page>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [Edit2Page],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(Edit2Page);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
