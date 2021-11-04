import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAmericainComponent } from './food-americain.component';

describe('FoodAmericainComponent', () => {
  let component: FoodAmericainComponent;
  let fixture: ComponentFixture<FoodAmericainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodAmericainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAmericainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
