import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadTestPage } from './fileupload-test.page';

describe('FileuploadTestPage', () => {
  let component: FileuploadTestPage;
  let fixture: ComponentFixture<FileuploadTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileuploadTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
