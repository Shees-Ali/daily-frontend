import { Component, Injector } from '@angular/core';
import { BasePage } from 'src/app/base/base.page';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage extends BasePage {

  constructor(injector: Injector) {
    super(injector);
  }

  tohome(){
    this.nav.navigateTo('/main');
  }
}
