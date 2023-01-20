import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnostiqueDevisComponent } from './diagnostique-devis.component';

describe('DiagnostiqueDevisComponent', () => {
  let component: DiagnostiqueDevisComponent;
  let fixture: ComponentFixture<DiagnostiqueDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnostiqueDevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnostiqueDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
