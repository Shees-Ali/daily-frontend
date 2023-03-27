import { Component, HostBinding } from '@angular/core';
import {
  trigger, state, style, animate, transition, // ...
} from '@angular/animations';


@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  animations: [
    trigger('heroSectionAnimation', [
      transition(':enter', [style({opacity: 0}), animate('2s')]
    )]
    )]
})

export class HeroSectionComponent {
  email: string = '';
  name: string = '';
  
  
  // const observer = new IntersectionObserver((enteries) => {
  //   enteries.forEach((entry) => {
  //     console.log(entry)
  //     if (entry.isIntersecting){
  //       entry.target.classList.add('show');
  //     }
  //     else {
  //       entry.target.classList.remove('show');
  //     }
  //   });
  // });
  // const mainElement = document.querySelectorAll('.main-section');
  // mainElement.forEach((el) => observer.observer(el));
  
  getStarted(){}
  
  show = false;
  constructor() { }
  get stateName() {
    return this.show ? 'show' : 'hide'
  }
  toggle() {
    this.show = !this.show;
  }
}
