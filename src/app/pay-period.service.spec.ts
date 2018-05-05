import { TestBed, inject } from '@angular/core/testing';

import { PayPeriodService } from './pay-period.service';

describe('PayPeriodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PayPeriodService]
    });
  });

  it('should be created', inject([PayPeriodService], (service: PayPeriodService) => {
    expect(service).toBeTruthy();
  }));
});
