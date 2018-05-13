import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RestaurantService } from './restaurant.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantIndexComponent } from './restaurant/restaurant-index/restaurant-index.component';
import { RestaurantNewComponent } from './restaurant/restaurant-new/restaurant-new.component';
import { RestaurantEditComponent } from './restaurant/restaurant-edit/restaurant-edit.component';
import { ReviewComponent } from './review/review.component';
import { ReviewIndexComponent } from './review/review-index/review-index.component';
import { ReviewNewComponent } from './review/review-new/review-new.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantIndexComponent,
    RestaurantNewComponent,
    RestaurantEditComponent,
    ReviewComponent,
    ReviewIndexComponent,
    ReviewNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
