import { TestBed } from '@angular/core/testing';

import { ChangeInfoGuard } from './change-info.guard';

describe('ChangeInfoGuard', () => {
  let guard: ChangeInfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChangeInfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
