import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HirepurchasePage } from './hirepurchase.page';

describe('HirepurchasePage', () => {
  let component: HirepurchasePage;
  let fixture: ComponentFixture<HirepurchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirepurchasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HirepurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
