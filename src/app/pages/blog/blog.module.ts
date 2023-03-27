import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPage } from './blog.page';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [
    BlogPage
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
