import { TestBed } from '@angular/core/testing';

import { ScreenManagerService } from './screen-manager.service';

describe('ScreenManagerService', () => {
  let service: ScreenManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
