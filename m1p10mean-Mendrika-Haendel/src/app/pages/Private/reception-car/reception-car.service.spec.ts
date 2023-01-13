import { TestBed } from '@angular/core/testing';

import { ReceptionCarService } from './reception-car.service';

describe('ReceptionCarService', () => {
  let service: ReceptionCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
