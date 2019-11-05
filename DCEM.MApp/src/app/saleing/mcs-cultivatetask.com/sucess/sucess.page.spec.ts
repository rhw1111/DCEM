import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessPage } from './sucess.page';

describe('SucessPage', () => {
  let component: SucessPage;
  let fixture: ComponentFixture<SucessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
