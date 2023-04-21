import { TestBed } from '@angular/core/testing';

import { DogsInformationService } from './dogs-information.service';

describe('DogsInformationService', () => {
  let service: DogsInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
