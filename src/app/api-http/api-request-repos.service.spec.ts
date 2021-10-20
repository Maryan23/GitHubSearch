import { TestBed } from '@angular/core/testing';

import { ApiRequestReposService } from './api-request-repos.service';

describe('ApiRequestReposService', () => {
  let service: ApiRequestReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRequestReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
