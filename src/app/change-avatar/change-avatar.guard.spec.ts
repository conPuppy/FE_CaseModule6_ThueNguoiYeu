import { TestBed } from '@angular/core/testing';

import { ChangeAvatarGuard } from './change-avatar.guard';

describe('ChangeAvatarGuard', () => {
  let guard: ChangeAvatarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChangeAvatarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
