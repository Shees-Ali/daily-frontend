import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { FormsModule } from '@angular/forms';
import { ReferralsSectionComponent } from './referrals-section/referrals-section.component';
import { ReferralCardComponent } from './referral-card/referral-card.component';
import { UpperFooterSectionComponent } from './upper-footer-section/upper-footer-section.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    InfoSectionComponent,
    ReferralsSectionComponent,
    ReferralCardComponent,
    UpperFooterSectionComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeroSectionComponent,
    InfoSectionComponent,
    ReferralsSectionComponent,
    UpperFooterSectionComponent
  ],
})
export class ComponentsModule {}
