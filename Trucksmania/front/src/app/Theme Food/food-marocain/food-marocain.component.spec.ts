import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMarocainComponent } from './food-marocain.component';

describe('FoodMarocainComponent', () => {
  let component: FoodMarocainComponent;
  let fixture: ComponentFixture<FoodMarocainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMarocainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMarocainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
