import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubeditpartPage } from './subeditpart.page';

describe('SubeditpartPage', () => {
  let component: SubeditpartPage;
  let fixture: ComponentFixture<SubeditpartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubeditpartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubeditpartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
