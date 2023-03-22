import { TestBed } from '@angular/core/testing';

import { ChangeApprearanceGuard } from './change-apprearance.guard';

describe('ChangeApprearanceGuard', () => {
  let guard: ChangeApprearanceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChangeApprearanceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
