import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDriveDetailPage } from './test-drive-detail.page';

describe('TestDriveDetailPage', () => {
  let component: TestDriveDetailPage;
  let fixture: ComponentFixture<TestDriveDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDriveDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDriveDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
