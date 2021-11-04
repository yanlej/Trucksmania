import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartFoodItalienComponent } from 'src/app/cart-Food/cart-food-italien/cart-food-italien.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'cart-food-italien', component: CartFoodItalienComponent},
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FoodItalienRoutingModule { }
