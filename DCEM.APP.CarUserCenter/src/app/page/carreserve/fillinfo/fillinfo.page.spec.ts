import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FillinfoPage } from './fillinfo.page';

describe('FillinfoPage', () => {
  let component: FillinfoPage;
  let fixture: ComponentFixture<FillinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FillinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
