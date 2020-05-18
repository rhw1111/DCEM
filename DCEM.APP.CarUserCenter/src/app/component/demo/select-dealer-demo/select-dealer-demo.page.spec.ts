import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectDealerDemoPage } from './select-dealer-demo.page';

describe('SelectDealerDemoPage', () => {
  let component: SelectDealerDemoPage;
  let fixture: ComponentFixture<SelectDealerDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDealerDemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectDealerDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
