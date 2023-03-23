import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { FormsModule } from '@angular/forms';
import { ReferralsSectionComponent } from './referrals-section/referrals-section.component';
import { ReferralCardComponent } from './referral-card/referral-card.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    InfoSectionComponent,
    ReferralsSectionComponent,
    ReferralCardComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeroSectionComponent,
    InfoSectionComponent,
    ReferralsSectionComponent,
  ],
})
export class ComponentsModule {}
