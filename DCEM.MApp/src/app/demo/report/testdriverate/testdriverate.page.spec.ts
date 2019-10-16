import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdriveratePage } from './testdriverate.page';

describe('TestdriveratePage', () => {
  let component: TestdriveratePage;
  let fixture: ComponentFixture<TestdriveratePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdriveratePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdriveratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
