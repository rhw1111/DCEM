import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVehiclecolorComponent } from './select-vehiclecolor.component';

describe('SelectVehiclecolorComponent', () => {
  let component: SelectVehiclecolorComponent;
  let fixture: ComponentFixture<SelectVehiclecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVehiclecolorComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVehiclecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
