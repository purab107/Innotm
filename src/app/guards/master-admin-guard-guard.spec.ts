import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MasterAdminGuard } from './master-admin-guard-guard';

describe('MasterAdminGuard', () => {
  let guard: MasterAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [MasterAdminGuard],
    });

    guard = TestBed.inject(MasterAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow or deny activation (based on mock logic)', () => {
    expect(guard.canActivate()).toBeTrue(); // or false depending on your logic
  });
});
