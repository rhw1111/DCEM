import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreorderPage } from './preorder.page';

describe('PreorderPage', () => {
  let component: PreorderPage;
  let fixture: ComponentFixture<PreorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreorderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
