import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from './listing/listing.component';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>
    <section class="container">
      <!-- This article element represents and entire listing -->
       @for(carEntry of carList; track carEntry) {
        <app-listing [car]="carEntry" (carSaved)="addCarToSaved($event)"/>
      }
      <!-- end car listing markup -->
       
    </section>
    <article>
    @for (savedCarEntry of savedCarList; track savedCarEntry) {
        <p> {{savedCarEntry.make}} {{savedCarEntry.model}} </p>
       }
    </article>
  `,
  styles: [],
  imports:  [ListingComponent]
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];

  addCarToSaved(car: Car) {
    this.savedCarList.push(car);
  }
}
