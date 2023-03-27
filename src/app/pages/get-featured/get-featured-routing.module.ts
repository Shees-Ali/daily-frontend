import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetFeaturedPage } from './get-featured.page';

const routes: Routes = [
  {
    path: '',
    component: GetFeaturedPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetFeaturedRoutingModule {}
