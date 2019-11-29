import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectDealerComponent } from './select-dealer.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
describe('SelectDealerComponent', () => {
  let component: SelectDealerComponent;
  let fixture: ComponentFixture<SelectDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDealerComponent ],
      imports: [IonicModule.forRoot(),NgZorroAntdMobileModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
