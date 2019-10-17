import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyworkPage } from './mywork.page';

describe('MyworkPage', () => {
  let component: MyworkPage;
  let fixture: ComponentFixture<MyworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
