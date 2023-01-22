import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ReparationCarComponent } from "./reparation-car.component";

describe("ReparationCarComponent", () => {
  let component: ReparationCarComponent;
  let fixture: ComponentFixture<ReparationCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReparationCarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReparationCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
