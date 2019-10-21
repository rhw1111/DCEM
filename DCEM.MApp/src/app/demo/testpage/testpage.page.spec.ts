import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpagePage } from './testpage.page';

describe('TestpagePage', () => {
  let component: TestpagePage;
  let fixture: ComponentFixture<TestpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
