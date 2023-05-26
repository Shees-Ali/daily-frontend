import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss']
})
export class DescriptionSectionComponent {
  
  ismedium:boolean = false;
  screenWidth: number = 0;

  constructor(){
    this.onResize();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenWidth = window.innerWidth;
    this.checksize();
  }

  checksize(){
    if (this.screenWidth <= 960 && this.screenWidth >=600){
      this.ismedium = true;
    }
    else if (this.screenWidth < 460){
      this.ismedium = true;
    }
    else{
      this.ismedium = false;
    }
  }
}
