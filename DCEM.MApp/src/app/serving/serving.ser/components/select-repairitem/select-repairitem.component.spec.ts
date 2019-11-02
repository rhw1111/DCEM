import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRepairitemComponent } from './select-repairitem.component';

describe('SelectRepairitemComponent', () => {
    let component: SelectRepairitemComponent;
    let fixture: ComponentFixture<SelectRepairitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [SelectRepairitemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(SelectRepairitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
