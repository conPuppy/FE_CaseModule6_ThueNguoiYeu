import { TestBed } from '@angular/core/testing';

import { HomeboyGuard } from './homeboy.guard';

describe('HomeboyGuard', () => {
  let guard: HomeboyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomeboyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
