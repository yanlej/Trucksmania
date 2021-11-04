import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItalienComponent } from './food-italien.component';

describe('FoodItalienComponent', () => {
  let component: FoodItalienComponent;
  let fixture: ComponentFixture<FoodItalienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodItalienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItalienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
