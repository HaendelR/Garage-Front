import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRepairAverageCarComponent } from './detail-repair-average-car.component';

describe('DetailRepairAverageCarComponent', () => {
  let component: DetailRepairAverageCarComponent;
  let fixture: ComponentFixture<DetailRepairAverageCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRepairAverageCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRepairAverageCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
