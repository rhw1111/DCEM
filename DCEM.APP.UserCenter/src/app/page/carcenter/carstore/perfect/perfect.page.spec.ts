import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfectPage } from './perfect.page';

describe('PerfectPage', () => {
  let component: PerfectPage;
  let fixture: ComponentFixture<PerfectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
