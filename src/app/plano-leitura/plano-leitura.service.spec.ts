import { TestBed } from '@angular/core/testing';

import { PlanoLeituraService } from './plano-leitura.service';

describe('PlanoLeituraService', () => {
  let service: PlanoLeituraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanoLeituraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
