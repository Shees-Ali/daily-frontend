import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetFeaturedPage } from './get-featured.page';
import { GetFeaturedRoutingModule } from './get-featured-routing.module';

@NgModule({
  declarations: [GetFeaturedPage],
  imports: [CommonModule, GetFeaturedRoutingModule],
})
export class GetFeaturedModule {}
