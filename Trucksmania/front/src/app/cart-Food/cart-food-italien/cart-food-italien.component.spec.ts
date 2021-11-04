import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFoodItalienComponent } from './cart-food-italien.component';

describe('CartFoodItalienComponent', () => {
  let component: CartFoodItalienComponent;
  let fixture: ComponentFixture<CartFoodItalienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartFoodItalienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFoodItalienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
