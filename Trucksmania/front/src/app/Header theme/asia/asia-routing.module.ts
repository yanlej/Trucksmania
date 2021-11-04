import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodAsiatiqueComponent } from 'src/app/Theme Food/food-asiatique/food-asiatique.component';

const routes: Routes = [
{ path: 'food-asiatique', component: FoodAsiatiqueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsiaRoutingModule { }
