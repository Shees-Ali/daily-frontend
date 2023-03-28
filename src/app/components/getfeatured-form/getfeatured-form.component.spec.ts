import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfeaturedFormComponent } from './getfeatured-form.component';

describe('GetfeaturedFormComponent', () => {
  let component: GetfeaturedFormComponent;
  let fixture: ComponentFixture<GetfeaturedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfeaturedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetfeaturedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
