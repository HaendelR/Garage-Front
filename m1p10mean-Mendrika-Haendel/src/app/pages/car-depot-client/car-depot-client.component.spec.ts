import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDepotClientComponent } from './car-depot-client.component';

describe('CarDepotClientComponent', () => {
  let component: CarDepotClientComponent;
  let fixture: ComponentFixture<CarDepotClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDepotClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDepotClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
