import { TestBed } from '@angular/core/testing';

import { UtakmicaService } from './utakmica.service';

describe('UtakmicaService', () => {
  let service: UtakmicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtakmicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
