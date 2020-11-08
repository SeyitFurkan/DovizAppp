import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PiyasaPage } from './piyasa.page';

describe('PiyasaPage', () => {
  let component: PiyasaPage;
  let fixture: ComponentFixture<PiyasaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiyasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PiyasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
