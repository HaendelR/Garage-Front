import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRepairComponent } from './history-repair.component';

describe('HistoryRepairComponent', () => {
  let component: HistoryRepairComponent;
  let fixture: ComponentFixture<HistoryRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryRepairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
