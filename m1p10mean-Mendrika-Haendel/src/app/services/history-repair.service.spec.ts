import { TestBed } from '@angular/core/testing';

import { HistoryRepairService } from './history-repair.service';

describe('HistoryRepairService', () => {
  let service: HistoryRepairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryRepairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
