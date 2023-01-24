import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarRepairComponent } from './list-car-repair.component';

describe('ListCarRepairComponent', () => {
  let component: ListCarRepairComponent;
  let fixture: ComponentFixture<ListCarRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCarRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCarRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
