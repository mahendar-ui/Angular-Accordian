import { Component, OnInit } from '@angular/core';
import { FaqsService } from './faqs/faqs.service';
import { faq } from './interfaces.ts/faqs-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Have a questions? we can help';
  faqsList: faq[];
  constructor(public faqsService: FaqsService) { }

  ngOnInit() {
    this.faqsService.getFaqsList().subscribe({
      next: (res:faq[]) => { this.faqsList = res},
      error: (e) => console.log(e)
    })
  }
}
