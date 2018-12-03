import { TestBed } from '@angular/core/testing';

import { FirebaseRtdbService } from './firebase-rtdb.service';

describe('FirebaseRtdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseRtdbService = TestBed.get(FirebaseRtdbService);
    expect(service).toBeTruthy();
  });
});
