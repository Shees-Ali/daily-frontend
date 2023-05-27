import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss'],
})
export class InfoSectionComponent {
  isVisible = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = this.elementRef.nativeElement.querySelector('.info-left');
    const elementPosition =
      element.getBoundingClientRect().top + element.clientHeight;
    const scrollPosition = window.innerHeight + window.pageYOffset;

    if (elementPosition <= scrollPosition) {
      this.isVisible = true;
    }
  }
}
