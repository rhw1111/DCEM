import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheckPage } from './check.page';

describe('CheckPage', () => {
  let component: CheckPage;
  let fixture: ComponentFixture<CheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
