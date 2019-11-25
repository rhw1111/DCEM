import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploadPage } from './fileupload.page';

describe('FileuploadPage', () => {
  let component: FileuploadPage;
  let fixture: ComponentFixture<FileuploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileuploadPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
