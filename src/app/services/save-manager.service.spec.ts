import { TestBed } from '@angular/core/testing';

import { SaveManagerService } from './save-manager.service';

describe('SaveManagerService', () => {
  let service: SaveManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
