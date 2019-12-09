import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivitydetailPage } from './activitydetail.page';

describe('ActivitydetailPage', () => {
  let component: ActivitydetailPage;
  let fixture: ComponentFixture<ActivitydetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitydetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
