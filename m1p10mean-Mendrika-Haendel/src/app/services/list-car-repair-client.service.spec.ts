import { TestBed } from '@angular/core/testing';

import { ListCarRepairClientService } from './list-car-repair-client.service';

describe('ListCarRepairClientService', () => {
  let service: ListCarRepairClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCarRepairClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
