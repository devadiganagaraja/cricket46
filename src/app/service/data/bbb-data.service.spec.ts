import { TestBed } from '@angular/core/testing';

import { BbbDataService } from './bbb-data.service';

describe('BbbDataService', () => {
  let service: BbbDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BbbDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
