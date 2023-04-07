import { TestBed } from '@angular/core/testing';

import { BebeidasService } from './bebeidas.service';

describe('BebeidasService', () => {
  let service: BebeidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BebeidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
