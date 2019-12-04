import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSettingsPage } from './message-settings.page';

describe('MessageSettingsPage', () => {
  let component: MessageSettingsPage;
  let fixture: ComponentFixture<MessageSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
