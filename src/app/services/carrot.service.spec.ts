import { TestBed, inject } from '@angular/core/testing';

import { CarrotService } from './carrot.service';

describe('CarrotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarrotService]
    });
  });

  it('should be created', inject([CarrotService], (service: CarrotService) => {
    expect(service).toBeTruthy();
  }));
});
