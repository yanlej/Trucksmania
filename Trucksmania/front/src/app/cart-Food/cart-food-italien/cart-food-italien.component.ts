import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Carte } from 'src/app/models/Carte';
import { CarteService } from 'src/app/services/carte.service';

@Component({
  selector: 'app-cart-food-italien',
  templateUrl: './cart-food-italien.component.html',
  styleUrls: ['./cart-food-italien.component.css']
})
export class CartFoodItalienComponent implements OnInit {

  public cartes: Carte[] = [];

  public card: Carte = <Carte> {};

  constructor(

    private carteService: CarteService,
    private route: ActivatedRoute

    ) { }

  ngOnInit(): void {

    const num_food = this.route.snapshot.paramMap.get('num_food');
    console.log(num_food);

    this.carteService.getCarteByFood(`${num_food}`).subscribe({

      next: carte => {

        this.cartes = carte;
        
      }
    });
  }

}
