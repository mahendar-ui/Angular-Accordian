import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { faq } from '../interfaces.ts/faqs-interface';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(public http: HttpClient) { }
  
  // get service call to read JSON file
  getFaqsList(): Observable<faq[]> {
    return this.http.get<faq[]>('../assets/jsons/faqs.json');
  }
}
