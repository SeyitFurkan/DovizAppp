import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DovizPage } from './doviz.page';

describe('DovizPage', () => {
  let component: DovizPage;
  let fixture: ComponentFixture<DovizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DovizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DovizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
