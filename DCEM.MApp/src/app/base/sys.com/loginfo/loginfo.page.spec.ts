import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfoPage } from './loginfo.page';

describe('LoginfoPage', () => {
  let component: LoginfoPage;
  let fixture: ComponentFixture<LoginfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
