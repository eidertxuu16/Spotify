import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesPageComponent } from './pages/favourites-page/favourites-page.component';


@NgModule({
  declarations: [
    FavouritesPageComponent
  ],
  imports: [
    CommonModule,
    FavouritesRoutingModule
  ]
})
export class FavouritesModule { }
