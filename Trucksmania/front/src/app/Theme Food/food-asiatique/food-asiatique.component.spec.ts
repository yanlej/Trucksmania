import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAsiatiqueComponent } from './food-asiatique.component';

describe('FoodAsiatiqueComponent', () => {
  let component: FoodAsiatiqueComponent;
  let fixture: ComponentFixture<FoodAsiatiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodAsiatiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAsiatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
