import { AfterViewInit, Component } from '@angular/core';
// import {gsap} from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
// implements AfterViewInit 
{
  title = 'daily-frontend';
  // initScrollTrigger() : void {
  //   gsap.to('.info',{
  //     opacity: 1,
  //     x: 0,
  //     duration: 0.5,
  //     stagger: 0.05,
  //     delay: 0.2,
  //     scrollTrigger: {
  //       trigger: 'hero-section.component',
  //       scrub: true,
  //       start: "25% top",
  //       end: "bottom top"
  //     }
  //   })
  // }
  // ngAfterViewInit(): void {
  //   this.initScrollTrigger();
  // }
}
