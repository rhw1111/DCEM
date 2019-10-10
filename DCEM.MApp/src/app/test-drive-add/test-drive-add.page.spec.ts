import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDriveAddPage } from './test-drive-add.page';

describe('TestDriveAddPage', () => {
  let component: TestDriveAddPage;
  let fixture: ComponentFixture<TestDriveAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDriveAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDriveAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
