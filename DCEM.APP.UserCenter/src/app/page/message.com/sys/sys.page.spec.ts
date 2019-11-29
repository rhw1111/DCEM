import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SysPage } from './sys.page';

describe('SysPage', () => {
  let component: SysPage;
  let fixture: ComponentFixture<SysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
