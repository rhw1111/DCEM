import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrcodePage } from './orcode.page';

describe('OrcodePage', () => {
  let component: OrcodePage;
  let fixture: ComponentFixture<OrcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
