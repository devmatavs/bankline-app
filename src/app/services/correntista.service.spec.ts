import { TestBed } from '@angular/core/testing';

import { CorrentistaService } from './correntista.service';

describe('CorrentitaService', () => {
  let service: CorrentistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrentistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
