import { TestBed } from '@angular/core/testing';

import { ViewProviderGuard } from './view-provider.guard';

describe('ViewProviderGuard', () => {
  let guard: ViewProviderGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewProviderGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
