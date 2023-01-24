import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarRepairClientComponent } from './list-car-repair-client.component';

describe('ListCarRepairClientComponent', () => {
  let component: ListCarRepairClientComponent;
  let fixture: ComponentFixture<ListCarRepairClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCarRepairClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCarRepairClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
