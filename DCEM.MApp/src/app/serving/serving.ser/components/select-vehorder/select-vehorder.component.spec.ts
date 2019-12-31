import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVehorderComponent } from './select-vehorder.component';

describe('SelectVehorderComponent', () => {
  let component: SelectVehorderComponent;
  let fixture: ComponentFixture<SelectVehorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVehorderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVehorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
