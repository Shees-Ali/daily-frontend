import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@NgModule({
  declarations: [HeroSectionComponent],
  imports: [CommonModule],
  exports: [HeroSectionComponent],
})
export class ComponentsModule {}
