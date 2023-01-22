import { TestBed } from "@angular/core/testing";

import { ReaparationCarService } from "./reparation-car.service";

describe("DragCarService", () => {
  let service: ReaparationCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaparationCarService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
