import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetFeaturedPage } from './get-featured.page';
import { GetFeaturedRoutingModule } from './get-featured-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [GetFeaturedPage],
  imports: [CommonModule, 
            GetFeaturedRoutingModule,
            ComponentsModule],
})
export class GetFeaturedModule {}
