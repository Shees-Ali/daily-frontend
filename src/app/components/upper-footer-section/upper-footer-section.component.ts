import { Component, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';


@Component({
  selector: 'upper-footer-section',
  templateUrl: './upper-footer-section.component.html',
  styleUrls: ['./upper-footer-section.component.scss']
})
export class UpperFooterSectionComponent extends BasePage{

  constructor(injector: Injector) {
    super(injector);
  }

  getFeatured(){
      this.nav.navigateTo('/get-featured');
  }
  getStarted() {}
}
