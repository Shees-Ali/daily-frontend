import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperFooterSectionComponent } from './upper-footer-section.component';

describe('UpperFooterSectionComponent', () => {
  let component: UpperFooterSectionComponent;
  let fixture: ComponentFixture<UpperFooterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperFooterSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperFooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
