import { Component, Input, OnChanges } from '@angular/core';
import { faq } from '../interfaces.ts/faqs-interface';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnChanges {
  @Input() accordianList: faq[];
  constructor() { }

  ngOnChanges(): void {
  }
}
