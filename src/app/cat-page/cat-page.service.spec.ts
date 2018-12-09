import { TestBed } from '@angular/core/testing';

import { CatPageService } from './cat-page.service';

describe('CatPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CatPageService = TestBed.get(CatPageService);
    expect(service).toBeTruthy();
  });
});
