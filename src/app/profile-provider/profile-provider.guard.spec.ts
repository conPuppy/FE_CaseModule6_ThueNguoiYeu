import { TestBed } from '@angular/core/testing';

import { ProfileProviderGuard } from './profile-provider.guard';

describe('ProfileProviderGuard', () => {
  let guard: ProfileProviderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfileProviderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
