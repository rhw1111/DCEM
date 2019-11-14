import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdiservicePage } from './pdiservice.page';

describe('PdiservicePage', () => {
  let component: PdiservicePage;
  let fixture: ComponentFixture<PdiservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdiservicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdiservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
