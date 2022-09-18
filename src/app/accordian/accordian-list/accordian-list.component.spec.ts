import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faq } from 'src/app/interfaces.ts/faqs-interface';

import { AccordianListComponent } from './accordian-list.component';

describe('AccordianListComponent', () => {
  let component: AccordianListComponent;
  let fixture: ComponentFixture<AccordianListComponent>;
  const listExData: faq = {
    "id": 1,
    "question": "Accordian title test?",
    "answer": "Accordian description test"
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordianListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccordianListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should bind list', () => {
    const fixture = TestBed.createComponent(AccordianListComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.list = listExData;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.accordian-question')?.textContent).toContain(`Q${listExData.id}`);
    expect(compiled.querySelector('.accordian-title')?.textContent).toContain(listExData.question);
    expect(compiled.querySelector('.accordian-discription')?.textContent).toContain(listExData.answer);
  });
  it('should list open by trigger event', () =>{
    const fixture = TestBed.createComponent(AccordianListComponent);
    const comp = fixture.debugElement.componentInstance;
    comp.list = listExData;
    comp.toggleTrigger();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.accordian-item').className).toContain('active');
  })
});

