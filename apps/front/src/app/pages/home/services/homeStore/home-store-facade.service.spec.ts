import { TestBed } from '@angular/core/testing';

import { HomeStoreService } from './home-store-facade.service';

describe('HomeStoreFacadeService', () => {
  let service: HomeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
