import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrontcontentPage } from './frontcontent.page';

describe('FrontcontentPage', () => {
  let component: FrontcontentPage;
  let fixture: ComponentFixture<FrontcontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontcontentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrontcontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
