import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { successPage } from './success.page';

describe('successPage', () => {
  let component: successPage;
  let fixture: ComponentFixture<successPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ successPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(successPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
