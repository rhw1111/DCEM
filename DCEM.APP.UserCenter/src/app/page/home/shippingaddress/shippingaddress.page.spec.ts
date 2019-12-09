import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShippingaddressPage } from './shippingaddress.page';

describe('ShippingaddressPage', () => {
  let component: ShippingaddressPage;
  let fixture: ComponentFixture<ShippingaddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingaddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShippingaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
