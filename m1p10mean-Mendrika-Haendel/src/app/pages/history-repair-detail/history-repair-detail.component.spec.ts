import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRepairDetailComponent } from './history-repair-detail.component';

describe('HistoryRepairDetailComponent', () => {
  let component: HistoryRepairDetailComponent;
  let fixture: ComponentFixture<HistoryRepairDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryRepairDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryRepairDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
