import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BaidumapPage } from './baidumap.page';

describe('BaidumapPage', () => {
  let component: BaidumapPage;
  let fixture: ComponentFixture<BaidumapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaidumapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BaidumapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
