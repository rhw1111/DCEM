import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragrouteComponent } from './dragroute.component';

describe('DragrouteComponent', () => {
  let component: DragrouteComponent;
  let fixture: ComponentFixture<DragrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragrouteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
