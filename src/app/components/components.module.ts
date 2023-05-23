import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { FormsModule } from '@angular/forms';
import { ReferralsSectionComponent } from './referrals-section/referrals-section.component';
import { ReferralCardComponent } from './referral-card/referral-card.component';
import { UpperFooterSectionComponent } from './upper-footer-section/upper-footer-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { DescriptionSectionComponent } from './description-section/description-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { GetfeaturedFormComponent } from './getfeatured-form/getfeatured-form.component';

@NgModule({
  declarations: [
    HeroSectionComponent,
    InfoSectionComponent,
    ReferralsSectionComponent,
    ReferralCardComponent,
    UpperFooterSectionComponent,
    FooterSectionComponent,
    DescriptionSectionComponent,
    AboutSectionComponent,
    GetfeaturedFormComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HeroSectionComponent,
    InfoSectionComponent,
    ReferralsSectionComponent,
    UpperFooterSectionComponent,
    FooterSectionComponent,
    DescriptionSectionComponent,
    AboutSectionComponent,
    GetfeaturedFormComponent
  ],
})
export class ComponentsModule {}
