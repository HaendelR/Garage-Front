import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierAccueilComponent } from './atelier-accueil.component';

describe('AtelierAccueilComponent', () => {
  let component: AtelierAccueilComponent;
  let fixture: ComponentFixture<AtelierAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierAccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtelierAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
