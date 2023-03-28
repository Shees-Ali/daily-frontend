import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { GetfeaturedFormComponent } from './components/getfeatured-form/getfeatured-form.component';

@NgModule({
  declarations: [AppComponent, AboutSectionComponent, GetfeaturedFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
