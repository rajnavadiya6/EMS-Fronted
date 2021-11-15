import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationaComponent } from './registrationa.component';

describe('RegistrationaComponent', () => {
  let component: RegistrationaComponent;
  let fixture: ComponentFixture<RegistrationaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
