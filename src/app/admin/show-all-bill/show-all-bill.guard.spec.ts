import { TestBed } from '@angular/core/testing';

import { ShowAllBillGuard } from './show-all-bill.guard';

describe('ShowAllBillGuard', () => {
  let guard: ShowAllBillGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShowAllBillGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
