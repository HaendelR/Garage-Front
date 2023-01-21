import { TestBed } from '@angular/core/testing';

import { DragCarService } from './drag-car.service';

describe('DragCarService', () => {
  let service: DragCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
