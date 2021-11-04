import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Page home/home/home.component';
import { HomeNavComponent } from './Page home/home-nav/home-nav.component';
import { InfoComponent } from './Page home/info/info.component';
import { HomeModule } from './Page home/home/home.module';
import { FooterComponent } from './footer/footer.component';
import { FrugalMapComponent } from './Page home/frugal-map/frugal-map.component';
import { FoodItalienComponent } from './Theme Food/food-italien/food-italien.component';
import { FrugalMapModule } from './Page home/frugal-map/frugal-map.module';
import { FoodAsiatiqueComponent } from './Theme Food/food-asiatique/food-asiatique.component'; 
import { AsiaComponent } from './Header theme/asia/asia.component';
import { FoodAmericainComponent } from './Theme Food/food-americain/food-americain.component';
import { FoodMarocainComponent } from './Theme Food/food-marocain/food-marocain.component';
import { PanierComponent } from './panier/panier.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartFoodItalienComponent } from './cart-Food/cart-food-italien/cart-food-italien.component';
import { FoodItalienRoutingModule } from './Theme Food/food-italien/food-italien-routing.module';
import { ProComponent } from './pro/pro.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNavComponent,
    InfoComponent,
    FooterComponent,
    FrugalMapComponent,
    FoodItalienComponent,
    FoodAsiatiqueComponent,
    AsiaComponent,
    FoodAmericainComponent,
    FoodMarocainComponent,
    PanierComponent,
    LoginComponent,
    SignupComponent,
    CartFoodItalienComponent,
    ProComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FrugalMapModule,
    FoodItalienRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
