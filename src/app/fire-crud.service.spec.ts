import { TestBed, inject } from '@angular/core/testing';

import { FireCrudService } from './fire-crud.service';

describe('FireCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireCrudService]
    });
  });

  it('should be created', inject([FireCrudService], (service: FireCrudService) => {
    expect(service).toBeTruthy();
  }));
});
