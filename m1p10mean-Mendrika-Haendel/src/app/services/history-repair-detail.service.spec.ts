import { TestBed } from '@angular/core/testing';

import { HistoryRepairDetailService } from './history-repair-detail.service';

describe('HistoryRepairDetailService', () => {
  let service: HistoryRepairDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryRepairDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
