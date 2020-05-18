import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivityintroPage } from './activityintro.page';

describe('ActivityintroPage', () => {
  let component: ActivityintroPage;
  let fixture: ComponentFixture<ActivityintroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityintroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityintroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
