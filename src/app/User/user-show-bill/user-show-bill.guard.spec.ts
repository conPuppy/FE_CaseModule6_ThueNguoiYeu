import { TestBed } from '@angular/core/testing';

import { UserShowBillGuard } from './user-show-bill.guard';

describe('UserShowBillGuard', () => {
  let guard: UserShowBillGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserShowBillGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
