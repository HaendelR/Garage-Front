import { TestBed } from '@angular/core/testing';

import { ListCarRepairService } from './list-car-repair.service';

describe('ListCarRepairService', () => {
  let service: ListCarRepairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCarRepairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
