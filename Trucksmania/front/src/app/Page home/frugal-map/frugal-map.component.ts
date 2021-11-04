import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';



@Component({
  selector: 'app-frugal-map',
  templateUrl: './frugal-map.component.html',
  styleUrls: ['./frugal-map.component.css']
})
export class FrugalMapComponent implements AfterViewInit {
  
  

  constructor() { }
  
  //Fonction d'initialisation du composant
  ngAfterViewInit(): void {
    this.createMap();
  }

  //Création de la position de la carte 
  createMap() {
    const ecluses = {
      lat:43.335031,
      lon:3.216894,
    };
    
    const zoomLevel = 12;
    var map = L.map('map', {
      center: [ecluses.lat, ecluses.lon],
      zoom: zoomLevel
    });
    const mainLayer = L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 8,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(map);
    L.marker([43.335031, 3.216894]).addTo(map)
    .bindPopup('Truck italien')
    L.marker([43.30965, 3.47528]).addTo(map)
    .bindPopup('Truck Maroccain')
    L.marker([43.32953, 3.28640]).addTo(map)
    .bindPopup('Truck Chinois')
    L.marker([43.36291, 3.21829]).addTo(map)
    .bindPopup('Truck Americain')
    .openPopup();
   
  }
  
  

}
