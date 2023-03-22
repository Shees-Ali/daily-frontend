import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeroSectionComponent, InfoSectionComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeroSectionComponent, InfoSectionComponent],
})
export class ComponentsModule {}
