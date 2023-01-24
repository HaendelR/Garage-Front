import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFinishDeliverComponent } from './car-finish-deliver.component';

describe('CarFinishDeliverComponent', () => {
  let component: CarFinishDeliverComponent;
  let fixture: ComponentFixture<CarFinishDeliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFinishDeliverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarFinishDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
