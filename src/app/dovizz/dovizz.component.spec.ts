import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DovizzComponent } from './dovizz.component';

describe('DovizzComponent', () => {
  let component: DovizzComponent;
  let fixture: ComponentFixture<DovizzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DovizzComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DovizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
