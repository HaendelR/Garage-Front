import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragCarComponent } from './drag-car.component';

describe('DragCarComponent', () => {
  let component: DragCarComponent;
  let fixture: ComponentFixture<DragCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
