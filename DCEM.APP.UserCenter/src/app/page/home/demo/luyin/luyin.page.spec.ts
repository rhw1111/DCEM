import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LuyinPage } from './luyin.page';

describe('LuyinPage', () => {
  let component: LuyinPage;
  let fixture: ComponentFixture<LuyinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuyinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LuyinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
