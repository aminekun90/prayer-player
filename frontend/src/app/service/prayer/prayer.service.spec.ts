import { TestBed } from '@angular/core/testing';

import { PrayerService } from './prayer.service';

describe('PrayerService', () => {
  let service: PrayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
