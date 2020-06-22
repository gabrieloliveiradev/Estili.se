import { TestBed } from '@angular/core/testing';

import { ContatoService } from './contato.service';

describe('ContatoService', () => {
  let service: ContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
