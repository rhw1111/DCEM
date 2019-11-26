import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsetupPage } from './systemsetup.page';

describe('SystemsetupPage', () => {
  let component: SystemsetupPage;
  let fixture: ComponentFixture<SystemsetupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemsetupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemsetupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
