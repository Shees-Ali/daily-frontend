import { Component, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-get-featured',
  templateUrl: './get-featured.page.html',
  styleUrls: ['./get-featured.page.scss'],
})
export class GetFeaturedPage extends BasePage {
  constructor(injector: Injector) {
    super(injector);
  }

  tohome(){
    this.nav.navigateTo('/main');
  }
}
