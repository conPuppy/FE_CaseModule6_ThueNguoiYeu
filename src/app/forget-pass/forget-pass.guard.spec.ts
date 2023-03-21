import { TestBed } from '@angular/core/testing';

import { ForgetPassGuard } from './forget-pass.guard';

describe('ForgetPassGuard', () => {
  let guard: ForgetPassGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ForgetPassGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
