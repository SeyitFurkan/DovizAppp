import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CeviriciPage } from './cevirici.page';

describe('CeviriciPage', () => {
  let component: CeviriciPage;
  let fixture: ComponentFixture<CeviriciPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeviriciPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CeviriciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
