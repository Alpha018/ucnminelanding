import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailTransactionComponent } from './fail-transaction.component';

describe('FailTransactionComponent', () => {
  let component: FailTransactionComponent;
  let fixture: ComponentFixture<FailTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
