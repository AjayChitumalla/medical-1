import { TestBed } from '@angular/core/testing';

import { TokenintcptService } from './tokenintcpt.service';

describe('TokenintcptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenintcptService = TestBed.get(TokenintcptService);
    expect(service).toBeTruthy();
  });
});
