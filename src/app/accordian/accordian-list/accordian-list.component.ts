import { Component, Input, OnInit } from '@angular/core';
import { faq } from 'src/app/interfaces.ts/faqs-interface';

@Component({
  selector: 'app-accordian-list',
  templateUrl: './accordian-list.component.html',
  styleUrls: ['./accordian-list.component.scss']
})
export class AccordianListComponent implements OnInit {
  @Input() list: faq;
  constructor() { }

  ngOnInit(): void {
  }
  // trigger call to toggle the accordian list
  toggleTrigger(): void {
    this.list.active = !this.list.active;
  }
}
