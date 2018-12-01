import { TestBed } from '@angular/core/testing';

import { ExplorerListService } from '../_core/_services/explorer-list.service';

describe('ExplorerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExplorerListService = TestBed.get(ExplorerListService);
    expect(service).toBeTruthy();
  });
});
