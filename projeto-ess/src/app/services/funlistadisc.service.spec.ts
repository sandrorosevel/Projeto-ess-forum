import { TestBed } from '@angular/core/testing';

import { FunListadiscService } from './funlistadisc.service';

describe('FunListadiscService', () => {
  let service: FunListadiscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunListadiscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
