import { TestBed } from '@angular/core/testing';

import { DwellerService } from './dweller.service';

describe('DwellerService', () => {
  let service: DwellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
