import { TestBed, inject } from '@angular/core/testing';

import { SharedModuleService } from './shared-module.service';

describe('SharedModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedModuleService]
    });
  });

  it('should be created', inject([SharedModuleService], (service: SharedModuleService) => {
    expect(service).toBeTruthy();
  }));
});
