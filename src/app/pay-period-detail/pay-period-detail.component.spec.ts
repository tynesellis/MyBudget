import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPeriodDetailComponent } from './pay-period-detail.component';

describe('PayPeriodDetailComponent', () => {
  let component: PayPeriodDetailComponent;
  let fixture: ComponentFixture<PayPeriodDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayPeriodDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPeriodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
