import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalStepTransactionComponent } from './final-step-transaction.component';

describe('FinalStepTransactionComponent', () => {
  let component: FinalStepTransactionComponent;
  let fixture: ComponentFixture<FinalStepTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalStepTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalStepTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
