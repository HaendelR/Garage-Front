import { TestBed } from '@angular/core/testing';

import { CarFinishDeliverService } from './car-finish-deliver.service';

describe('CarFinishDeliverService', () => {
  let service: CarFinishDeliverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarFinishDeliverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
