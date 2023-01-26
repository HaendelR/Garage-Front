import { TestBed } from '@angular/core/testing';

import { RepairAverageCarService } from './repair-average-car.service';

describe('RepairAverageCarService', () => {
  let service: RepairAverageCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairAverageCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
