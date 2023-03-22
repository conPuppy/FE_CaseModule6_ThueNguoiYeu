import { TestBed } from '@angular/core/testing';

import { AdproviderGuard } from './adprovider.guard';

describe('AdproviderGuard', () => {
  let guard: AdproviderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdproviderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
