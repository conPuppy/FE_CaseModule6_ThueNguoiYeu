import { TestBed } from '@angular/core/testing';

import { ShowProfileGuard } from './show-profile.guard';

describe('ShowProfileGuard', () => {
  let guard: ShowProfileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShowProfileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
