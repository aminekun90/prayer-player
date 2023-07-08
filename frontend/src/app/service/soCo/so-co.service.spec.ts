import { TestBed } from '@angular/core/testing';

import { SoCoService } from './so-co.service';

describe('SoCoServiceService', () => {
  let service: SoCoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoCoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
