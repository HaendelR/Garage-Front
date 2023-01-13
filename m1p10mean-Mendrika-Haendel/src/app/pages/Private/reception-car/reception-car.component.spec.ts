import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionCarComponent } from './reception-car.component';

describe('ReceptionCarComponent', () => {
  let component: ReceptionCarComponent;
  let fixture: ComponentFixture<ReceptionCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
