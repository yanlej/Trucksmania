import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrugalMapComponent } from '../frugal-map/frugal-map.component';
import { HomeComponent } from './home.component';

const routes: Routes = [

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
