import { TestBed } from '@angular/core/testing';

import { LoginProfissionalService } from './login-profissional.service';

describe('LoginProfissionalService', () => {
  let service: LoginProfissionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginProfissionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
