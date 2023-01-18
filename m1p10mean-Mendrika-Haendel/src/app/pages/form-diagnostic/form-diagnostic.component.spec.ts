import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiagnosticComponent } from './form-diagnostic.component';

describe('FormDiagnosticComponent', () => {
  let component: FormDiagnosticComponent;
  let fixture: ComponentFixture<FormDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDiagnosticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
