import { TestBed } from '@angular/core/testing';

import { FunctionConnectService } from './function-connect.service';

describe('FunctionConnectService', () => {
  let service: FunctionConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
