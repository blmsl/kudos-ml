import { TestBed } from '@angular/core/testing';

import { Kudos1Service } from './kudos.service';

describe('Kudos1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Kudos1Service = TestBed.get(Kudos1Service);
    expect(service).toBeTruthy();
  });
});
