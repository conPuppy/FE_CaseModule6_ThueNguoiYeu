import { TestBed } from '@angular/core/testing';

import { ProviderShowBillGuard } from './provider-show-bill.guard';

describe('ProviderShowBillGuard', () => {
  let guard: ProviderShowBillGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProviderShowBillGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
