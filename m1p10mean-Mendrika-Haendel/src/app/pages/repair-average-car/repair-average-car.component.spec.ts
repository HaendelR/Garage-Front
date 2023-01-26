import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairAverageCarComponent } from './repair-average-car.component';

describe('RepairAverageCarComponent', () => {
  let component: RepairAverageCarComponent;
  let fixture: ComponentFixture<RepairAverageCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepairAverageCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepairAverageCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
