import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { faq } from '../interfaces.ts/faqs-interface';

import { FaqsService } from './faqs.service';

describe('FaqsService', () => {
  let service: FaqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        FaqsService,
        { provide: HttpClient }
      ]
    });
    service = TestBed.inject(FaqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected faqs (HttpClient called once)', (done: DoneFn) => {
    service.getFaqsList().subscribe({
      next: (res: faq[]) => { expect(res).toBeTruthy(), done() },
      error: (e) => done.fail
    });
  });

})
