import { TestBed } from '@angular/core/testing';

import { ChargeDetailService } from './charge-detail.service';

describe('ChargeDetailService', () => {
  let service: ChargeDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargeDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
