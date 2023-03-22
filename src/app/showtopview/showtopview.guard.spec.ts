import { TestBed } from '@angular/core/testing';

import { ShowtopviewGuard } from './showtopview.guard';

describe('ShowtopviewGuard', () => {
  let guard: ShowtopviewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShowtopviewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
