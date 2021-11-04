import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Page home/home/home.component';
import { HomeNavComponent } from './Page home/home-nav/home-nav.component';
import { InfoComponent } from './Page home/info/info.component';
import { FrugalMapComponent } from './Page home/frugal-map/frugal-map.component';
import { AppComponent } from './app.component';
import { AsiaComponent } from './Header theme/asia/asia.component';
import { FoodItalienComponent } from './Theme Food/food-italien/food-italien.component';
import { PanierComponent } from './panier/panier.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartFoodItalienComponent } from './cart-Food/cart-food-italien/cart-food-italien.component';
import { ProComponent } from './pro/pro.component';

const routes: Routes = [
  { path: 'foodtrucks/:theme', component: FoodItalienComponent},
  { path: 'panier', component: PanierComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'cart-food/:num_food', component: CartFoodItalienComponent },
  { path: 'pro', component: ProComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
