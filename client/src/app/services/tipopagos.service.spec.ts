import { TestBed } from '@angular/core/testing';

import { TipopagosService } from './tipopagos.service';

describe('TipopagosService', () => {
  let service: TipopagosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipopagosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
