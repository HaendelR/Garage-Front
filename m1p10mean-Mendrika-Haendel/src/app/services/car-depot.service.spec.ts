import { TestBed } from '@angular/core/testing';

import { CarDepotService } from './car-depot.service';

describe('CarDepotService', () => {
  let service: CarDepotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDepotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
