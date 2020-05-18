import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarconditionPage } from './carcondition.page';

describe('CarconditionPage', () => {
  let component: CarconditionPage;
  let fixture: ComponentFixture<CarconditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarconditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarconditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
