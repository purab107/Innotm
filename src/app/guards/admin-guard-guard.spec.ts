import { TestBed } from '@angular/core/testing';
// Update the import path to match the actual file name, e.g. './admin-guard.guard'
import { AdminGuard } from './admin-guard-guard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AdminGuard],
    });

    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if condition is met (mocked)', () => {
    // This depends on your actual logic
    expect(guard.canActivate({} as any)).toBeTrue(); // or `.toBe(false)`
  });
});
