import { TestBed } from '@angular/core/testing';

import { LobbyViewService } from './view.service';

describe('ViewService', () => {
  let service: LobbyViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LobbyViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
