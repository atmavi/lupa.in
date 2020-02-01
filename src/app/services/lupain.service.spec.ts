import { TestBed } from '@angular/core/testing';

import { LupainService } from './lupain.service';

describe('LupainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LupainService = TestBed.get(LupainService);
    expect(service).toBeTruthy();
  });
});
