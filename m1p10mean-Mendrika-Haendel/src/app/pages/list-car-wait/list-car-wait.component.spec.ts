import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarWaitComponent } from './list-car-wait.component';

describe('ListCarWaitComponent', () => {
  let component: ListCarWaitComponent;
  let fixture: ComponentFixture<ListCarWaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCarWaitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCarWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
