import { TestBed } from '@angular/core/testing';

import { HomeStoreFacade } from './home-store-facade.service';

describe('HomeStoreFacadeService', () => {
  let service: HomeStoreFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeStoreFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
