import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantIndexComponent } from './restaurant/restaurant-index/restaurant-index.component';
import { RestaurantNewComponent } from './restaurant/restaurant-new/restaurant-new.component';
import { RestaurantEditComponent } from './restaurant/restaurant-edit/restaurant-edit.component';
import { ReviewIndexComponent } from './review/review-index/review-index.component';
import { ReviewNewComponent } from './review/review-new/review-new.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  { path: 'index',          component: RestaurantIndexComponent },
  { path: 'new',            component: RestaurantNewComponent },
  { path: 'edit/:id',       component: RestaurantEditComponent },
  { path: 'review/:id',     component: ReviewIndexComponent },
  { path: 'write/:id',      component: ReviewNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
