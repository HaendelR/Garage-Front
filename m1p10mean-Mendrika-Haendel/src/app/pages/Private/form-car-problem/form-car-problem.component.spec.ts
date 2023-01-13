import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCarProblemComponent } from './form-car-problem.component';

describe('FormCarProblemComponent', () => {
  let component: FormCarProblemComponent;
  let fixture: ComponentFixture<FormCarProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCarProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCarProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
