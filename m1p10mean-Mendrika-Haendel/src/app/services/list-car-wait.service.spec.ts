import { TestBed } from '@angular/core/testing';

import { ListCarWaitService } from './list-car-wait.service';

describe('ListCarWaitService', () => {
  let service: ListCarWaitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCarWaitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
