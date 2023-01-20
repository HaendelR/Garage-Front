import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureDiagnostiquesAtelierComponent } from './voiture-diagnostiques-atelier.component';

describe('VoitureDiagnostiquesAtelierComponent', () => {
  let component: VoitureDiagnostiquesAtelierComponent;
  let fixture: ComponentFixture<VoitureDiagnostiquesAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureDiagnostiquesAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoitureDiagnostiquesAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
