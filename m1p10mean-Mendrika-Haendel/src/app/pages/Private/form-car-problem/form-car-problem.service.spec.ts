import { TestBed } from '@angular/core/testing';

import { FormCarProblemService } from './form-car-problem.service';

describe('FormCarProblemService', () => {
  let service: FormCarProblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormCarProblemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
