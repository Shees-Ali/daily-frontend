import { Component, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent extends BasePage {
  constructor(injector: Injector) {
    super(injector);
  }

  goTo(path: string = '') {
    this.nav.navigateTo(path);
  }
}
