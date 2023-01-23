import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilFinanceComponent } from './accueil-finance.component';

describe('AccueilFinanceComponent', () => {
  let component: AccueilFinanceComponent;
  let fixture: ComponentFixture<AccueilFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
