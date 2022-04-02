import { TestBed } from '@angular/core/testing';

import { ColorparamsService } from './colorparams.service';

describe('ColorparamsService', () => {
  let service: ColorparamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorparamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
