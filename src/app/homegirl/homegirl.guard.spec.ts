import { TestBed } from '@angular/core/testing';

import { HomegirlGuard } from './homegirl.guard';

describe('HomegirlGuard', () => {
  let guard: HomegirlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomegirlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
