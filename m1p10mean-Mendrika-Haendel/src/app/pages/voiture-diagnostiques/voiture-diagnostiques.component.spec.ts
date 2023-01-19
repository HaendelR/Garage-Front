import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureDiagnostiquesComponent } from './voiture-diagnostiques.component';

describe('VoitureDiagnostiquesComponent', () => {
  let component: VoitureDiagnostiquesComponent;
  let fixture: ComponentFixture<VoitureDiagnostiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoitureDiagnostiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoitureDiagnostiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
