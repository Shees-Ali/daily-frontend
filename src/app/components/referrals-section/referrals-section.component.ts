import { Component, HostListener, ElementRef  } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'referrals-section',
  templateUrl: './referrals-section.component.html',
  styleUrls: ['./referrals-section.component.scss']
})
export class ReferralsSectionComponent {
  config: SwiperOptions = {
        pagination: { 
          el: '.swiper-pagination', 
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
      };  
      onSwiper(){
        
      }
      onSlideChange(){

      }
  
  isVisible = false;
  constructor(private elementRef: ElementRef) {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const element = this.elementRef.nativeElement.querySelector('.animate');
    const elementPosition = element.getBoundingClientRect().top + element.clientHeight;
    const scrollPosition = window.innerHeight + window.pageYOffset;
    
    if (elementPosition <= scrollPosition) {
      this.isVisible = true;
    }
    else {
      this.isVisible = false;
    }
  }
}
