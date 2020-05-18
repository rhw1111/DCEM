import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdcardPage } from './idcard.page';

describe('IdcardPage', () => {
  let component: IdcardPage;
  let fixture: ComponentFixture<IdcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdcardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
