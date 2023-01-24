import { TestBed } from '@angular/core/testing';

import { DetailCarRepairClientService } from './detail-car-repair-client.service';

describe('DetailCarRepairClientService', () => {
  let service: DetailCarRepairClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailCarRepairClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
