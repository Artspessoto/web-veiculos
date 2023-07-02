import { TestBed } from '@angular/core/testing';

import { ValidUserService } from './valid-user.service';

describe('ValidUserService', () => {
  let service: ValidUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
