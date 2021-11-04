import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Foodtruck } from 'src/app/models/Foodtruck';
import { FoodtrucksService } from 'src/app/services/foodtrucks.service';

@Component({
  selector: 'app-food-italien',
  templateUrl: './food-italien.component.html',
  styleUrls: ['./food-italien.component.css']
})
export class FoodItalienComponent implements OnInit {

  public foodtrucks: Foodtruck[] = [];

  public food: Foodtruck = <Foodtruck> {};

  constructor(

    private foodtrucksService: FoodtrucksService,
    private route: ActivatedRoute

    ) { }

  ngOnInit(): void {

    const theme = this.route.snapshot.paramMap.get('theme');
    console.log(theme);

    this.foodtrucksService.getFoodtruckByTheme(`${theme}`).subscribe({

      next: foodtrucks => {

        this.foodtrucks = foodtrucks;
        
      }
    });
  }

}
