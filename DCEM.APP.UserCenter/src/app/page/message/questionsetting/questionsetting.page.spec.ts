import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionsettingPage } from './questionsetting.page';

describe('QuestionsettingPage', () => {
  let component: QuestionsettingPage;
  let fixture: ComponentFixture<QuestionsettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsettingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionsettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
