import { TestBed } from '@angular/core/testing';

import { AlumnoguardGuard } from './alumnoguard.guard';

describe('AlumnoguardGuard', () => {
  let guard: AlumnoguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlumnoguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
