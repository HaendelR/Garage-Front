import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCarRepairClientComponent } from './detail-car-repair-client.component';

describe('DetailCarRepairClientComponent', () => {
  let component: DetailCarRepairClientComponent;
  let fixture: ComponentFixture<DetailCarRepairClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCarRepairClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCarRepairClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
