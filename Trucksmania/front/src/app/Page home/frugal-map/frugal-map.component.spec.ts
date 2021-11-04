import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrugalMapComponent } from './frugal-map.component';

describe('FrugalMapComponent', () => {
  let component: FrugalMapComponent;
  let fixture: ComponentFixture<FrugalMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrugalMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrugalMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
