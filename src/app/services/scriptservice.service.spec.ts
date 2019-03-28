import { TestBed } from '@angular/core/testing';

import { ScriptserviceService } from './scriptservice.service';

describe('ScriptserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScriptserviceService = TestBed.get(ScriptserviceService);
    expect(service).toBeTruthy();
  });
});
