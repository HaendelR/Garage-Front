import { TestBed } from '@angular/core/testing';

import { DetailRepairAverageCarService } from './detail-repair-average-car.service';

describe('DetailRepairAverageCarService', () => {
  let service: DetailRepairAverageCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailRepairAverageCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
