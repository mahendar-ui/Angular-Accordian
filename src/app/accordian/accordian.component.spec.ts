import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faq } from '../interfaces.ts/faqs-interface';

import { AccordianComponent } from './accordian.component';

describe('AccordianComponent', () => {
  let component: AccordianComponent;
  let fixture: ComponentFixture<AccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordianComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
