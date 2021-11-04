import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsiaComponent } from 'src/app/Header theme/asia/asia.component';
import { FoodAsiatiqueComponent } from './food-asiatique.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodAsiatiqueRoutingModule { }
