import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarcontrolPage } from './carcontrol.page';

describe('CarcontrolPage', () => {
  let component: CarcontrolPage;
  let fixture: ComponentFixture<CarcontrolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarcontrolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarcontrolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
