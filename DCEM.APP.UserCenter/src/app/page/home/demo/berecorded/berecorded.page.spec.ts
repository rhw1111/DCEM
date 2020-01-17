import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BerecordedPage } from './berecorded.page';

describe('BerecordedPage', () => {
  let component: BerecordedPage;
  let fixture: ComponentFixture<BerecordedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BerecordedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BerecordedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
