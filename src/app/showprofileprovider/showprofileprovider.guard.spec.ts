import { TestBed } from '@angular/core/testing';

import { ShowprofileproviderGuard } from './showprofileprovider.guard';

describe('ShowprofileproviderGuard', () => {
  let guard: ShowprofileproviderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShowprofileproviderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
