import { TestBed } from '@angular/core/testing';

import { HomeAdminGuard } from './home-admin.guard';

describe('HomeAdminGuard', () => {
  let guard: HomeAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomeAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
