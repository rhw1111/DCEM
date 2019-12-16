import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancelPage } from './cancel.page';

describe('CancelPage', () => {
  let component: CancelPage;
  let fixture: ComponentFixture<CancelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
